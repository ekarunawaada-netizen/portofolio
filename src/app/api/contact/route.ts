import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, projectType, address, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nama dan Nomor Telepon wajib diisi" },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        projectType: projectType || "Bangun Rumah Baru",
        address: address?.trim() || null,
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error) {
    console.error("[API Contact POST] Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
