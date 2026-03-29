'use server'

import { prisma } from "../lib/prisma";

export type ContactFormData = {
  name: string;
  phone: string;
  projectType?: string;
  address?: string;
  message?: string;
};

export type QuoteRequestData = {
  name: string;
  phone: string;
  service: string;
  address?: string;
  message?: string;
};

export type ActionResult = {
  success: boolean;
  error?: string;
};

// For: ContactForm on /page.tsx and /tentang
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    await prisma.contactSubmission.create({
      data: {
        name: data.name.trim(),
        phone: data.phone.trim(),
        projectType: data.projectType || "Bangun Rumah Baru",
        address: data.address?.trim() || null,
        message: data.message?.trim() || null,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("[submitContactForm] Prisma error:", error);
    return { success: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
  }
}

// For: RequestQuoteModal on /layanan
export async function submitQuoteRequest(data: QuoteRequestData): Promise<ActionResult> {
  try {
    await prisma.quoteRequest.create({
      data: {
        name: data.name.trim(),
        phone: data.phone.trim(),
        service: data.service.trim(),
        address: data.address?.trim() || null,
        message: data.message?.trim() || null,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("[submitQuoteRequest] Prisma error:", error);
    return { success: false, error: "Gagal mengirim permintaan. Silakan coba lagi." };
  }
}
