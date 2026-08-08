// src/app/blog/page.tsx

import { articles } from "@/lib/articles";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
          Articles techniques
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Retours d'expérience, guides et réflexions sur l'architecture d'infrastructure
        </p>
      </div>

      <div className="grid gap-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group bg-[#0d1321] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
          >
            <Link href={`/blog/${article.slug}`} className="block md:flex">
              {article.image && (
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-mono text-xl font-bold group-hover:text-blue-400 transition mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}