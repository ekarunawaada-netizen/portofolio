"use client";

import React, { useState } from "react";

interface Submission {
  id: string;
  name: string;
  phone: string;
  createdAt: Date | null;
  isRead: boolean;
  status: string;
  address?: string | null;
  message?: string | null;
  projectType?: string | null;
  service?: string | null;
}

interface SubmissionTableProps {
  data: Submission[];
  type: "contact" | "quote";
  onMarkAsRead: (id: string) => Promise<{ success: boolean }>;
  onDelete: (id: string) => Promise<{ success: boolean }>;
}

export function SubmissionTable({ data, type, onMarkAsRead, onDelete }: SubmissionTableProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleAction = async (id: string, action: "read" | "delete") => {
    setLoadingId(id);
    try {
      if (action === "read") {
        await onMarkAsRead(id);
      } else {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
          await onDelete(id);
        }
      }
    } finally {
      setLoadingId(null);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "-";
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/5 bg-surface-container-low p-12 text-center">
        <div className="mb-4 rounded-full bg-secondary-container p-4 text-on-secondary-container">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-lg font-bold text-primary">Belum ada data masuk</p>
        <p className="max-w-xs text-secondary text-sm">Semua {type === "contact" ? "pesan kontak" : "permintaan penawaran"} akan muncul di sini.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low shadow-2xl backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/5 text-xs font-black uppercase tracking-widest text-secondary">
              <th className="px-6 py-4">Waktu</th>
              <th className="px-6 py-4">Nama</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">{type === "contact" ? "Tipe Proyek" : "Layanan"}</th>
              <th className="px-6 py-4">Pesan</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((item) => (
              <tr 
                key={item.id} 
                className={`group transition-colors hover:bg-white/5 ${!item.isRead ? "bg-primary/5" : ""}`}
              >
                <td className="px-6 py-4 text-secondary whitespace-nowrap">
                  {formatDate(item.createdAt)}
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-secondary text-xs">{item.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-tight ${
                    item.isRead 
                    ? "bg-tertiary-container text-on-tertiary-container" 
                    : "bg-primary-container text-on-primary-container animate-pulse"
                  }`}>
                    {item.isRead ? "DIBACA" : "BARU"}
                  </span>
                </td>
                <td className="px-6 py-4 text-secondary">
                  {item.projectType || item.service}
                </td>
                <td className="px-6 py-4 text-secondary">
                  <p className="max-w-xs truncate" title={item.message || ""}>
                    {item.message || "-"}
                  </p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-50 transition-opacity group-hover:opacity-100">
                    {!item.isRead && (
                      <button
                        onClick={() => handleAction(item.id, "read")}
                        disabled={loadingId === item.id}
                        className="rounded-lg p-2 text-primary hover:bg-primary-container hover:text-on-primary-container transition-all"
                        title="Tandai sudah dibaca"
                      >
                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                      </button>
                    )}
                    <button
                      onClick={() => handleAction(item.id, "delete")}
                      disabled={loadingId === item.id}
                      className="rounded-lg p-2 text-error hover:bg-error-container hover:text-on-error-container transition-all"
                      title="Hapus"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
