import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-lg font-bold text-slate-900 uppercase tracking-tighter font-headline">
            MASONRY ARCHITECT
          </div>
          <p className="text-slate-500 leading-relaxed">
            Menyediakan solusi konstruksi premium dengan fokus pada presisi
            arsitektural dan daya tahan jangka panjang.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-slate-500 hover:text-orange-600 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-slate-500 hover:text-orange-600 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div className="space-y-6">
          <h5 className="text-slate-900 font-bold uppercase tracking-widest text-xs">
            Navigasi
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/galeri"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Galeri Proyek
              </Link>
            </li>
            <li>
              <Link
                href="/layanan"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Tentang &amp; Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-6">
          <h5 className="text-slate-900 font-bold uppercase tracking-widest text-xs">
            Sosial
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:underline decoration-orange-500 underline-offset-4 transition-all"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Alamat */}
        <div className="space-y-6">
          <h5 className="text-slate-900 font-bold uppercase tracking-widest text-xs">
            Alamat
          </h5>
          <p className="text-slate-500 leading-relaxed italic">
            Jl. Arsitektur Utama No. 88
            <br />
            Kawasan Industri Kreatif
            <br />
            Jakarta Selatan, 12345
          </p>
          <div className="bg-orange-500/10 p-4 border-l-4 border-orange-500">
            <p className="text-xs font-bold text-orange-600">
              Jam Operasional:
            </p>
            <p className="text-xs text-slate-600">
              Senin - Sabtu: 08:00 - 17:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-slate-500 text-xs">
          © 2024 Masonry Architect. High-End Construction &amp; Renovation.
        </p>
        <div className="flex gap-8 text-xs font-bold text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
