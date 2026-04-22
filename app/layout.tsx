// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/global.scss";
import Navbar from "@/layouts/Navbar";

// Define local fonts
const synonym = localFont({
  src: "../public/fonts/Synonym-Regular.otf",
  variable: "--font-synonym",
  weight: "400",
  style: "normal",
});

const chillax = localFont({
  src: "../public/fonts/Chillax-Semibold.otf",
  variable: "--font-chillax",
  weight: "600", // or '500' if you have medium; adjust based on your file
  style: "normal",
});

export const metadata: Metadata = {
  title: "Lumiere Library | The architecture of a quiet life",
  description:
    "A calm, minimal digital space exploring design, structure, and intentional living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${synonym.variable} ${chillax.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
