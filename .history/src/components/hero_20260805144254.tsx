import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <p className="font-mono text-blue-400 mb-4">
        Infrastructure & Cloud Solutions Architect
      </p>
      <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6">
        Ulrich Tchiem
      </h1>
      <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8">
        Je conçois des infrastructures critiques pour les entreprises :
        cloud privé, haute disponibilité, cybersécurité, Kubernetes et IA
        locale. Chaque décision est justifiée par l&apos;usage métier.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/projets"
          className="bg-blue-600 hover:bg-blue-700 text-white font-mono px-6 py-3 rounded transition"
        >
          Voir les projets
        </Link>
        <Link
          href="/contact"
          className="border border-gray-700 hover:border-blue-400 font-mono px-6 py-3 rounded transition"
        >
          Me contacter
        </Link>
      </div>
    </section>
  );
}