import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      category, 
      message, 
      phone,
      organisation,
      designation,
      fundType,
      ticketSize 
    } = body;

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        category,
        message,
        phone,
        organisation,
        designation,
        fundType,
        ticketSize,
        status: 'UNREAD',
      },
    });

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enquiries' },
      { status: 500 }
    );
  }
}
