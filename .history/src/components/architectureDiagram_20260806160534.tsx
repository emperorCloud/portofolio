"use client";

import Image from "next/image";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface DiagramProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export default function ArchitectureDiagram({ src, alt, title, description }: DiagramProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0d1321] border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <h3 className="font-mono text-lg font-bold text-blue-400">{title}</h3>
        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
      </div>

      <div 
        className="relative cursor-zoom-in group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full h-[300px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Overlay zoom */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-blue-600 text-white font-mono px-4 py-2 rounded-full text-sm">
            🔍 Cliquer pour zoomer
          </span>
        </div>
      </div>

      {/* Modal de zoom */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-[#0a0e17] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerOnInit
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Contrôles de zoom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-black/50 p-2 rounded-full">
                    <button
                      onClick={() => zoomOut()}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="text-white px-3 py-1 hover:bg-white/10 rounded-full transition text-sm font-mono"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => zoomIn()}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>

                  <TransformComponent>
                    <div className="w-full h-[90vh] flex items-center justify-center p-8">
                      <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={800}
                        className="object-contain"
                      />
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </div>
  );
}