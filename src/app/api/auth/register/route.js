import { NextResponse } from 'next/server';
import BigCommerceAPI from '../../../../lib/bigcommerce.js';

export async function POST(request) {
  try {
    const { email, password, firstName, lastName, membershipLevel } = await request.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if customer already exists
    const existingCustomer = await BigCommerceAPI.getCustomerByEmail(email);
    if (existingCustomer) {
      return NextResponse.json(
        { error: 'Customer with this email already exists' },
        { status: 400 }
      );
    }

    // Get customer groups to find the appropriate group ID
    const customerGroups = await BigCommerceAPI.getCustomerGroups();
    let customerGroupId = null;

    if (membershipLevel && membershipLevel !== 'free') {
      const targetGroup = customerGroups.data.find(
        group => group.name.toLowerCase() === membershipLevel.toLowerCase()
      );
      if (targetGroup) {
        customerGroupId = targetGroup.id;
      }
    }

    // Create new customer
    const customerData = {
      email,
      first_name: firstName,
      last_name: lastName,
      customer_group_id: customerGroupId,
      accepts_product_review_abandoned_cart_emails: true,
      authentication: {
        new_password: password
      }
    };

    const result = await BigCommerceAPI.createCustomer(customerData);

    if (!result || !result.data || result.data.length === 0) {
      return NextResponse.json(
        { error: 'Failed to create customer account' },
        { status: 500 }
      );
    }

    const newCustomer = result.data[0];

    return NextResponse.json({
      success: true,
      customer: {
        id: newCustomer.id,
        email: newCustomer.email,
        first_name: newCustomer.first_name,
        last_name: newCustomer.last_name,
        customer_group_id: newCustomer.customer_group_id,
        membershipLevel: membershipLevel || 'free'
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}