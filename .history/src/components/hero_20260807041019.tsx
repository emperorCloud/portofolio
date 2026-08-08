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
    <section className="relative min-h-screen flex items-center">
      {/* Background simple */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px]">
              <div
                className={`absolute inset-0 rounded-2xl overflow-hidden ${
                  isDark ? "bg-neutral-900" : "bg-neutral-100"
                }`}
              >
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p
              className={`text-sm tracking-[0.2em] uppercase mb-6 ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              Infrastructure & Cloud Architect
            </p>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Ulrich
              <br />
              Tchiem
            </h1>

            <p
              className={`text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Je conçois des infrastructures critiques où chaque décision est
              justifiée par l’usage métier.
            </p>

            {/* Stats minimalistes */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-8 mb-12 text-sm ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              <div>
                <span
                  className={`block text-2xl font-medium mb-1 ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  50+
                </span>
                Infrastructures
              </div>
              <div>
                <span
                  className={`block text-2xl font-medium mb-1 ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  99.99%
                </span>
                SLA
              </div>
              <div>
                <span
                  className={`block text-2xl font-medium mb-1 ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  15
                </span>
                Domaines
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/architecture-lab"
                className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                Architecture Lab
              </Link>

              <Link
                href="/cv"
                className={`px-8 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isDark
                    ? "border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white"
                    : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                }`}
              >
                Voir le CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}