import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Layanan - MASONRY ARCHITECT",
  description:
    "Solusi konstruksi tanpa kompromi. Bangun rumah baru, renovasi, pemasangan keramik & granit, pengecatan & finishing.",
};

export default function LayananPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-on-tertiary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              KEAHLIAN KAMI
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-primary tracking-tighter leading-[0.9] uppercase">
              Solusi Konstruksi <br /> Tanpa Kompromi
            </h1>
          </div>
          <div className="text-on-secondary-container max-w-md font-body text-lg border-l-4 border-tertiary-container pl-6 py-2">
            Kami menghadirkan presisi arsitektural dan ketahanan struktur dalam
            setiap proyek, dari fondasi hingga sentuhan akhir.
          </div>
        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Bangun Rumah Baru (Large Featured) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-lowest min-h-[500px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                alt="Bangun Rumah Baru"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOoygGyZlfWNa6R2tl4bPnLqHkTUCDDvP094N8yEmIBS_BXn4kZ5a4oTBRjzD1Bnmtw-UymUz-V3XCablsgIWlTsoxYqNXH4yXhjTXMDk5kigX3A8t-hu3DIzm4dyFmLl-SPCUzGnNtv3DVaO39C0CW_p_Z4FLYccK2aoR5uoxwX-cR9Tw0P9PKwTrI58OEInxTVYWhqx9CdbvejhyMd-yQaquhX4dUkLuu7UIJa-0L3Pgh1j7I2ER7RSh075GJeV29srKyx-Gunw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            </div>
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tertiary-container flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container text-3xl">
                    architecture
                  </span>
                </div>
                <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tight">
                  Bangun Rumah Baru
                </h2>
              </div>
              <p className="text-slate-200 text-lg max-w-xl mb-8 leading-relaxed">
                Mewujudkan hunian impian Anda dari nol. Kami menangani
                perencanaan arsitektur, pemilihan material premium, hingga
                eksekusi pembangunan dengan standar keamanan tertinggi.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-on-tertiary-container text-white px-8 py-4 font-headline font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all">
                  Minta Penawaran
                </button>
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md text-white font-label text-sm uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">
                    check_circle
                  </span>
                  Garansi Struktur 10 Tahun
                </div>
              </div>
            </div>
          </div>

          {/* 2. Renovasi & Perbaikan */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-lg bg-surface-container min-h-[500px] flex flex-col">
            <div className="h-1/2 overflow-hidden relative">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="Renovasi"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGju69W9YctHZve_w7hcMJcKLyvxS8gEMP8H5h4jcKpkxk33--3jHoBrASNp3xamH58YW08g2owfKMuMIj5ibTDPkkYIvN4ZEczCgxdWwPCRxjpeJwCv2_taeRY4FeLkvW5OzQ9U4WgKPP775N3vpJcSv7MfhFR5LM_DxV_mnGNX9N0m2hD1YVv5PMHaMAAlt_gQdyD33scGg-TlMj8mk4-kx89K-dn32nzTsXdyFLKZeo7L4uBAmhzxe9DdfnBuq9yrPcJPPitho"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    construction
                  </span>
                  <h2 className="text-2xl font-headline font-bold text-primary uppercase">
                    Renovasi &amp; Perbaikan
                  </h2>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Pembaruan atap, perkuatan dinding, hingga perluasan ruangan.
                  Kami memastikan integritas bangunan lama Anda tetap terjaga
                  dengan teknologi modern.
                </p>
              </div>
              <button className="w-full border-b-2 border-primary py-3 flex justify-between items-center group-hover:bg-primary group-hover:text-white group-hover:px-4 transition-all duration-300">
                <span className="font-headline font-bold uppercase text-xs tracking-widest">
                  Minta Penawaran
                </span>
                <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
          </div>

          {/* 3. Pemasangan Keramik & Granit */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-lg bg-surface-container-lowest min-h-[400px] flex flex-col border-none">
            <div className="absolute inset-0">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                alt="Tiling"
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpVwuFagLrApNxiv2mOWlaL7xNeux3abRVmqrFcPtKAo5yKW_xXV7I8vP7g_6-Zem1SDSqcecBDL-2WBiiC5cZp5O9dzcUcIIOVM453IZiEo0-MdZgejWgjftiZFrq5ZBHxLmlu8Brxa80Ug__4LgBgkh8wKczLcf-OzYyCFjZnyiqEmzc9en94Gfm-5AWa1-BtepYMml_6OdBfu86dFBfDJm2xlYy7tqxlaaKVElwC0xTp1w9x9dJPS_T952ivgXMyNmNT9JSgI"
              />
            </div>
            <div className="relative z-10 p-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm mb-6">
                <span className="material-symbols-outlined text-white text-2xl">
                  grid_view
                </span>
              </div>
              <h2 className="text-3xl font-headline font-black text-primary uppercase tracking-tight mb-4">
                Pemasangan Keramik &amp; Granit
              </h2>
              <p className="text-on-secondary-container text-sm leading-relaxed mb-8 max-w-xs">
                Keahlian pemasangan presisi untuk lantai dan dinding. Hasil akhir
                yang rata, simetris, dan tahan lama untuk estetika ruang premium.
              </p>
              <div className="mt-auto">
                <button className="bg-primary text-white px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest hover:bg-primary-container transition-colors">
                  Minta Penawaran
                </button>
              </div>
            </div>
          </div>

          {/* 4. Pengecatan & Finishing */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-lg bg-primary min-h-[400px] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
              <div className="p-10 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl font-headline font-black text-white uppercase tracking-tight mb-4 leading-none">
                  Pengecatan &amp; Finishing
                </h2>
                <p className="text-on-primary-container text-sm leading-relaxed mb-8">
                  Transformasi visual dengan teknik pengecatan profesional dan
                  finishing tekstur dinding. Kami menggunakan material tahan cuaca
                  untuk perlindungan maksimal.
                </p>
                <button className="border-2 border-on-tertiary-container text-on-tertiary-container px-6 py-3 font-headline font-bold uppercase text-xs tracking-widest hover:bg-on-tertiary-container hover:text-white transition-all w-fit">
                  Minta Penawaran
                </button>
              </div>
              <div className="relative h-full min-h-[250px] order-1 md:order-2">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  alt="Finishing"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCDQXak7hR_FN4iv2YZeDPJDz5MsemPf6dU-N0ltfneVqu0SK8zr4tsR7KjTVF_f8ZJ4BKLHRmyT7IH6PRoGj8QecOJCuMPrND7JFR84Bc1yYUmCTknKfxh3IQiBRMLycvu2NLPZC7waOj_jqluRsJKFHWRAW-f-R4aec13uWVNUcgbVC4TG5FRhG8sP3zqkXCHPiUqglG9Bx5iCtcyBYk78r64N7GpCLAN66fyWEOKuCCwi_dPsLrONG-9aym8LmyYKyRV9ZeyE"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-32 bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="text-6xl font-headline font-black text-outline-variant/30 mb-4">
                01
              </div>
              <h3 className="text-xl font-headline font-bold text-primary uppercase mb-4">
                Konsultasi &amp; Survei
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Kami datang ke lokasi untuk memahami kebutuhan Anda secara
                mendalam dan melakukan pengukuran akurat.
              </p>
            </div>
            <div>
              <div className="text-6xl font-headline font-black text-outline-variant/30 mb-4">
                02
              </div>
              <h3 className="text-xl font-headline font-bold text-primary uppercase mb-4">
                Estimasi Transparan
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Rincian biaya material dan jasa yang jelas tanpa biaya
                tersembunyi. Semua tertulis dalam kontrak kerja.
              </p>
            </div>
            <div>
              <div className="text-6xl font-headline font-black text-outline-variant/30 mb-4">
                03
              </div>
              <h3 className="text-xl font-headline font-bold text-primary uppercase mb-4">
                Eksekusi Presisi
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Tim ahli kami bekerja dengan standar K3 dan pengawasan ketat
                untuk memastikan hasil sesuai spesifikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-surface-container-lowest p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-full -mr-32 -mt-32 z-0 opacity-50" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary uppercase tracking-tight mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-secondary text-lg">
              Dapatkan estimasi biaya profesional dan konsultasi teknis gratis
              dari tim arsitek dan kontraktor kami hari ini.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Masonry%20Architect%2C%20saya%20tertarik%20menggunakan%20jasa%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-on-tertiary-container text-white px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm shadow-xl shadow-on-tertiary-container/20 hover:-translate-y-1 transition-all text-center"
            >
              Hubungi via WhatsApp
            </a>
            <p className="text-center text-xs font-label text-outline uppercase tracking-widest">
              Respon cepat dalam 24 jam
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
