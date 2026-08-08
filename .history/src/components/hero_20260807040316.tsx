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
          isDark ? "bg-[#05080f]" : "bg-[#f8fafc]"
        }`}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke={isDark ? "#3b82f6" : "#64748b"}
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Soft light effects */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] ${
            isDark ? "bg-blue-600/20" : "bg-blue-400/25"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] ${
            isDark ? "bg-indigo-600/15" : "bg-indigo-300/20"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Status */}
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-mono tracking-widest ${
                isDark
                  ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  : "bg-blue-50 border border-blue-200 text-blue-700"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              DISPONIBLE · MARS 2026
            </div>

            {/* Name */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Ulrich
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Tchiem
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl font-medium mb-6 ${
                isDark ? "text-blue-300" : "text-blue-600"
              }`}
            >
              Infrastructure & Cloud Solutions Architect
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-x-8 gap-y-3 mb-8 text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <div>
                <span className="font-bold text-blue-400">50+</span> infrastructures
              </div>
              <div>
                <span className="font-bold text-blue-400">8</span> nœuds Proxmox
              </div>
              <div>
                <span className="font-bold text-blue-400">99.99%</span> SLA
              </div>
              <div>
                <span className="font-bold text-blue-400">15</span> domaines d’archi
              </div>
            </div>

            <p
              className={`text-base md:text-lg max-w-xl mb-10 leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Je conçois des infrastructures critiques où{" "}
              <span className="text-blue-400 font-medium">
                chaque décision est justifiée
              </span>{" "}
              par l’usage métier.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
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
                    ? "border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white"
                    : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                Voir le CV
              </Link>
            </div>
          </div>

          {/* Right Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                className={`absolute -inset-6 rounded-3xl blur-2xl ${
                  isDark
                    ? "bg-gradient-to-tr from-blue-600/30 to-indigo-600/20"
                    : "bg-gradient-to-tr from-blue-400/25 to-indigo-300/20"
                }`}
              />

              {/* Photo container */}
              <div
                className={`relative w-72 h-80 md:w-80 md:h-96 lg:w-[380px] lg:h-[460px] rounded-3xl overflow-hidden border ${
                  isDark ? "border-slate-700/50" : "border-slate-200"
                } shadow-2xl`}
              >
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem - Infrastructure & Cloud Solutions Architect"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Overlay gradient bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-medium">
                    ⚡ Cloud & Infrastructure Architect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}