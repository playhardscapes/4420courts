import { NextResponse } from 'next/server';
import BigCommerceAPI from '../../../../lib/bigcommerce.js';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Validate customer credentials
    const result = await BigCommerceAPI.validateCustomer(email, password);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 401 }
      );
    }

    // Get customer group information
    const customer = result.customer;
    const customerGroups = await BigCommerceAPI.getCustomerGroups();
    
    let membershipLevel = 'free';
    if (customer.customer_group_id) {
      const group = customerGroups.data.find(g => g.id === customer.customer_group_id);
      if (group) {
        membershipLevel = group.name.toLowerCase();
      }
    }

    // Return customer data and membership level
    return NextResponse.json({
      success: true,
      customer: {
        id: customer.id,
        email: customer.email,
        first_name: customer.first_name,
        last_name: customer.last_name,
        customer_group_id: customer.customer_group_id,
        membershipLevel: membershipLevel
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}