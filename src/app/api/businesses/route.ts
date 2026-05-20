import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, ownerName, businessTypes, city, mobile, email, description, monthlyRevenue, digitalPresence } = body;

    const business = await prisma.business.create({
      data: {
        businessName,
        ownerName,
        businessTypes: businessTypes || [],
        city,
        mobile,
        email,
        description,
        monthlyRevenue,
        digitalPresence,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, data: business }, { status: 201 });
  } catch (error) {
    console.error('Error creating business registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register business' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const businesses = await prisma.business.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: businesses });
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch businesses' },
      { status: 500 }
    );
  }
}
