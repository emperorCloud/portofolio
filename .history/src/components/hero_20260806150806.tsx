// src/components/hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background avec effet de grille */}
      <div className="absolute inset-0 bg-[#0a0e17]">
        {/* Grille technique */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Effet de lumière */}
        <div className="absolute top-[-40%] right-[-20%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-40%] left-[-20%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              {/* Cercle lumineux */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-400/30 overflow-hidden shadow-2xl">
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem - Infrastructure & Cloud Solutions Architect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badge "Architecte" */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-mono px-4 py-2 rounded-full border border-blue-400 shadow-lg">
                🚀 Architecte
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="lg:w-2/3 text-center lg:text-left">
            {/* Statut */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-sm font-mono">Disponible pour des missions</span>
            </div>

            {/* Titre */}
            <p className="font-mono text-blue-400 text-sm mb-2 tracking-wider">
              INFRASTRUCTURE & CLOUD SOLUTIONS ARCHITECT
            </p>
            
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Ulrich Tchiem
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-6 max-w-2xl">
              Je conçois des infrastructures critiques pour les entreprises : 
              <span className="block text-blue-400 mt-1">
                cloud privé · haute disponibilité · cybersécurité · Kubernetes · IA locale
              </span>
            </p>

            {/* Métriques rapides */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-mono font-bold">7+</span>
                <span className="text-gray-400">ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-mono font-bold">50+</span>
                <span className="text-gray-400">infrastructures déployées</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-mono font-bold">99.99%</span>
                <span className="text-gray-400">disponibilité</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/projets"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Voir les projets
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/cv"
                className="border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white font-mono px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-500/10"
              >
                Télécharger le CV
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white font-mono px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}