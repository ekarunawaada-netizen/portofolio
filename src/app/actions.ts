'use server'

import { createServerClient } from "../lib/supabase";

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
  const supabase = createServerClient();

  const { error } = await supabase
    .from("contact_submissions")
    .insert({
      name: data.name.trim(),
      phone: data.phone.trim(),
      project_type: data.projectType || "Bangun Rumah Baru",
      address: data.address?.trim() || null,
      message: data.message?.trim() || null,
    });

  if (error) {
    console.error("[submitContactForm] Supabase error:", error.message);
    return { success: false, error: "Gagal mengirim pesan. Silakan coba lagi." };
  }

  return { success: true };
}

// For: RequestQuoteModal on /layanan
export async function submitQuoteRequest(data: QuoteRequestData): Promise<ActionResult> {
  const supabase = createServerClient();

  const { error } = await supabase
    .from("quote_requests")
    .insert({
      name: data.name.trim(),
      phone: data.phone.trim(),
      service: data.service.trim(),
      address: data.address?.trim() || null,
      message: data.message?.trim() || null,
    });

  if (error) {
    console.error("[submitQuoteRequest] Supabase error:", error.message);
    return { success: false, error: "Gagal mengirim permintaan. Silakan coba lagi." };
  }

  return { success: true };
}
