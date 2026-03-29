"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { galleryProjects, ProjectCategory } from "../../data/mockData";

export default function GaleriContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Semua");

  const categories: ProjectCategory[] = ["Semua", "Bangunan Baru", "Renovasi", "Pasang Keramik"];

  const filteredProjects =
    activeCategory === "Semua"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === activeCategory);

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
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary font-bold rounded-sm"
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="gallery-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-on-surface-variant">
              Belum ada proyek untuk kategori ini.
            </div>
          )}
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
