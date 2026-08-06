// src/app/blog/page.tsx
export default function BlogPage() {
  const articles = [
    {
      title: "Comment j'ai conçu une architecture multi-cloud pour 10 000 utilisateurs",
      date: "Août 2026",
      excerpt: "Retour d'expérience sur la migration d'une application monolithique vers une architecture distribuée...",
      readTime: "12 min",
      tags: ["Kubernetes", "AWS", "Terraform"],
    },
    // Ajoute tes articles ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-12">Articles techniques</h1>
      <div className="space-y-12">
        {articles.map((article, idx) => (
          <article key={idx} className="border-b border-gray-800 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className="text-xs font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-mono text-xl font-bold hover:text-blue-400 transition">
              <a href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {article.title}
              </a>
            </h2>
            <p className="text-gray-400 mt-2">{article.excerpt}</p>
            <div className="flex gap-4 text-sm text-gray-500 mt-4">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}