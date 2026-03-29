import type { Metadata } from "next";
import LayananContent from "./LayananContent";

export const metadata: Metadata = {
  title: "Layanan - MASONRY ARCHITECT",
  description:
    "Solusi konstruksi tanpa kompromi. Bangun rumah baru, renovasi, pemasangan keramik & granit, pengecatan & finishing.",
};

export default function LayananPage() {
  return <LayananContent />;
}
