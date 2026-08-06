// ═══════════════════════════════════════════════════════════
// 📁 src/app/layout.tsx
// ═══════════════════════════════════════════════════════════

import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ulrich Tchiem | Infrastructure & Cloud Solutions Architect",
  description:
    "Portfolio d'architecture infrastructure d'entreprise : cloud privé, virtualisation, stockage, cybersécurité, Kubernetes et IA locale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${firaCode.variable} ${inter.variable}`}>
      <body className="bg-[#0a0f1a] text-[#e2e8f0] font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}