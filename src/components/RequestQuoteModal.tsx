"use client";

import { useState, useEffect, useId } from "react";

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function RequestQuoteModal({ isOpen, onClose, serviceName }: RequestQuoteModalProps) {
  const uniqueId = useId();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
    service: serviceName,
  });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Sync service name when modal opens for different services
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
    setStatus("idle");
    setErrors({ name: "", phone: "" });
  }, [serviceName, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = () => {
    const newErrors = { name: "", phone: "" };
    let valid = true;
    if (!formData.name.trim()) { newErrors.name = "Nama wajib diisi"; valid = false; }
    if (!formData.phone.trim()) { newErrors.phone = "Nomor telepon wajib diisi"; valid = false; }
    else if (!/^[0-9+\-\s]+$/.test(formData.phone)) { newErrors.phone = "Format nomor tidak valid"; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", address: "", message: "", service: serviceName });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.2s_ease-out]">
        {/* Header */}
        <div className="bg-primary px-8 py-6 flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <p className="text-on-tertiary-container text-xs font-bold uppercase tracking-widest mb-1">
              Minta Penawaran
            </p>
            <h2 id="modal-title" className="text-2xl font-headline font-black text-white tracking-tight">
              {serviceName}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors mt-1 shrink-0"
            aria-label="Tutup modal"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-headline font-black text-primary">Permintaan Terkirim!</h3>
              <p className="text-secondary">
                Tim kami akan menghubungi Anda dalam 24 jam untuk mendiskusikan proyek <strong>{serviceName}</strong> Anda.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href={`https://wa.me/62089523888644?text=Halo%20saya%20sudah%20mengisi%20form%20untuk%20${encodeURIComponent(serviceName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-on-tertiary-container text-white px-6 py-3 font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Hubungi WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="border-2 border-primary text-primary px-6 py-3 font-bold text-sm hover:bg-primary hover:text-white transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Service (pre-filled, read-only) */}
              <div className="space-y-1">
                <label htmlFor={`${uniqueId}-service`} className="text-xs font-bold uppercase tracking-widest text-primary">
                  Layanan yang Diminati
                </label>
                <input
                  id={`${uniqueId}-service`}
                  name="service"
                  value={formData.service}
                  readOnly
                  className="w-full bg-surface-container-high border-none p-4 text-sm text-primary font-bold cursor-default"
                />
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label htmlFor={`${uniqueId}-name`} className="text-xs font-bold uppercase tracking-widest text-primary">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${uniqueId}-name`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  type="text"
                  className={`w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all ${errors.name ? "ring-2 ring-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label htmlFor={`${uniqueId}-phone`} className="text-xs font-bold uppercase tracking-widest text-primary">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${uniqueId}-phone`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0812-xxxx-xxxx"
                  type="tel"
                  className={`w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all ${errors.phone ? "ring-2 ring-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label htmlFor={`${uniqueId}-address`} className="text-xs font-bold uppercase tracking-widest text-primary">
                  Alamat Proyek
                </label>
                <input
                  id={`${uniqueId}-address`}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Lokasi pengerjaan (opsional)"
                  type="text"
                  className="w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor={`${uniqueId}-message`} className="text-xs font-bold uppercase tracking-widest text-primary">
                  Detail Kebutuhan
                </label>
                <textarea
                  id={`${uniqueId}-message`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan proyek Anda (opsional)"
                  rows={3}
                  className="w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-on-tertiary-container text-white font-bold py-4 flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <>
                    <span className="animate-spin material-symbols-outlined text-base">autorenew</span>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Permintaan
                    <span className="material-symbols-outlined text-base">send</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-secondary">
                Atau hubungi langsung via{" "}
                <a
                  href="https://wa.me/62089523888644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-tertiary-container font-bold underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
