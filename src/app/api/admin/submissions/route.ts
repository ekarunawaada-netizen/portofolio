import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const auth = searchParams.get("auth");
    const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

    if (auth !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [contacts, quotes] = await Promise.all([
      prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" } }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        quotes,
      },
    });
  } catch (error) {
    console.error("[API Admin GET] Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
