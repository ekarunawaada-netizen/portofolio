import type { Metadata } from "next";
import GaleriContent from "./GaleriContent";

export const metadata: Metadata = {
  title: "Galeri Proyek - MASONRY ARCHITECT",
  description:
    "Menampilkan dedikasi kami pada presisi teknik dan keindahan material alam dalam setiap proyek konstruksi kelas atas.",
};

export default function GaleriPage() {
  return <GaleriContent />;
}
