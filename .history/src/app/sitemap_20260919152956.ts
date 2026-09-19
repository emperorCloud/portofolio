import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

const baseUrl = "https://nantsa-beaureilo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/competences`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/certifications`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/architecture-lab`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/cv`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
