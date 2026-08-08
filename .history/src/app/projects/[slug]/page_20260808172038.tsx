// src/app/projects/[slug]/page.tsx

import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/architectureDiagram";

// ✅ Génération statique des pages (reste synchrone)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Le composant devient async
export default async function ProjetDetail({ params }: { params: { slug: string } }) {
  // ✅ On attend params avant d'y accéder
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* Bouton retour */}
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
      >
        ← Retour aux projets
      </Link>

      <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
        {project.title}
      </h1>
      
      <p className="text-gray-400 text-lg mb-6">
        {project.description}
      </p>

      {/* Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono bg-[#1a2332] text-blue-400 px-3 py-1 rounded-full border border-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Métriques */}
      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="bg-[#0d1321] border border-gray-800 rounded-lg p-4 text-center">
              <div className="font-mono text-xl font-bold text-blue-400">{value}</div>
              <div className="text-gray-500 text-xs uppercase">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-red-400 mb-3">🎯 Défi</h3>
          <p className="text-gray-400">{project.challenge}</p>
        </div>
        <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-6">
          <h3 className="font-mono text-lg font-bold text-green-400 mb-3">✅ Solution</h3>
          <p className="text-gray-400">{project.solution}</p>
        </div>
      </div>

      {/* Résultats */}
      <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-6 mb-12">
        <h3 className="font-mono text-lg font-bold text-blue-400 mb-4">📈 Résultats</h3>
        <ul className="space-y-2">
          {project.results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="text-blue-400 mt-1">▸</span>
              {result}
            </li>
          ))}
        </ul>
      </div>

      {/* ADR */}
      {project.adrs && project.adrs.length > 0 && (
        <div className="mb-12">
          <h2 className="font-mono text-2xl font-bold mb-6">
            Architecture Decision Records
          </h2>
          <p className="text-gray-400 mb-6">
            Les décisions d'architecture qui ont façonné ce projet
          </p>
          
          <div className="space-y-6">
            {project.adrs.map((adr) => (
              <div key={adr.id} className="bg-[#0d1321] border border-gray-800 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-white">{adr.title}</h3>
                    <p className="text-gray-500 text-sm font-mono">{adr.id}</p>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    adr.status === 'accepté' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : adr.status === 'proposé'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {adr.status}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm font-mono mb-1">Contexte</p>
                    <p className="text-gray-300">{adr.context}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-mono mb-1">Décision</p>
                    <p className="text-blue-400">{adr.decision}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-mono mb-1">Conséquences</p>
                    <ul className="space-y-1">
                      {adr.consequences.map((consequence, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-gray-600">•</span>
                          {consequence}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {new Date(adr.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ DIAGRAMMES D'ARCHITECTURE */}
      {project.diagrams && project.diagrams.length > 0 && (
        <div className="mt-12">
          <h2 className="font-mono text-2xl font-bold mb-6">Schémas d'architecture</h2>
          <p className="text-gray-400 mb-6">
            Visualisation interactive de l'architecture du projet
          </p>
          <div className="space-y-6">
            {project.diagrams.map((diagram, idx) => (
              <ArchitectureDiagram key={idx} {...diagram} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}