// ═══════════════════════════════════════════════════════════
// 📁 src/components/projectCard.tsx
// ═══════════════════════════════════════════════════════════

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  image: string;
  slug: string;
}


// src/components/ProjectCard.tsx (version améliorée)
export default function ProjectCard({ title, description, stack, image, slug }: ProjectCardProps) {
  return (
    <div className="group relative bg-[#111827] border border-[#2d3748] rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-500 hover:scale-[1.02]">
      {/* Effet de verre */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge "Étude de cas" */}
        <span className="absolute top-4 right-4 bg-blue-600 text-xs font-mono px-3 py-1 rounded-full">
          Étude de cas
        </span>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="font-mono text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-[#2d3748] text-blue-400 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={`/project/${slug}`}
          className="font-mono text-blue-400 hover:text-blue-300 transition flex items-center gap-2"
        >
          Voir l'étude de cas
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}