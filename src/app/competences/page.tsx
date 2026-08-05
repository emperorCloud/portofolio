import SkillMatrix from "@/components/skillMatrix";

export default function CompetencesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-8">
        Domaines de compétence
      </h1>
      <SkillMatrix />
    </section>
  );
}