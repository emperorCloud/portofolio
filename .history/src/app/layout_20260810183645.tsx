import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { LanguageProvider } from "@/contexts/languageContext";
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
  // 🔥 1. AJOUTE LA BASE URL
  metadataBase: new URL("https://ulrich-tchiem.vercel.app"),
  
  title: "Beaureilo NANTSA | Infrastructure & Cloud Solutions Architect",
  description:
    "Portfolio d'architecture infrastructure d'entreprise : cloud privé, virtualisation, stockage, cybersécurité, Kubernetes et IA locale.",
  
  // 🔥 2. AJOUTE LES MÉTADONNÉES OPEN GRAPH
  openGraph: {
    title: "Beaureilo NANTSA | Infrastructure & Cloud Solutions Architect",
    description:
      "Portfolio d'architecture infrastructure d'entreprise : cloud privé, virtualisation, stockage, cybersécurité, Kubernetes et IA locale.",
    url: "https://ulrich-tchiem.vercel.app",
    siteName: "Beaureilo NANTSA - Architecte Infrastructure",
    images: [
      {
        url: "/Nboreilo.png",
        width: 1200,
        height: 630,
        alt: "Beaureilo NANTSA - Infrastructure & Cloud Architect",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  
  // 🔥 3. AJOUTE LES MÉTADONNÉES TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Beaureilo NANTSA | Infrastructure & Cloud Architect",
    description:
      "Portfolio d'architecture infrastructure d'entreprise : cloud privé, virtualisation, stockage, cybersécurité, Kubernetes et IA locale.",
    images: ["/Nboreilo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${firaCode.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#05080f] text-gray-900 dark:text-[#e2e8f0] font-sans antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}