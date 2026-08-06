import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
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
    <html lang="fr" className={`${firaCode.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0a0e17] text-gray-900 dark:text-[#e2e8f0] font-sans antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}