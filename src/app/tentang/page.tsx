import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Tentang & Kontak - MASONRY ARCHITECT",
  description:
    "Membangun dengan integritas material. Hubungi kami untuk konsultasi proyek konstruksi dan renovasi Anda.",
};

export default function TentangPage() {
  return (
    <main className="pt-20">
      {/* Hero Header */}
      <header className="relative py-24 md:py-32 blueprint-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-on-tertiary-container font-bold tracking-widest uppercase text-xs mb-4 block">
                Tentang Kami
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-black text-primary tracking-tighter leading-[0.9] mb-6">
                MEMBANGUN DENGAN <br />
                INTEGRITAS MATERIAL.
              </h1>
            </div>
            <div className="md:w-1/3 border-l-4 border-on-tertiary-container pl-6">
              <p className="text-on-surface-variant text-lg font-medium leading-relaxed">
                Lebih dari sekadar konstruksi, kami adalah kurator struktur yang
                menggabungkan estetika arsitektural dengan ketahanan teknis.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container overflow-hidden relative">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Professional construction team"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuaMX-9RpRPz9W_vBS4DYqNY4Gvy3rHLWJrTHY5yUdC2oBOn5hTPLOaxi_qrduS4-YKjqjdzFHJLchjdRvgb5CijenrPacLz7XO_pUXU2aWqAmr_cpzhbM2zRLRwVgc0L08hn6MUcg94z-3zC-qRyDjJLQzPPAfyXHiycWPU8tHN4c0aKxZivlatSWbGC34e-U-1i-hHGGH3xQm82l2rfgjgwkLuKf4zyT1YB8IfIV52Vs6M3yY0GfO88vHi-7GTzGImLUKxaZr3k"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-10 text-on-primary hidden lg:block z-10">
                <div className="text-4xl font-headline font-black mb-1 tracking-tighter">
                  15+
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-primary-container">
                  Tahun Pengalaman
                </div>
              </div>
            </div>
            <div className="md:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                  Keahlian yang Teruji, Kepercayaan yang Kokoh
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Didirikan dengan visi untuk menghadirkan kualitas bangunan
                  kelas atas, Masonry Architect telah menjadi mitra terpercaya
                  bagi ribuan klien. Kami memahami bahwa setiap batu yang
                  diletakkan adalah investasi masa depan Anda.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Fokus kami bukan hanya pada hasil akhir, tetapi pada proses
                  yang transparan, material yang jujur, dan kepuasan pelanggan
                  yang tidak tergoyahkan.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-surface-container-low transition-colors hover:bg-secondary-container">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">
                      Keandalan Tinggi
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Tim bersertifikasi dengan standar keamanan industri
                      internasional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-surface-container-low transition-colors hover:bg-secondary-container">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    handshake
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">
                      Kepuasan Pelanggan
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Layanan konsultasi intensif mulai dari sketsa hingga serah
                      terima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-surface-container-lowest p-8 border-b-2 border-transparent hover:border-on-tertiary-container transition-all">
              <div className="text-3xl font-headline font-black text-primary">
                250+
              </div>
              <div className="text-sm text-on-surface-variant font-medium">
                Proyek Selesai
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 border-b-2 border-transparent hover:border-on-tertiary-container transition-all">
              <div className="text-3xl font-headline font-black text-primary">
                98%
              </div>
              <div className="text-sm text-on-surface-variant font-medium">
                Klien Puas
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 border-b-2 border-transparent hover:border-on-tertiary-container transition-all">
              <div className="text-3xl font-headline font-black text-primary">
                12
              </div>
              <div className="text-sm text-on-surface-variant font-medium">
                Penghargaan Desain
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 border-b-2 border-transparent hover:border-on-tertiary-container transition-all">
              <div className="text-3xl font-headline font-black text-primary">
                45+
              </div>
              <div className="text-sm text-on-surface-variant font-medium">
                Tenaga Ahli
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form Side */}
            <div>
              <h2 className="text-4xl font-headline font-black text-primary mb-2">
                KONTAK KAMI
              </h2>
              <p className="text-on-surface-variant mb-10">
                Mulai diskusi proyek impian Anda hari ini. Tim kami siap merespons
                dalam 24 jam.
              </p>
              <ContactForm variant="dark" />
            </div>

            {/* Actions & Info Side */}
            <div className="flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Hubungi Langsung
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href="https://wa.me/62089523888644?text=Halo%20Masonry%20Architect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-6 bg-on-tertiary-container text-white hover:opacity-90 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-3xl">
                          chat
                        </span>
                        <div className="text-left">
                          <div className="font-bold">WhatsApp Business</div>
                          <div className="text-sm opacity-80">
                            +62 812 3456 7890
                          </div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-between p-6 bg-primary text-on-primary hover:opacity-90 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-3xl">
                          location_on
                        </span>
                        <div className="text-left">
                          <div className="font-bold">Google Maps</div>
                          <div className="text-sm opacity-80">
                            Lihat Lokasi Workshop
                          </div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>

                <div className="bg-surface-container-high p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Jam Operasional
                  </h3>
                  <div className="space-y-3 text-on-surface-variant font-medium">
                    <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                      <span>Senin - Jumat</span>
                      <span className="text-primary">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                      <span>Sabtu</span>
                      <span className="text-primary">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu &amp; Hari Libur</span>
                      <span className="text-on-tertiary-container italic">
                        Tutup (Layanan Darurat)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview Area */}
              <div className="mt-12 h-64 bg-surface-container-highest relative overflow-hidden">
                <Image
                  fill
                  sizes="100vw"
                  className="w-full h-full object-cover opacity-40"
                  alt="Map Preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCosh6z0SA3aNW7A5LlDrEHbntjA3weR2VSotwQ_Bdag0yGyeRBYwdhFI_N3Yb7LIqqVdWZ6AiufnRMUW6Ypdi0mAioBTb3-wn_qJYZOdbJNU-3moISpcH5n2GmAfELq5UpWeOg3MXhP9py8yDJgtAIgtBlCQ_VoIvHfNcntfuUk11m1Exlgrpdi1WjV6OSoaEa8qTWJyjQ8TT61FOUGIEbncGfI_qCTPBEUBBLpPEjkaFo29iZft_GA4i5cnB92Suqs89IK1QyTt4"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary text-on-primary p-4 shadow-xl pointer-events-auto">
                    <div className="font-bold text-sm tracking-widest uppercase">
                      Visit Workshop
                    </div>
                    <div className="text-xs opacity-80">
                      Jakarta Selatan, Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
