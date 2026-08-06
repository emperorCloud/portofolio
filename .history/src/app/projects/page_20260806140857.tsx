// ═══════════════════════════════════════════════════════════
// 📁 src/app/projects/page.tsx
// ═══════════════════════════════════════════════════════════

import ProjectCard from "@/components/projectCard";
import { projects } from "@/lib/projects";

export default function ProjetsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-8">Tous les projets</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}