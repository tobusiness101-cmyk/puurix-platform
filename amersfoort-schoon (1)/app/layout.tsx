import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puurix Schoonmaakbedrijf | Premium schoonmaakdiensten",
  description: "Professionele en betrouwbare schoonmaak voor de zakelijke en particuliere markt. Vraag direct een offerte aan bij Puurix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}