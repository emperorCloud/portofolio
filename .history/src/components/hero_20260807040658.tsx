"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background avec mode sombre/clair */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDark ? "bg-[#05080f]" : "bg-[#f0f4f8]"
      }`}>
        {/* Grille adaptative */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-hero" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke={isDark ? "#3b82f6" : "#1e293b"} strokeWidth="0.5" />
                <circle cx="60" cy="60" r="1.5" fill={isDark ? "#3b82f6" : "#1e293b"} opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-hero)" />
          </svg>
        </div>

        {/* Effets de lumière adaptatifs */}
        <div className={`absolute top-[-30%] right-[-10%] w-[700px] h-[700px] rounded-full blur-3xl ${
          isDark ? "bg-blue-600/15" : "bg-blue-400/20"
        }`}></div>
        <div className={`absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full blur-3xl ${
          isDark ? "bg-purple-600/15" : "bg-purple-400/20"
        }`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo - GRANDE */}
          <div className="lg:w-2/5 flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Cercle lumineux extérieur */}
              <div className={`absolute -inset-8 rounded-full blur-2xl animate-pulse ${
                isDark ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40" : "bg-gradient-to-r from-blue-400/30 to-purple-400/30"
              }`}></div>
              
              {/* Deuxième cercle de glow */}
              <div className={`absolute -inset-4 rounded-full blur-xl ${
                isDark ? "bg-blue-500/20" : "bg-blue-400/20"
              }`}></div>

              {/* Cadre photo */}
              <div className={`relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 ${
                isDark 
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" 
                  : "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
              }`}>
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0e17]">
                  <Image
                    src="/images/ulrich.jpg"
                    alt="Ulrich Tchiem - Infrastructure & Cloud Solutions Architect"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badge "Architecte" */}
              <div className={`absolute -bottom-3 -right-3 px-5 py-2 rounded-full text-xs font-mono tracking-wider border shadow-lg ${
                isDark 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-400/50 shadow-blue-500/30" 
                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-300 shadow-blue-300/30"
              }`}>
                ⚡ ARCHITECTE
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            {/* Badge statut */}
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 ${
              isDark 
                ? "bg-blue-500/10 border border-blue-500/20" 
                : "bg-blue-100 border border-blue-200"
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  isDark ? "bg-blue-400" : "bg-blue-600"
                } opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isDark ? "bg-blue-500" : "bg-blue-600"
                }`}></span>
              </span>
              <span className={`text-xs font-mono tracking-widest ${
                isDark ? "text-blue-400" : "text-blue-700"
              }`}>
                DISPO · MARS 2026
              </span>
            </div>

            {/* Titre */}
            <h1 className={`font-mono text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-[1.05] ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Ulrich <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tchiem
              </span>
            </h1>

            <p className={`text-lg md:text-xl font-mono mb-5 tracking-wide ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}>
              Infrastructure & Cloud Solutions Architect
            </p>

            <div className={`flex flex-wrap gap-4 md:gap-6 mb-6 justify-center lg:justify-start ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
              <span><span className="font-bold text-blue-400">50+</span> infrastructures</span>
              <span><span className="font-bold text-blue-400">8</span> nœuds Proxmox</span>
              <span><span className="font-bold text-blue-400">99.99%</span> SLA</span>
              <span><span className="font-bold text-blue-400">15</span> domaines d'archi.</span>
            </div>

            <p className={`text-sm md:text-base mb-8 max-w-2xl leading-relaxed border-l-2 pl-4 ${
              isDark 
                ? "text-gray-400 border-blue-500/30" 
                : "text-gray-600 border-blue-400/40"
            }`}>
              Je conçois des infrastructures critiques où <span className="text-blue-400">chaque décision est justifiée</span> par l'usage métier.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/architecture-lab"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Architecture Lab
              </Link>
              <Link
                href="/cv"
                className={`border font-mono text-sm px-6 py-3.5 rounded-full transition-all duration-300 ${
                  isDark 
                    ? "border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white hover:bg-blue-500/10" 
                    : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                📄 CV
              </Link>
              <Link
                href="/projets"
                className={`font-mono text-sm px-4 py-3.5 rounded-full transition-all duration-300 ${
                  isDark 
                    ? "text-gray-500 hover:text-white hover:bg-white/5" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Projets →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block ${
        isDark ? "border-gray-700" : "border-gray-300"
      }`}>
        <div className={`w-5 h-8 border-2 rounded-full flex justify-center ${
          isDark ? "border-gray-700" : "border-gray-300"
        }`}>
          <div className="w-1 h-2.5 bg-blue-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}