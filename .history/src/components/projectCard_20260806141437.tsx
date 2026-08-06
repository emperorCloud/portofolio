// ═══════════════════════════════════════════════════════════
// 📁 src/components/projectCard.tsx
// ═══════════════════════════════════════════════════════════

import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  image: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <div className="bg-[#0d1321] border border-gray-800 rounded-lg overflow-hidden hover:border-blue-400 transition">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-mono text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-gray-800 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/projets/${slug}`}
          className="font-mono text-blue-400 hover:underline"
        >
          Étude de cas →
        </Link>
      </div>
    </div>
  );
}