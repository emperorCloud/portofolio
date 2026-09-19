import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beaureilo NANTSA — Infrastructure & Cloud Solutions Architect",
    short_name: "Beaureilo NANTSA",
    description:
      "Portfolio d'architecture infrastructure d'entreprise : cloud privé, virtualisation, stockage, cybersécurité, Kubernetes, DevOps, Intégration Systèmes et IA locale.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080f",
    theme_color: "#0a0e17",
    lang: "fr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
