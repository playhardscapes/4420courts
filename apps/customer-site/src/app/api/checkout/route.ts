import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customerInfo } = body;

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart items are required' },
        { status: 400 }
      );
    }

    if (!customerInfo || !customerInfo.email) {
      return NextResponse.json(
        { error: 'Customer information with email is required' },
        { status: 400 }
      );
    }

    // Calculate totals
    const subtotal = items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', ''));
      return sum + (price * item.quantity);
    }, 0);

    const taxRate = 0.08; // 8% tax rate
    const taxAmount = subtotal * taxRate;
    const totalAmount = subtotal + taxAmount;

    // Create customer in dealer portal if they don't exist
    let customerId;
    try {
      // First try to find existing customer
      const dealerPortalUrl = process.env.DEALER_PORTAL_URL || 'http://localhost:3001';
      const existingCustomerResponse = await fetch(
        `${dealerPortalUrl}/api/customers?email=${encodeURIComponent(customerInfo.email)}`
      );
      
      if (existingCustomerResponse.ok) {
        const existingCustomers = await existingCustomerResponse.json();
        if (existingCustomers.length > 0) {
          customerId = existingCustomers[0].id;
        }
      }

      // Create new customer if not found
      if (!customerId) {
        const customerResponse = await fetch(`${dealerPortalUrl}/api/customers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: customerInfo.name || 'Online Customer',
            email: customerInfo.email,
            phone: customerInfo.phone || '',
            address: customerInfo.address || '',
            status: 'Lead',
            source: 'Website Order',
            projectType: 'Online Purchase',
            budget: `$${totalAmount.toFixed(2)}`,
            notes: 'Customer created from online order'
          }),
        });

        if (customerResponse.ok) {
          const customerData = await customerResponse.json();
          customerId = customerData.customer.id;
        } else {
          throw new Error('Failed to create customer');
        }
      }
    } catch (customerError) {
      console.error('Error handling customer:', customerError);
      return NextResponse.json(
        { error: 'Failed to process customer information' },
        { status: 500 }
      );
    }

    // Create order in dealer portal
    try {
      const orderItems = items.map((item) => ({
        sku: item.id,
        name: item.name,
        description: item.description || '',
        quantity: item.quantity,
        unitPrice: parseFloat(item.price.replace('$', '').replace(',', '')),
        totalPrice: parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity
      }));

      const orderResponse = await fetch(`${dealerPortalUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: customerId,
          status: 'PENDING',
          paymentStatus: 'PENDING',
          billingAddress: {
            street: customerInfo.address || '',
            city: '',
            state: '',
            zip: '',
            country: 'USA'
          },
          shippingAddress: {
            street: customerInfo.address || '',
            city: '',
            state: '',
            zip: '',
            country: 'USA'
          },
          notes: `Online order placed through customer website. Customer: ${customerInfo.name || 'Online Customer'} (${customerInfo.email}). Items: ${items.map(i => `${i.name} (${i.quantity})`).join(', ')}`,
          items: orderItems
        }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.text();
        console.error('Order creation failed:', errorData);
        throw new Error('Failed to create order in dealer portal');
      }

      const orderData = await orderResponse.json();

      // If this order requires scheduling (services), create appointments
      const serviceItems = items.filter(item => 
        item.category === 'SERVICES' || 
        item.name.toLowerCase().includes('consultation') ||
        item.name.toLowerCase().includes('visit') ||
        item.name.toLowerCase().includes('service')
      );

      if (serviceItems.length > 0 && customerInfo.requestedDate) {
        try {
          for (const serviceItem of serviceItems) {
            // Calculate end time (default to 1 hour if not specified)
            const startTime = new Date(customerInfo.requestedDate);
            const endTime = new Date(startTime.getTime() + (60 * 60 * 1000)); // 1 hour later

            const appointmentResponse = await fetch(`${dealerPortalUrl}/api/appointments`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                customerId: customerId,
                productId: serviceItem.id,
                scheduledStart: startTime.toISOString(),
                scheduledEnd: endTime.toISOString(),
                location: customerInfo.address || 'To be determined',
                notes: `Scheduled from online order ${orderData.order?.orderNumber || 'ORD-' + Date.now()}. Customer requested: ${customerInfo.requestedDate}`,
                status: 'SCHEDULED'
              }),
            });

            if (appointmentResponse.ok) {
              console.log(`Appointment created for service: ${serviceItem.name}`);
            } else {
              console.error(`Failed to create appointment for service: ${serviceItem.name}`);
            }
          }
        } catch (scheduleError) {
          console.error('Failed to schedule service:', scheduleError);
          // Don't fail the order if scheduling fails
        }
      }

      return NextResponse.json({
        success: true,
        order: {
          id: orderData.order?.id || 'generated',
          orderNumber: orderData.order?.orderNumber || 'ORD-' + Date.now(),
          totalAmount: totalAmount,
          status: 'Pending'
        },
        message: 'Order placed successfully! You will receive a confirmation email shortly.'
      });

    } catch (orderError) {
      console.error('Error creating order:', orderError);
      return NextResponse.json(
        { error: 'Failed to create order. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error during checkout' },
      { status: 500 }
    );
  }
}