import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIPELITA | Portal Layanan Puskesmas",
  description: "Sistem Pelayanan Terintegrasi Puskesmas"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="id"><body>{children}</body></html>;
}