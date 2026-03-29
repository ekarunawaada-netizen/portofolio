import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt="Modern luxury minimalist house architecture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhbfoddI7mpKTX5IP_9ZDJejO4YVlKBH4qjzVpw0ZjEk47U1ntB5sh36W0wQRRcsqdf4jMRKtqvgJ_AG-DFP2c3MrhPwyk0QGlWYu8g_T8T3eh7kH8guXcHHjMcoqmCW10SjAN3_jknKcszaknQdjozSwo1V8TSq2dJqJfX_eWwa3In_qU__C5xzLRjFnDGTPrnNLX1AyeqpmeS5cvU4mSU-DQYHaMZfHt6H5NAcVEBlnFECybsRGkvKJbJiDuLC3yDX214x6LbLY"
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
                href="https://wa.me/6281234567890?text=Halo%20Masonry%20Architect%2C%20saya%20tertarik%20konsultasi%20gratis."
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
            {/* Featured Project 1 (Large) */}
            <div className="col-span-12 md:col-span-8 group relative overflow-hidden bg-primary-container min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                alt="The Stone Haven Villa"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv9hBDrvD-qaoG5RXqzz6AnMv1gggRjVnGgpnTEGCwRlF00qmjAAn2nZMgGs_zzur3I1OxOtz7Ng1N2TL1NQa6SMmuBjhBa55FCIRBDZFRz6NDDvD0PQiNNpkGeN9iDdvUk3KVtTVIRyZsbjhIPHcCjAoWXYy9gPvJEchFAjUQDIcIAoJtH6_j5c01XWHAz93EVP7qNpX3jIP0-v2mLShleX4HzbGu4QzbFHSuvrfGwChSwEsSlrNeReb7O3BYJM2X9ubM9p7TXT8"
              />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-primary via-primary/50 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2 block">
                      Residensial Lux
                    </span>
                    <h4 className="text-3xl font-bold text-white font-headline leading-tight">
                      The Stone Haven Villa
                    </h4>
                  </div>
                  <Link
                    href="/galeri"
                    className="bg-white text-primary px-6 py-3 font-bold text-sm tracking-tighter flex items-center gap-2 hover:bg-on-tertiary-container hover:text-white transition-colors"
                  >
                    Lihat Selengkapnya{" "}
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden bg-primary-container min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                alt="Nexus Office Renovation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuHKLRJXFlssT1nZJ1vBFnLiRoFB697TX3eSNaMdtzOLL8GiNxHqcN-uv8wcNc9x42JiqC5i_6frpKiBNg1XFgPew1p5s39bwThZYeLNybqILI75qSIcMgfRTDIyG5ypjJdcd0528uUJYQVJGxBPEZUPDXsiXIiXgJxkii6HGgTAwl0_4ZKY0HIcu-8DYFJ2q2P0l-AMrwqyTGW3VaI1LHYxue6M88xgkJViUh5gQApGiXfxSrndgYHo6N9xfv-8WavmG2esVKHM4"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/80 to-transparent">
                <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2 block">
                  Komersial
                </span>
                <h4 className="text-xl font-bold text-white font-headline mb-4">
                  Nexus Office Renovation
                </h4>
                <Link
                  href="/galeri"
                  className="text-white font-bold text-xs underline underline-offset-4 decoration-on-tertiary-container"
                >
                  Detail Proyek
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden bg-primary-container min-h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                alt="Minimalist Mono House"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbMA9FuZ6eedkQuDaYcOvhe9N3wQK461nrqEZht6tdlSj780TgUhxgZhPahkq4KW160ZctdnAB9BS1mHw2ZCSt8_2UpmRqdKgh1glmPcZoTzaXyY2tCub_qUJQ0OurgCj-u16gFkzMNQlBAiFiJQ0fRmtNAUjdrPTHW013-1U_6b_n_f9A5EAhrDcMW7lzZT1q3vLbmwFv7ueXGt1CFpggrytjE5G_fS0r4L1QYg5OLFNssnisOjdauWNwM4HxL5BY1BazF0CX5Jk"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/80 to-transparent">
                <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2 block">
                  Bangun Baru
                </span>
                <h4 className="text-xl font-bold text-white font-headline mb-4">
                  Minimalist Mono House
                </h4>
                <Link
                  href="/galeri"
                  className="text-white font-bold text-xs underline underline-offset-4 decoration-on-tertiary-container"
                >
                  Detail Proyek
                </Link>
              </div>
            </div>

            {/* Featured Project 4 (Large) */}
            <div className="col-span-12 md:col-span-8 group relative overflow-hidden bg-primary-container min-h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                alt="Grand Heritage Lobby"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWk1x0WdqNHKRMWRDgRrfzNUmOYgSStJ7EfHZr_evcvk_NpDcvqHAvVBtcOdMSEWMNeF-v6Vns6XZzP1Jnf0PccmFIVpFQLd7pe6b3oH9g0SNHzyFlz_irdRrfAgSRTrpc49wKWDfWSTcvo0-HH79WrYT4S9u6oUZrmwhOWCNjG1Nnl5tdaLXkJXDCcmViUX1aLpX_zXy3qE6n0cT9rISQNKK2LC4AwkK1gdVj5acNgwBm0S4m69ZllSBjXYc62wNVutejwVi__7k"
              />
              <div className="absolute bottom-0 right-0 p-8 w-full md:w-2/3 bg-white/95 backdrop-blur-sm border-t-4 border-on-tertiary-container">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">
                  Interior Hospitality
                </span>
                <h4 className="text-2xl font-black text-primary font-headline mb-4">
                  Grand Heritage Lobby
                </h4>
                <p className="text-secondary text-sm mb-6">
                  Proyek renovasi interior seluas 500m2 dengan fokus pada
                  restorasi material klasik dan instalasi kelistrikan modern.
                </p>
                <Link
                  href="/galeri"
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:text-on-tertiary-container transition-colors"
                >
                  Lihat Selengkapnya{" "}
                  <span className="material-symbols-outlined text-sm">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>
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
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  Nama Lengkap
                </label>
                <input
                  className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm"
                  placeholder="Contoh: Budi Santoso"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  Nomor WhatsApp
                </label>
                <input
                  className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm"
                  placeholder="0812-xxxx-xxxx"
                  type="tel"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  Jenis Proyek
                </label>
                <select className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm">
                  <option>Bangun Rumah Baru</option>
                  <option>Renovasi Interior</option>
                  <option>Pekerjaan Atap/Struktur</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <button
                className="w-full bg-on-tertiary-container text-white font-bold py-4 mt-4 flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                type="submit"
              >
                Dapatkan Penawaran{" "}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
