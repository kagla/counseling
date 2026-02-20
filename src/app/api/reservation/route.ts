import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, counselingType, preferredDate, preferredTime, message } = body;

    if (!name || !phone || !counselingType || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        name,
        phone,
        email: email || null,
        counselingType,
        preferredDate: new Date(preferredDate),
        preferredTime,
        message: message || null,
        status: "pending",
      },
    });

    return NextResponse.json(
      { message: "예약이 접수되었습니다.", id: reservation.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "예약 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reservations);
  } catch (error) {
    console.error("Fetch reservations error:", error);
    return NextResponse.json(
      { error: "예약 목록을 불러오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
