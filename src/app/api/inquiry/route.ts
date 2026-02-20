import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, category, message } = body;

    if (!name || !phone || !category || !message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        phone,
        email: email || null,
        category,
        message,
      },
    });

    return NextResponse.json(
      { message: "문의가 접수되었습니다.", id: inquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { error: "문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
