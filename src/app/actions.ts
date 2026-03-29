'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

// --- CLIENT SUBMISSION ACTIONS ---

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
    revalidatePath("/admin");
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
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("[submitQuoteRequest] Prisma error:", error);
    return { success: false, error: "Gagal mengirim permintaan. Silakan coba lagi." };
  }
}

// --- ADMIN MANAGEMENT ACTIONS ---

export async function markContactAsRead(id: string) {
  try {
    await prisma.contactSubmission.update({
      where: { id },
      data: { isRead: true, status: "dibaca" },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("[markContactAsRead] Error:", error);
    return { success: false };
  }
}

export async function deleteContactSubmission(id: string) {
  try {
    await prisma.contactSubmission.delete({ where: { id } });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("[deleteContactSubmission] Error:", error);
    return { success: false };
  }
}

export async function markQuoteAsRead(id: string) {
  try {
    await prisma.quoteRequest.update({
      where: { id },
      data: { isRead: true, status: "dibaca" },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("[markQuoteAsRead] Error:", error);
    return { success: false };
  }
}

export async function deleteQuoteRequest(id: string) {
  try {
    await prisma.quoteRequest.delete({ where: { id } });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("[deleteQuoteRequest] Error:", error);
    return { success: false };
  }
}
