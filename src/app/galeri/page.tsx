import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri Proyek - MASONRY ARCHITECT",
  description:
    "Menampilkan dedikasi kami pada presisi teknik dan keindahan material alam dalam setiap proyek konstruksi kelas atas.",
};

export default function GaleriPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs mb-4 block">
              Portofolio Kami
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-6">
              KARYA{" "}
              <span className="text-on-primary-container">STRUKTURAL</span>{" "}
              &amp; ESTETIKA.
            </h1>
            <p className="text-secondary text-lg leading-relaxed max-w-lg">
              Menampilkan dedikasi kami pada presisi teknik dan keindahan
              material alam dalam setiap proyek konstruksi kelas atas.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-6 py-2 bg-primary text-on-primary text-sm font-bold rounded-sm">
              Semua
            </button>
            <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors">
              Bangunan Baru
            </button>
            <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors">
              Renovasi
            </button>
            <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors">
              Pasang Keramik
            </button>
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="gallery-grid">
          {/* Project 1: Large Featured */}
          <div className="gallery-span-2-2 relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              alt="Villa Minimalis Uluwatu"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLwHkqJFginnytG6LRbfP3_fhKbJA8DUyg6T0CjJSeY5aJaqJMnrCwrmoKjAmkq1LAxB87diajjW5fK_QS30iRrV6V6nx88xSFPWaUraSfjL3XMH39MpeJO8x9zKL3K2bATGET0SdTQ8R7RtH1XH1pt94OkK-B22fROh653WwZTeGJ6pbqIX5nyIe5ELMoYdY78b2K5COLr3XNb1n8t_nahzmUkD8F7KssqorpV9y1SuHgfjekGQW4ouJUxOfHtUnnXDNDuSvb7U"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-on-tertiary-container text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Sesudah
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2">
                Bangunan Baru
              </p>
              <h3 className="font-headline text-3xl font-black text-white tracking-tighter uppercase leading-none">
                Villa Minimalis Uluwatu
              </h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="gallery-span-1-2 relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Pemasangan Keramik Mewah"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3dePrGzMb2DbopJJ4pP7H8dTZTPQ7yQf5ekqeqQ30ENhtIxD1ZqBEGelPH25PTFQH0MRtoLSNIWS0OpU2VhUvVKXX3_4-IfVz5Hx1gbmTHK4n5hb3d_5LVR832XU97vBEBcGLYfXXbKAy_6rh_vA2m-x3_SbSnZkVQgoUWI_GtqMVDpxl07wYBvXocQ8mREb7zCDYVZb8_k6vpUOkrrgLEgh-ASwpDEIMK61FkmyJa-5xfRPNWjBBI38rdmJZj4fdNeYI8niIIwo"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/70 font-medium text-[10px] uppercase tracking-widest mb-1">
                Pasang Keramik
              </p>
              <h3 className="font-headline text-xl font-bold text-white tracking-tight leading-tight uppercase">
                Pemasangan Keramik Mewah
              </h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Restorasi Dinding Batu"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsw4_LraS097cHclcT_v2AmsvXmx8NXCE9mdHHt8CTbvaw92oCipZIhERnyFcqntfzLpGfnam7J66z-W9q0ESd_ofHEUJDqa0mWjGiXVG5OWbTY9dLD8ZugyqnvaeKWABTCNz96ba0iATXiwDr1Xt0qBJ280zITIXyU1QJXWxDyVozcerHCPjvDECQ8Z1gRDruQB5cySKQnnVIO9KsDmzKILx-840wU3xfQk2CmPTpeUka87iesYGbgFP9l_TPbkcaFgBRALU7cOU"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-all" />
            <div className="absolute top-4 left-4">
              <span className="bg-secondary text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                Sebelum
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wider">
                Restorasi Dinding Batu
              </h3>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Renovasi Loft Industri"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIDrtbOGBSYgtv-lY-iDCpnME9klpjVPNJCK_IaDQ_pnRPCOH3C4tdx2rNPI4lNC3Vyd6TMIvPyAOSkAchM2DOviozJGViXDNh49iW4FE1xHrRivoG6XEKCA4Wx8jZr30Hfxrc-yN_y6Rd8djWbi6ioehIVK_20o_h4PN86KxYnbZho8TDYpDv7NeBg7WHguqkhHBNYC-pfqxa_bkW0ek7U0g75R88ZHnTgJITUU-eyqSnmT7hi2uNNYLSyak1_s966ctBeKzPiZg"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-all" />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wider">
                Renovasi Loft Industri
              </h3>
            </div>
          </div>

          {/* Project 5 */}
          <div className="gallery-span-1-2 relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Teras Slate Minimalis"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-eAZp9WorFG4qKGEQ5_wowV6NNibevvooX1EKa3ojgZL_WHbqneNbrqYWe1XAkufPR8i31Qsi8HB12Vg113wL8QAFT4bO11_P0MW9ETMrfBmjEVjRmcoTGvopmm1B_hGeYRtpEGmoBR5P9LTyDXKZ5d1DYq0czpFMgMxor-xq003dSCasaJxSHtB4kvXT0To3UegofxKgpGbhPJBiEl6c2ftCPmuxbid0YYMBfy_P0vVkHNuR0RRipKicHYuRKtytfel62bsUMJI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/70 font-medium text-[10px] uppercase tracking-widest mb-1">
                Bangunan Baru
              </p>
              <h3 className="font-headline text-xl font-bold text-white tracking-tight leading-tight uppercase">
                Teras Slate Minimalis
              </h3>
            </div>
          </div>

          {/* Project 6: Large Featured */}
          <div className="gallery-span-2-2 relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              alt="Renovasi Area Kolam Renang"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZosbnuRo-GjxIqZmZOL0xFUxn_q2YGGbKxXehXVQX7zy2peqaCL9Vt7Gop-0cl10POa4Q_CcEacKbWdSPBxOZrfl5XAIYjgQ1k1Cadzo9dHdp_-kiu7l5UZ3KF5O5m2M3bNV0uu8EPEVP3xzgIujqDo6LQYKdK2dZADX-jNTtCW-nvGsIF-cxUVeOxkthvl7BJMWRb-qSPbB9QP4tLR1X0bb7tl1Nsq1SyX2lzZbaZ_BmJd0nCRbFx8-N1lAt0c0beag0R4CBeQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-6 right-6">
              <span className="bg-on-tertiary-container text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                Sesudah
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2">
                Renovasi
              </p>
              <h3 className="font-headline text-3xl font-black text-white tracking-tighter uppercase leading-none">
                Renovasi Area Kolam Renang
              </h3>
            </div>
          </div>

          {/* Project 7 */}
          <div className="relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Struktur Rumah 2 Lantai"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKk6FrlWBdTdcU1zcp7PzA7e8JlgxQyYXGZhRSxdbZ-dsJmgTrgxrOFV_SGrys5GVCE5xQsfr3BRfqUXEZoDsQnxX5AfkVMv7XdSRFWWjbfEp4MmXN5zJ_reBJeDl_PvPm39k76XNM8u2CL5KkX1D62vq4tDTBlihSbZnC08jM38ZZOrXUdHku0Q0ST7AYBP8o-Hn2JOD2_YBy-fTDI5Fo5UoqczkUF_zpCkoVCfrZ1NtKL16SvezyZwxEZXqr4xrl_M4sRAD9LII"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-all" />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wider">
                Struktur Rumah 2 Lantai
              </h3>
            </div>
          </div>

          {/* Project 8 */}
          <div className="relative group overflow-hidden bg-surface-container-low">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Renovasi Dapur Pondok Indah"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7TR-jPsaQnlFpgQdOvQOEdwxJ52125Hvpi6UBVltGGnx4j6og9d5s0hBZRZuyK0wSMHDDGyWN7TPXDvnHIUt4JZEntLc-bE6076GqGhBLjNi4h6C2dRXNrTpwswY2En-AP_Ir2WdxeVh0DAkgOnLMuIp1kuP3puzdF4H6mRlRpPaRW_wHe3a4rfZz1qWoSceo1KqBck7TKFbbfODTOB1_BkClBcheE0yTUAIcKVLYWnq8muaqxQci1IfHrRX4AF8qFBhApqOVZrc"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-all" />
            <div className="absolute top-4 left-4">
              <span className="bg-secondary text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                Sebelum
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wider">
                Renovasi Dapur Pondok Indah
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 mt-24">
        <div className="bg-primary-container p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 max-w-2xl">
            INGIN MEWUJUDKAN{" "}
            <span className="text-on-tertiary-container">STRUKTUR IMPIAN</span>{" "}
            ANDA?
          </h2>
          <p className="text-on-primary-container text-lg mb-10 max-w-xl">
            Konsultasikan kebutuhan konstruksi, renovasi, atau pemasangan
            material Anda dengan tim ahli kami secara gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tentang"
              className="bg-on-tertiary-container text-white px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-sm hover:brightness-110 transition-all active:scale-95"
            >
              Mulai Konsultasi
            </Link>
            <Link
              href="/layanan"
              className="border border-on-primary-container text-white px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 transition-all active:scale-95"
            >
              Lihat Estimasi Biaya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
