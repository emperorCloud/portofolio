// ═══════════════════════════════════════════════════════════
// 📁 src/app/page.tsx
// ═══════════════════════════════════════════════════════════

import Hero from "@/components/hero";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="font-mono text-3xl font-bold text-center mb-12">
          Projets d&apos;architecture
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}