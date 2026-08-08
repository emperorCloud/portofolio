"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e17] dark:bg-[#0a0e17]">
        {/* Grille technique dynamique */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
              </pattern>
              <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#3b82f6" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>

        {/* Effets de lumière */}
        <div className="absolute top-[-40%] right-[-20%] w-[800px] h-[800px] bg-blue-600/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-40%] left-[-20%] w-[800px] h-[800px] bg-purple-600/20 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
        
        {/* Effet de ligne de code en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <pre className="font-mono text-4xl leading-[1.2] text-white whitespace-pre-wrap">
{`kubectl apply -f manifest.yaml
terraform plan -out=tfplan
ansible-playbook deploy.yml
git push origin main
docker compose up -d
helm upgrade --install`}
          </pre>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <div className="lg:w-1/3 flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-blue-400/30 overflow-hidden shadow-2xl">
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem - Infrastructure & Cloud Solutions Architect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-mono px-4 py-2 rounded-full border border-blue-400 shadow-lg shadow-blue-500/30">
                ⚡ Architecte
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
            {/* Statut */}
            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-sm font-mono tracking-wider">ARCHITECTE D'INFRASTRUCTURE</span>
            </div>

            {/* Titre massif */}
            <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
              <span className="text-white">Ulrich</span>
              <span className="text-white"> </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Tchiem</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Infrastructure & Cloud Solutions Architect
            </p>

            {/* Punchline */}
            <p className="text-gray-400 text-lg mb-6 max-w-2xl leading-relaxed">
              Je conçois des infrastructures critiques où <span className="text-blue-400">chaque décision est justifiée</span> par l'usage métier. 
              <span className="block text-gray-500 text-base mt-2">
                Cloud privé · HA · Cybersécurité · Kubernetes · IA locale
              </span>
            </p>

            {/* Métriques impactantes */}
            <div className="flex flex-wrap gap-8 mb-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">7+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Années d'exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Infrastructures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">99.99%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">15</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Domaines d'archi.</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/architecture-lab"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 text-lg font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explorer l'Architecture Lab
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/projets"
                className="border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white font-mono px-8 py-4 rounded-full transition-all duration-300 hover:bg-blue-500/10 text-lg"
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}