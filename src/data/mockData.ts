export type ProjectCategory = 'Bangunan Baru' | 'Renovasi' | 'Pasang Keramik' | 'Interior Hospitality' | 'Residensial Lux' | 'Komersial' | 'Bangun Baru' | 'Semua';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageSrc: string;
  label?: 'Sebelum' | 'Sesudah';
  description?: string;
  colSpanClass?: string;
  variant?: 'gallery-large' | 'gallery-medium' | 'gallery-small' | 'featured-large' | 'featured-medium' | 'featured-text-box';
}

export const galleryProjects: Project[] = [
  {
    id: "g1",
    title: "Masonry Architectural - Villa Bali",
    category: "Renovasi",
    imageSrc: "/images/gallery/pool-1.jpg",
    label: "Sesudah",
    colSpanClass: "gallery-span-2-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-large"
  },
  {
    id: "g2",
    title: "Detail Kolam Renang",
    category: "Renovasi",
    imageSrc: "/images/gallery/pool-2.jpg",
    colSpanClass: "gallery-span-1-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-medium"
  },
  {
    id: "g3",
    title: "Gerbang & Akses Utama",
    category: "Renovasi",
    imageSrc: "/images/gallery/entrance.jpg",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  },
  {
    id: "g4",
    title: "Struktur & Fasad Villa",
    category: "Renovasi",
    imageSrc: "/images/gallery/villa.jpg",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  },
  {
    id: "g5",
    title: "Restorasi Struktur Villa",
    category: "Renovasi",
    imageSrc: "/images/gallery/villa.jpg",
    colSpanClass: "gallery-span-1-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-medium"
  }
];

export const featuredProjects: Project[] = [
  {
    id: "f1",
    title: "Renovasi Kolam Renang Villa Bali",
    category: "Residensial Lux",
    imageSrc: "/images/gallery/pool-1.jpg",
    colSpanClass: "col-span-12 md:col-span-8 group relative overflow-hidden bg-primary-container min-h-[500px]",
    variant: "featured-large"
  },
  {
    id: "f2",
    title: "Pengerjaan Gerbang Utama",
    category: "Komersial",
    imageSrc: "/images/gallery/entrance.jpg",
    colSpanClass: "col-span-12 md:col-span-4 group relative overflow-hidden bg-surface-container min-h-[500px]",
    variant: "featured-medium"
  },
  {
    id: "f3",
    title: "Konsultasi Gratis",
    category: "Renovasi",
    imageSrc: "",
    colSpanClass: "col-span-12 md:col-span-4 group relative overflow-hidden bg-on-tertiary-container text-white p-12 flex flex-col justify-center min-h-[500px]",
    variant: "featured-text-box"
  },
  {
    id: "f4",
    title: "Struktur & Fasad Villa",
    category: "Renovasi",
    imageSrc: "/images/gallery/villa.jpg",
    colSpanClass: "col-span-12 md:col-span-8 group relative overflow-hidden bg-surface-container-high min-h-[500px]",
    variant: "featured-medium"
  }
];
