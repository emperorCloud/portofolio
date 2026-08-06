"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./themeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/competences", label: "Compétences" },
    { href: "/blog", label: "Blog" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0a0e17]/80 backdrop-blur-xl sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-mono text-xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">EmperorCloud</span>
          <span className="text-gray-900 dark:text-white">.io</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 font-mono text-sm">
            {/* ... nav items */}
          </div>
          <ThemeToggle />
          {/* ... mobile menu button */}
        </div>
      </nav>
    </header>
  );
}