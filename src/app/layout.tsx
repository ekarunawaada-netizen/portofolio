import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const materialSymbolsUrl =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

export const metadata: Metadata = {
  title: "MASONRY ARCHITECT - Jasa Bangunan & Renovasi Premium",
  description:
    "Spesialis konstruksi hunian mewah dan renovasi komersial. Memadukan estetika desain modern dengan ketangguhan struktur arsitektural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href={materialSymbolsUrl} />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-tertiary-fixed-dim">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
