import Hero from "@/components/hero";
import MetricsDashboard from "@/components/metricsDashboard";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsDashboard />
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="font-mono text-3xl font-bold text-center mb-4">
          Projects d&apos;architecture
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Des études de cas concrets qui démontrent ma capacité à résoudre des problèmes complexes
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="font-mono text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-2">
            Voir tous les projets →
          </a>
        </div>
      </section>
    </>
  );
}