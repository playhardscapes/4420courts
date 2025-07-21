import BigCommerceAPI from '@/lib/bigcommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await BigCommerceAPI.getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' }, 
      { status: 500 }
    );
  }
}