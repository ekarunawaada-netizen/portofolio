"use client";

import React, { useState } from "react";
import { StatCard } from "./StatCard";
import { SubmissionTable } from "./SubmissionTable";
import { ContactSubmission, QuoteRequest } from "@/generated/client";
import { 
  markContactAsRead, 
  deleteContactSubmission, 
  markQuoteAsRead, 
  deleteQuoteRequest 
} from "@/app/actions";

interface DashboardClientProps {
  contacts: ContactSubmission[];
  quotes: QuoteRequest[];
}

export function DashboardClient({ contacts, quotes }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "contacts" | "quotes">("overview");

  const unreadContacts = contacts.filter(c => !c.isRead).length;
  const unreadQuotes = quotes.filter(q => !q.isRead).length;

  return (
    <div className="flex min-h-screen bg-surface-container-lowest text-on-surface">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-white/5 bg-surface-container-low p-6 hidden lg:block">
        <div className="mb-10">
          <h1 className="text-xl font-black font-headline tracking-tighter text-primary uppercase">
            Masonry <span className="text-tertiary">Admin</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary opacity-50">Architect Portal</p>
        </div>

        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-black uppercase tracking-widest transition-all ${
              activeTab === "overview" ? "bg-primary text-on-primary shadow-lg" : "text-secondary hover:bg-white/5"
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab("contacts")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-black uppercase tracking-widest transition-all ${
              activeTab === "contacts" ? "bg-primary text-on-primary shadow-lg" : "text-secondary hover:bg-white/5"
            }`}
          >
            Pesan Kontak
            {unreadContacts > 0 && <span className="ml-auto rounded-full bg-tertiary px-2 py-0.5 text-[10px]">{unreadContacts}</span>}
          </button>
          <button 
            onClick={() => setActiveTab("quotes")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-black uppercase tracking-widest transition-all ${
              activeTab === "quotes" ? "bg-primary text-on-primary shadow-lg" : "text-secondary hover:bg-white/5"
            }`}
          >
            Penawaran
            {unreadQuotes > 0 && <span className="ml-auto rounded-full bg-tertiary px-2 py-0.5 text-[10px]">{unreadQuotes}</span>}
          </button>
        </nav>

        <div className="absolute bottom-10 left-6 right-6">
           <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
             <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             Kembali ke Website
           </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black font-headline tracking-tighter text-primary uppercase">
              {activeTab === "overview" ? "Dashboard Overview" : activeTab === "contacts" ? "Contact Management" : "Quote Inquiries"}
            </h2>
            <p className="text-secondary text-sm">Selamat datang kembali di Masonry Architect Portal.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="h-10 w-10 rounded-full border-2 border-primary/20 p-0.5 shadow-xl">
               <div className="h-full w-full rounded-full bg-primary/10 flex items-center justify-center text-xs font-black text-primary">AD</div>
             </div>
          </div>
        </header>

        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Total Pesan" 
                value={contacts.length} 
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
                trend={unreadContacts > 0 ? `${unreadContacts} baru` : "Berhasil dibalas"}
              />
              <StatCard 
                title="Permintaan Penawaran" 
                value={quotes.length} 
                color="secondary"
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                trend={unreadQuotes > 0 ? `${unreadQuotes} belum dibaca` : "Sedang diproses"}
              />
              <StatCard 
                title="Konversi Rate" 
                value={Math.round((quotes.length / (contacts.length || 1)) * 100)} 
                color="tertiary"
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                trend="+12% bulan ini"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="space-y-4">
                 <h3 className="text-xl font-black font-headline uppercase text-primary border-b border-white/5 pb-2">Pesan Terbaru</h3>
                 <SubmissionTable 
                    data={contacts.slice(0, 5)} 
                    type="contact" 
                    onMarkAsRead={markContactAsRead}
                    onDelete={deleteContactSubmission}
                 />
               </div>
               <div className="space-y-4">
                 <h3 className="text-xl font-black font-headline uppercase text-primary border-b border-white/5 pb-2">Penawaran Terbaru</h3>
                 <SubmissionTable 
                    data={quotes.slice(0, 5)} 
                    type="quote" 
                    onMarkAsRead={markQuoteAsRead}
                    onDelete={deleteQuoteRequest}
                 />
               </div>
            </div>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="space-y-6">
            <SubmissionTable 
                data={contacts} 
                type="contact" 
                onMarkAsRead={markContactAsRead}
                onDelete={deleteContactSubmission}
            />
          </div>
        )}

        {activeTab === "quotes" && (
          <div className="space-y-6">
            <SubmissionTable 
                data={quotes} 
                type="quote" 
                onMarkAsRead={markQuoteAsRead}
                onDelete={deleteQuoteRequest}
            />
          </div>
        )}
      </main>
    </div>
  );
}
