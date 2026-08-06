// src/components/ArchitectureDiagram.tsx
import Image from "next/image";

interface DiagramProps {
  title: string;
  image: string;
  description: string;
}

export default function ArchitectureDiagram({ title, image, description }: DiagramProps) {
  return (
    <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-6">
      <h3 className="font-mono text-lg font-bold text-blue-400 mb-4">{title}</h3>
      <div className="relative group">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="rounded-lg border border-gray-700"
        />
        {/* Overlay avec zoom */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
          <span className="font-mono text-white">Cliquer pour agrandir</span>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-4">{description}</p>
    </div>
  );
}