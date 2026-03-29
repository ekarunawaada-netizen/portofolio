"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/galeri", label: "Galeri Proyek" },
  { href: "/layanan", label: "Layanan" },
  { href: "/tentang", label: "Tentang & Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black text-slate-900 tracking-tighter font-headline uppercase"
        >
          MASONRY ARCHITECT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline uppercase tracking-tighter transition-colors duration-300 ${
                  isActive
                    ? "text-orange-600 font-bold border-b-2 border-orange-600"
                    : "text-slate-600 font-medium hover:text-orange-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/tentang#kontak"
          className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 font-bold rounded-sm tracking-tight hover:opacity-90 transition-all active:scale-95 duration-200"
        >
          Konsultasi Gratis
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-8 pb-6 pt-4 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-headline uppercase tracking-tighter transition-colors duration-300 py-2 ${
                  isActive
                    ? "text-orange-600 font-bold"
                    : "text-slate-600 font-medium hover:text-orange-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/tentang#kontak"
            onClick={() => setMobileOpen(false)}
            className="block bg-primary text-on-primary px-6 py-3 font-bold rounded-sm tracking-tight text-center mt-4"
          >
            Konsultasi Gratis
          </Link>
        </div>
      )}
    </header>
  );
}
