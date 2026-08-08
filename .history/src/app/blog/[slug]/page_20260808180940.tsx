// src/app/blog/[slug]/page.tsx

import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
      >
        ← Retour aux articles
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>{new Date(article.date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>

      {article.image && (
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-invert prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </section>
  );
}