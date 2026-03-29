import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/mockData";

export default function ProjectCard({ project }: { project: Project }) {
  // Gallery Variants
  if (project.variant === "gallery-large") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          alt={project.title}
          src={project.imageSrc}
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        {project.label && (
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-on-tertiary-container text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              {project.label}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <p className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2">
            {project.category}
          </p>
          <h3 className="font-headline text-3xl font-black text-white tracking-tighter uppercase leading-none">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  if (project.variant === "gallery-medium") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          alt={project.title}
          src={project.imageSrc}
        />
        {project.category === "Bangunan Baru" ? (
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
        )}
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <p className="text-white/70 font-medium text-[10px] uppercase tracking-widest mb-1">
            {project.category}
          </p>
          <h3 className="font-headline text-xl font-bold text-white tracking-tight leading-tight uppercase">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  if (project.variant === "gallery-small") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          alt={project.title}
          src={project.imageSrc}
        />
        <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-all" />
        {project.label && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-secondary text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
              {project.label}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 z-10">
          <h3 className="font-headline text-sm font-bold text-white uppercase tracking-wider">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  // Featured Variants
  if (project.variant === "featured-large") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
          alt={project.title}
          src={project.imageSrc}
        />
        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-primary via-primary/50 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2 block">
                {project.category}
              </span>
              <h4 className="text-3xl font-bold text-white font-headline leading-tight z-10 relative">
                {project.title}
              </h4>
            </div>
            <Link
              href="/galeri"
              className="bg-white text-primary px-6 py-3 font-bold text-sm tracking-tighter flex items-center gap-2 hover:bg-on-tertiary-container hover:text-white transition-colors relative z-10"
            >
              Lihat Selengkapnya{" "}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (project.variant === "featured-medium") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
          alt={project.title}
          src={project.imageSrc}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/80 to-transparent">
          <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <h4 className="text-xl font-bold text-white font-headline mb-4 z-10 relative">
            {project.title}
          </h4>
          <Link
            href="/galeri"
            className="text-white font-bold text-xs underline underline-offset-4 decoration-on-tertiary-container relative z-10"
          >
            Detail Proyek
          </Link>
        </div>
      </div>
    );
  }

  if (project.variant === "featured-text-box") {
    return (
      <div className={project.colSpanClass}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
          alt={project.title}
          src={project.imageSrc}
        />
        <div className="absolute bottom-0 right-0 p-8 w-full md:w-2/3 bg-white/95 backdrop-blur-sm border-t-4 border-on-tertiary-container z-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">
            {project.category}
          </span>
          <h4 className="text-2xl font-black text-primary font-headline mb-4">
            {project.title}
          </h4>
          <p className="text-secondary text-sm mb-6">
            {project.description}
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
    );
  }

  return null;
}
