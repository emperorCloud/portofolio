// src/components/hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="md:w-1/3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30"></div>
            <Image
              src="/images/ulrich.jpg" // ← Mets ta photo ici
              alt="Ulrich Tchiem"
              width={300}
              height={300}
              className="relative rounded-full border-2 border-blue-400 shadow-2xl"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="font-mono text-blue-400 text-sm mb-2">INFRASTRUCTURE & CLOUD SOLUTIONS ARCHITECT</p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4">
            Ulrich Tchiem
          </h1>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl">
            Je conçois des infrastructures critiques pour les entreprises : cloud privé, 
            haute disponibilité, cybersécurité, Kubernetes et IA locale. 
            <span className="block text-blue-400 mt-2">+7 ans d'expérience · 50+ infrastructures déployées</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/cv-ulrich-tchiem.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono px-6 py-3 rounded transition"
            >
              Télécharger le CV
            </a>
            <a
              href="/contact"
              className="border border-gray-700 hover:border-blue-400 font-mono px-6 py-3 rounded transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}