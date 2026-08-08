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
      {/* Fond */}
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-[#07090f]" : "bg-[#f4f6f9]"
        }`}
      >
        {/* Ligne technique horizontale */}
        <div
          className={`absolute top-1/2 left-0 right-0 h-px ${
            isDark ? "bg-white/5" : "bg-black/5"
          }`}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* PHOTO - GAUCHE */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/ulrich.jpg"
                alt="Ulrich Tchiem"
                fill
                className="object-cover object-top grayscale-[20%] contrast-110"
                priority
              />

              {/* Cadre technique */}
              <div
                className={`absolute inset-0 border ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}
              />

              {/* Coins techniques */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${isDark ? "border-blue-400" : "border-blue-600"}`} />
              <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${isDark ? "border-blue-400" : "border-blue-600"}`} />
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${isDark ? "border-blue-400" : "border-blue-600"}`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${isDark ? "border-blue-400" : "border-blue-600"}`} />
            </div>

            {/* Petite info technique sous la photo */}
            <div className={`mt-4 flex items-center gap-3 text-xs font-mono tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              AVAILABLE — MAR 2026
            </div>
          </div>

          {/* CONTENU - DROITE */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="max-w-xl">
              <p className={`text-sm font-mono tracking-[0.25em] uppercase mb-8 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                Infrastructure · Cloud · Systems
              </p>

              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6 ${isDark ? "text-white" : "text-neutral-900"}`}>
                Ulrich
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Tchiem
                </span>
              </h1>

              <p className={`text-lg leading-relaxed mb-10 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                Architecte d’infrastructures critiques.
                <br />
                Chaque décision est mesurée, chaque système est pensé pour durer.
              </p>

              {/* Stats en ligne fine */}
              <div className={`flex flex-wrap gap-x-10 gap-y-4 mb-12 text-sm ${isDark ? "text-neutral-500" : "text-neutral-500"}`}>
                <div>
                  <div className={`text-2xl font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>50+</div>
                  <div className="mt-1">Infrastructures</div>
                </div>
                <div>
                  <div className={`text-2xl font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>99.99%</div>
                  <div className="mt-1">SLA</div>
                </div>
                <div>
                  <div className={`text-2xl font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>8</div>
                  <div className="mt-1">Nœuds Proxmox</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/architecture-lab"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isDark
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  Architecture Lab
                  <span className="text-lg leading-none">→</span>
                </Link>

                <Link
                  href="/cv"
                  className={`inline-flex items-center px-7 py-3.5 text-sm font-medium border transition-all duration-300 ${
                    isDark
                      ? "border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white"
                      : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                  }`}
                >
                  Curriculum Vitae
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}