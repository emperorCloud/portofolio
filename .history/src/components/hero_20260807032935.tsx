"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background avec effet de grille architecte */}
      <div className="absolute inset-0 bg-[#05080f]">
        {/* Grille principale */}
        <div className="absolute inset-0 opacity-[0.15]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-hero" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                <circle cx="80" cy="80" r="1.5" fill="#3b82f6" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-hero)" />
          </svg>
        </div>

        {/* Effets de lumière */}
        <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-3xl"></div>

        {/* Effet de code en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
          <pre className="font-mono text-3xl leading-[1.4] text-white whitespace-pre-wrap select-none">
{`kubectl apply -f manifest.yaml
terraform plan -out=tfplan
ansible-playbook deploy.yml
git push origin main
docker compose up -d
helm upgrade --install`}
          </pre>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="lg:w-1/3 flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-blue-400/40 overflow-hidden shadow-2xl shadow-blue-500/20">
                <Image
                  src="/images/ulrich.jpg"
                  alt="Ulrich Tchiem - Infrastructure & Cloud Solutions Architect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-mono px-4 py-1.5 rounded-full border border-blue-400/50 shadow-lg shadow-blue-500/30 tracking-wider">
                ARCHITECTE
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
            {/* Badge statut */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-mono tracking-widest">DISPO · MARS 2026</span>
            </div>

            {/* Titre */}
            <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-[1.1]">
              <span className="text-white">Ulrich</span>
              <span className="text-white"> </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Tchiem</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-400 font-mono mb-4 tracking-wide">
              Infrastructure & Cloud Solutions Architect
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
              <span className="text-white font-medium">50+ infrastructures déployées</span> · 
              <span className="text-white font-medium"> 8 nœuds Proxmox</span> · 
              <span className="text-white font-medium"> 99.99% SLA</span>
            </p>

            <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl leading-relaxed border-l-2 border-blue-500/30 pl-4">
              Je conçois des infrastructures critiques où <span className="text-blue-400">chaque décision est justifiée</span> par l'usage métier.
            </p>

            {/* Métriques */}
            <div className="flex flex-wrap gap-6 md:gap-10 mb-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl font-mono font-bold text-blue-400">7+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Années d'exp.</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-blue-400">50+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Infrastructures</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-blue-400">15</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Domaines d'archi.</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-blue-400">100%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Dispo systèmes</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/architecture-lab"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Architecture Lab
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/cv"
                className="border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white font-mono text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-500/10"
              >
                📄 CV
              </Link>
              <Link
                href="/projets"
                className="text-gray-500 hover:text-white font-mono text-sm px-4 py-3 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Projets →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-blue-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}