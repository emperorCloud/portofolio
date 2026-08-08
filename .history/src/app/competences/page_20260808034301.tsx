// ═══════════════════════════════════════════════════════════
// 📁 src/app/competences/page.tsx
// ═══════════════════════════════════════════════════════════
import SkillMatrix from "@/components/skillMatrix";

export default function CompetencesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-8">
        Domaines de compétence
        <div>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono px-3 py-1 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >📄 CV
          </a>
        </div>
      </h1>
      <SkillMatrix />
    </section>
  );
}