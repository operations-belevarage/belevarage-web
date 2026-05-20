import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, location, cropTypes, monthlyVolume, mobile, pickupPoint, cooperative } = body;

    const farmer = await prisma.farmer.create({
      data: {
        fullName,
        location,
        cropTypes: cropTypes || [],
        monthlyVolume,
        mobile,
        pickupPoint,
        cooperative,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, data: farmer }, { status: 201 });
  } catch (error) {
    console.error('Error creating farmer registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register farmer' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const farmers = await prisma.farmer.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: farmers });
  } catch (error) {
    console.error('Error fetching farmers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch farmers' },
      { status: 500 }
    );
  }
}
