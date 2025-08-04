import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Create minimal user record (no password, no auth complexity)
    const user = await prisma.user.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone || null,
        role: 'CUSTOMER',
        status: 'LEAD',
        password: '' // No authentication needed
      }
    });

    // Create customer record with all the project details
    const customer = await prisma.customer.create({
      data: {
        userId: user.id,
        companyName: body.organizationType !== 'individual' ? body.organizationName : null,
        customerGroup: body.organizationType === 'business' ? 'CONTRACTOR' : 'RETAIL',
        metadata: {
          // Store all form data here
          organizationType: body.organizationType,
          organizationName: body.organizationName,
          projectAddress: body.projectAddress,
          projectType: body.projectType,
          courtSize: body.courtSize,
          surfaceCondition: body.surfaceCondition,
          timeline: body.timeline,
          budget: body.budget,
          preferredDate: body.preferredDate,
          preferredTime: body.preferredTime,
          message: body.message,
          submissionDate: new Date().toISOString(),
          isLead: true
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We received your inquiry and will contact you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process your inquiry. Please try again.' 
      },
      { status: 500 }
    );
  }
}