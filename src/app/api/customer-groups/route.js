import { NextResponse } from 'next/server';
import BigCommerceAPI from '../../../lib/bigcommerce.js';

export async function GET() {
  try {
    const customerGroups = await BigCommerceAPI.getCustomerGroups();
    return NextResponse.json(customerGroups);
  } catch (error) {
    console.error('Error fetching customer groups:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customer groups' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const groupData = await request.json();
    
    if (!groupData.name) {
      return NextResponse.json(
        { error: 'Group name is required' },
        { status: 400 }
      );
    }

    const result = await BigCommerceAPI.createCustomerGroup(groupData);
    
    if (!result) {
      return NextResponse.json(
        { error: 'Failed to create customer group' },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating customer group:', error);
    return NextResponse.json(
      { error: 'Failed to create customer group' },
      { status: 500 }
    );
  }
}