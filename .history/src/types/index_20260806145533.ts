// src/types/index.ts
export interface ADR {
  id: string;
  title: string;
  status: "proposé" | "accepté" | "déprécié";
  context: string;
  decision: string;
  consequences: string[];
  date: string;
}

export interface Projet {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  adrs: ADR[]; // ← Nouveau !
  metrics: {
    uptime?: string;
    cost?: string;
    performance?: string;
    users?: string;
  };
  challenge: string;
  solution: string;
  results: string[];
}