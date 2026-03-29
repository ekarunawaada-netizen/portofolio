"use client";

import { useState, useId } from "react";
import { submitContactForm } from "../app/actions";

export default function ContactForm({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Bangun Rumah Baru",
    message: "",
    address: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const uniqueId = useId();

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
      isValid = false;
    } else if (!/^[0-9+\-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
      isValid = false;
    }

    if (variant === "dark" && !formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");

    const result = await submitContactForm({
      name: formData.name,
      phone: formData.phone,
      projectType: formData.projectType,
      address: formData.address,
      message: formData.message,
    });

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", phone: "", projectType: "Bangun Rumah Baru", message: "", address: "" });
      setErrors({ name: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setServerError(result.error || "Terjadi kesalahan.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  if (variant === "dark") {
    return (
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {status === "success" && (
          <div className="bg-green-100 text-green-800 p-4 font-bold border-l-4 border-green-500">
            Pesan berhasil terkirim! Tim kami akan segera menghubungi Anda.
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-100 text-red-800 p-4 font-bold border-l-4 border-red-500">
            {serverError}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor={`${uniqueId}-name`} className="text-xs font-bold uppercase tracking-widest text-primary">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              id={`${uniqueId}-name`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all ${errors.name ? 'ring-2 ring-red-500' : ''}`}
              placeholder="Masukkan nama Anda"
              type="text"
            />
            {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor={`${uniqueId}-phone`} className="text-xs font-bold uppercase tracking-widest text-primary">
              Nomor Telepon <span className="text-red-500">*</span>
            </label>
            <input
              id={`${uniqueId}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
              placeholder="+62 812..."
              type="tel"
            />
            {errors.phone && <p className="text-red-500 text-xs font-bold">{errors.phone}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor={`${uniqueId}-address`} className="text-xs font-bold uppercase tracking-widest text-primary">
            Alamat Proyek
          </label>
          <input
            id={`${uniqueId}-address`}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all"
            placeholder="Lokasi pengerjaan"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`${uniqueId}-message`} className="text-xs font-bold uppercase tracking-widest text-primary">
            Pesan Anda <span className="text-red-500">*</span>
          </label>
          <textarea
            id={`${uniqueId}-message`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary transition-all ${errors.message ? 'ring-2 ring-red-500' : ''}`}
            placeholder="Ceritakan detail kebutuhan Anda"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-xs font-bold">{errors.message}</p>}
        </div>
        <button
          className="w-full bg-primary text-on-primary py-5 font-bold tracking-widest uppercase hover:opacity-95 transition-opacity disabled:opacity-50"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Mengirim..." : "Kirim Permintaan"}
        </button>
      </form>
    );
  }

  // Default variant (homepage)
  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      {status === "success" && (
        <div className="bg-green-100 text-green-800 p-3 text-sm font-bold border-l-4 border-green-500">
          Pesan berhasil terkirim!
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-100 text-red-800 p-3 text-sm font-bold border-l-4 border-red-500">
          {serverError}
        </div>
      )}
      <div className="space-y-1">
        <label htmlFor={`${uniqueId}-default-name`} className="text-[10px] font-bold text-secondary uppercase tracking-widest">
          Nama Lengkap
        </label>
        <input
          id={`${uniqueId}-default-name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm ${errors.name ? 'ring-2 ring-red-500' : ''}`}
          placeholder="Contoh: Budi Santoso"
          type="text"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor={`${uniqueId}-default-phone`} className="text-[10px] font-bold text-secondary uppercase tracking-widest">
          Nomor WhatsApp
        </label>
        <input
          id={`${uniqueId}-default-phone`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
          placeholder="0812-xxxx-xxxx"
          type="tel"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor={`${uniqueId}-default-project`} className="text-[10px] font-bold text-secondary uppercase tracking-widest">
          Jenis Proyek
        </label>
        <select
          id={`${uniqueId}-default-project`}
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm"
        >
          <option>Bangun Rumah Baru</option>
          <option>Renovasi Interior</option>
          <option>Pekerjaan Atap/Struktur</option>
          <option>Lainnya</option>
        </select>
      </div>
      <button
        className="w-full bg-on-tertiary-container text-white font-bold py-4 mt-4 flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Mengirim..." : "Dapatkan Penawaran"}{" "}
        {status !== "submitting" && <span className="material-symbols-outlined">send</span>}
      </button>
    </form>
  );
}
