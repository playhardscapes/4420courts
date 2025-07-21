import BigCommerceAPI from '@/lib/bigcommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await BigCommerceAPI.client.get('/catalog/categories');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' }, 
      { status: 500 }
    );
  }
}