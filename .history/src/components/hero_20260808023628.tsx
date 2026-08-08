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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#05080f]" : "bg-[#f1f5f9]"
        }`}
      >
        {/* Grid subtile */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="70"
                height="70"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 70 0 L 0 0 0 70"
                  fill="none"
                  stroke={isDark ? "#60a5fa" : "#334155"}
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Light effects */}
        <div
          className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] ${
            isDark ? "bg-blue-600/20" : "bg-blue-400/25"
          }`}
        />
        <div
          className={`absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            isDark ? "bg-indigo-600/15" : "bg-indigo-300/20"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ===== PHOTO (GAUCHE) ===== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glow derrière la photo */}
              <div
                className={`absolute -inset-5 rounded-[2rem] blur-2xl transition-all duration-500 group-hover:blur-3xl ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/20"
                    : "bg-gradient-to-br from-blue-400/25 via-indigo-300/20 to-purple-300/15"
                }`}
              />

              {/* Conteneur photo */}
              <div
                className={`relative w-72 h-[380px] md:w-80 md:h-[420px] lg:w-[360px] lg:h-[480px] rounded-[2rem] overflow-hidden border shadow-2xl ${
                  isDark
                    ? "border-white/10 shadow-blue-900/20"
                    : "border-slate-200 shadow-slate-300/40"
                }`}
              >
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem - Architecte d'Infrastructure Cloud"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Gradient en bas */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Badge en bas de la photo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white">
                    <p className="text-xs font-mono tracking-widest opacity-80 mb-0.5">
                      SPECIALITÉ
                    </p>
                    <p className="text-sm font-medium">
                      Infrastructure & Cloud  Architect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TEXTE (DROITE) ===== */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status */}
            <div
              className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-7 text-xs font-mono tracking-widest ${
                isDark
                  ? "bg-blue-500/10 border border-blue-500/25 text-blue-400"
                  : "bg-blue-50 border border-blue-200 text-blue-700"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              DISPONIBLE ·Aout 2026
            </div>

            {/* Nom */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Ulrich .
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                 Tchiem
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl font-medium mb-7 ${
                isDark ? "text-blue-300" : "text-blue-600"
              }`}
            >
              Infrastructure & Architecte Solutions Cloud
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 mb-8 text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <div>
                <span className="font-semibold text-blue-400">50+</span>{" "}
                infrastructures
              </div>
              <div>
                <span className="font-semibold text-blue-400">8</span> nœuds
                Proxmox
              </div>
              <div>
                <span className="font-semibold text-blue-400">99.99%</span> SLA
              </div>
              <div>
                <span className="font-semibold text-blue-400">15</span> domaines
                d’archi
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Je conçois les parcs informatique d'entreprise (Datacenter privé) où{" "}
              <span className="text-blue-400 font-medium">
                chaque décision est justifiée
              </span>{" "}
              par l’usage métier.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/architecture-lab"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-7 py-3.5 rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Architecture Lab
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/cv"
                className={`px-6 py-3.5 rounded-xl border font-medium transition-all duration-300 ${
                  isDark
                    ? "border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white hover:bg-blue-500/5"
                    : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Voir le CV
              </Link>

              <Link
                href="/projets"
                className={`px-5 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                  isDark
                    ? "text-slate-500 hover:text-white hover:bg-white/5"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Projets →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}