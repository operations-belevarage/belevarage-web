import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clinicName, practitionerName, specialisation, city, mobile, email, communitySize, eventsInterested } = body;

    const healthcare = await prisma.healthcare.create({
      data: {
        clinicName,
        practitionerName,
        specialisation,
        city,
        mobile,
        email,
        communitySize,
        eventsInterested: eventsInterested || [],
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, data: healthcare }, { status: 201 });
  } catch (error) {
    console.error('Error creating healthcare registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register healthcare provider' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const providers = await prisma.healthcare.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: providers });
  } catch (error) {
    console.error('Error fetching healthcare providers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch healthcare providers' },
      { status: 500 }
    );
  }
}
