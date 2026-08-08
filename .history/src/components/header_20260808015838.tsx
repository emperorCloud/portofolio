"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./themeToggle";
import LanguageToggle from "./languageToggle";
import { useLanguage } from "@/contexts/languageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/architecture-lab", label: t("nav.architecture") },
    { href: "/projets", label: t("nav.projects") },
    { href: "/competences", label: t("nav.skills") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0a0e17]/80 backdrop-blur-xl sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-xl font-bold group">
          <span className="text-blue-600 dark:text-blue-400">Emperor</span>
          <span className="text-gray-900 dark:text-white">Cloud</span>
          <span className="text-gray-400 dark:text-gray-500 text-sm ml-1">.io</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-6 font-mono text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#0a0e17]/95 px-4 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 font-mono text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}