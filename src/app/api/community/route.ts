import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, mobile, email, city, interests, source } = body;

    const member = await prisma.communityMember.create({
      data: {
        fullName,
        mobile,
        email,
        city,
        interests: interests || [],
        source,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, data: member }, { status: 201 });
  } catch (error) {
    console.error('Error creating community member:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register community member' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const members = await prisma.communityMember.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: members });
  } catch (error) {
    console.error('Error fetching community members:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch community members' },
      { status: 500 }
    );
  }
}
