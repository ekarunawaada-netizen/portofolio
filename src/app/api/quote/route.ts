import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, address, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Nama, Nomor Telepon, dan Layanan wajib diisi" },
        { status: 400 }
      );
    }

    const quote = await prisma.quoteRequest.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        service: service.trim(),
        address: address?.trim() || null,
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({ success: true, data: quote }, { status: 201 });
  } catch (error) {
    console.error("[API Quote POST] Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
