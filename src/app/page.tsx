import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import { featuredProjects } from "../data/mockData";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            sizes="100vw"
            className="object-cover"
            alt="Modern luxury minimalist house architecture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhbfoddI7mpKTX5IP_9ZDJejO4YVlKBH4qjzVpw0ZjEk47U1ntB5sh36W0wQRRcsqdf4jMRKtqvgJ_AG-DFP2c3MrhPwyk0QGlWYu8g_T8T3eh7kH8guXcHHjMcoqmCW10SjAN3_jknKcszaknQdjozSwo1V8TSq2dJqJfX_eWwa3In_qU__C5xzLRjFnDGTPrnNLX1AyeqpmeS5cvU4mSU-DQYHaMZfHt6H5NAcVEBlnFECybsRGkvKJbJiDuLC3yDX214x6LbLY"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 mb-6 bg-on-tertiary-container text-white font-bold tracking-widest text-xs uppercase rounded-sm">
              Master Architect Specialists
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6 font-headline">
              MEMBANGUN IMPIAN ANDA JADI KENYATAAN
            </h1>
            <p className="text-xl text-primary-fixed-dim mb-10 font-medium max-w-lg leading-relaxed">
              Spesialis Tukang Bangunan &amp; Renovasi Profesional dengan
              standar mutu tinggi dan integritas struktural tanpa kompromi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/62089523888644?text=Halo%20Masonry%20Architect%2C%20saya%20tertarik%20konsultasi%20gratis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-on-tertiary-container text-white px-8 py-4 font-bold rounded-sm hover:opacity-90 transition-all shadow-xl shadow-on-tertiary-container/20"
              >
                <span className="material-symbols-outlined">chat</span>
                Konsultasi Gratis via WhatsApp
              </a>
              <Link
                href="/galeri"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-bold rounded-sm hover:bg-white/20 transition-all"
              >
                Lihat Galeri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Utama Section */}
      <section className="py-24 blueprint-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-on-tertiary-container tracking-[0.3em] uppercase mb-4">
                Layanan Kami
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tighter font-headline leading-none">
                KEAHLIAN TEKNIS UNTUK SETIAP DETAIL STRUKTUR
              </h3>
            </div>
            <p className="text-secondary max-w-xs font-medium border-l-2 border-primary-container pl-6 py-2">
              Kami menggabungkan metode konstruksi tradisional yang kokoh dengan
              estetika modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-surface-container-lowest p-10 group hover:bg-primary-container transition-all duration-500 shadow-sm border-b-4 border-transparent hover:border-on-tertiary-container">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-fixed mb-8 group-hover:bg-on-tertiary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  foundation
                </span>
              </div>
              <h4 className="text-2xl font-bold text-primary group-hover:text-white mb-4 font-headline">
                Bangun Dari Nol
              </h4>
              <p className="text-secondary group-hover:text-primary-fixed-dim leading-relaxed mb-6">
                Layanan konstruksi komprehensif mulai dari penggalian fondasi
                hingga tahap finishing interior paling detail.
              </p>
              <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-container-lowest p-10 group hover:bg-primary-container transition-all duration-500 shadow-sm border-b-4 border-transparent hover:border-on-tertiary-container">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-fixed mb-8 group-hover:bg-on-tertiary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  home_repair_service
                </span>
              </div>
              <h4 className="text-2xl font-bold text-primary group-hover:text-white mb-4 font-headline">
                Renovasi Total
              </h4>
              <p className="text-secondary group-hover:text-primary-fixed-dim leading-relaxed mb-6">
                Transformasi ruang lama Anda menjadi lingkungan modern yang
                fungsional tanpa merusak integritas bangunan asli.
              </p>
              <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-container-lowest p-10 group hover:bg-primary-container transition-all duration-500 shadow-sm border-b-4 border-transparent hover:border-on-tertiary-container">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-fixed mb-8 group-hover:bg-on-tertiary-container transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  architecture
                </span>
              </div>
              <h4 className="text-2xl font-bold text-primary group-hover:text-white mb-4 font-headline">
                Desain &amp; Struktur
              </h4>
              <p className="text-secondary group-hover:text-primary-fixed-dim leading-relaxed mb-6">
                Konsultasi arsitektural dan perhitungan struktur teknis untuk
                memastikan keamanan dan efisiensi material.
              </p>
              <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-white transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Unggulan Section */}
      <section className="py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-on-tertiary-container" />
            <span className="text-white font-bold uppercase tracking-widest text-xs">
              Portfolio Terbaru
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-headline mb-16">
            PROYEK UNGGULAN
          </h2>

          <div className="masonry-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / CTA Section */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter mb-8 leading-none">
              SIAP UNTUK MEMULAI PROYEK ANDA?
            </h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed font-medium">
              Dapatkan estimasi biaya transparan dan konsultasi desain struktur
              gratis dari tim ahli kami. Kami menjamin ketepatan waktu dan
              kualitas material terbaik.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-3xl font-black text-on-tertiary-container block">
                  15+
                </span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                  Tahun Pengalaman
                </span>
              </div>
              <div>
                <span className="text-3xl font-black text-on-tertiary-container block">
                  200+
                </span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                  Proyek Selesai
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 shadow-2xl shadow-primary/5 rounded-sm border-t-[6px] border-primary">
            <h4 className="text-2xl font-bold text-primary mb-6 font-headline">
              Kirim Pesan Cepat
            </h4>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
