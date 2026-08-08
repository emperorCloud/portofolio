// src/lib/articles.ts

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "architecture-multi-tenant-kubernetes",
    title: "Comment j'ai conçu une architecture multi-tenant avec Kubernetes pour 500+ clients",
    excerpt: "Retour d'expérience sur la conception d'une plateforme SaaS avec isolation stricte, scalabilité automatique et coûts maîtrisés.",
    date: "2026-08-01",
    readTime: "12 min",
    tags: ["Kubernetes", "Architecture", "SaaS", "Cloud"],
    image: "/images/blog/multi-tenant.jpg",
    content: `
      <p>La conception d'une architecture multi-tenant est un défi complexe qui nécessite de trouver le bon équilibre entre isolation, performance et coûts.</p>
      
      <h2>Le problème</h2>
      <p>Notre client, une entreprise SaaS, devait héberger 500+ clients avec des exigences de sécurité strictes. Chaque client devait avoir l'assurance que ses données étaient isolées des autres, tout en bénéficiant d'une performance optimale.</p>
      
      <h2>La solution : Kubernetes avec isolation par namespace</h2>
      <p>Après avoir évalué plusieurs approches (VM dédiées, conteneurs partagés, isolation par namespace), nous avons choisi d'utiliser Kubernetes avec une isolation par namespace.</p>
      
      <h3>Pourquoi cette approche ?</h3>
      <ul>
        <li><strong>Scalabilité :</strong> Kubernetes permet de scaler automatiquement en fonction de la charge</li>
        <li><strong>Isolation :</strong> Chaque client a son propre namespace avec ses propres ressources</li>
        <li><strong>Coût :</strong> Mutualisation des ressources tout en garantissant l'isolation</li>
        <li><strong>Résilience :</strong> Auto-repair des pods en cas de problème</li>
      </ul>
      
      <h2>Les résultats</h2>
      <ul>
        <li>99.99% de disponibilité</li>
        <li>Réduction de 40% des coûts vs solution précédente</li>
        <li>Déploiement en 5 minutes vs 2 heures</li>
      </ul>
    `,
  },
  {
    slug: "proxmox-ha-low-budget",
    title: "Haute disponibilité avec Proxmox : comment j'ai fait pour moins de 5000€",
    excerpt: "Guide pratique pour déployer une infrastructure haute disponibilité avec Proxmox VE, Ceph et du matériel de récupération.",
    date: "2026-07-15",
    readTime: "10 min",
    tags: ["Proxmox", "HA", "Virtualisation", "Ceph"],
    image: "/images/blog/proxmox-ha.jpg",
    content: `
      <p>La haute disponibilité est souvent considérée comme un luxe réservé aux grandes entreprises. Pourtant, avec les bonnes technologies, il est possible de déployer une infrastructure HA avec un budget limité.</p>
      
      <h2>Le contexte</h2>
      <p>Un centre de formation avec 200 postes, un budget serré et une alimentation électrique instable. L'objectif : garantir la continuité de service même en cas de panne matérielle.</p>
      
      <h2>L'architecture choisie</h2>
      <ul>
        <li><strong>3 nœuds Proxmox</strong> en cluster</li>
        <li><strong>Ceph</strong> pour le stockage distribué</li>
        <li><strong>pfSense</strong> en mode failover</li>
        <li><strong>Zabbix</strong> pour le monitoring</li>
      </ul>
      
      <h2>Le déploiement</h2>
      <p>Nous avons utilisé du matériel de récupération (serveurs d'occasion) et optimisé chaque composant pour maximiser la disponibilité avec un budget limité.</p>
    `,
  },
  {
    slug: "ia-locale-entreprise-rag",
    title: "Déployer des LLM en entreprise sans envoyer ses données à l'extérieur",
    excerpt: "Guide complet pour installer et configurer un système RAG (Retrieval-Augmented Generation) avec Ollama, Qdrant et OpenWebUI.",
    date: "2026-06-20",
    readTime: "15 min",
    tags: ["IA", "LLM", "RAG", "Ollama", "Sécurité"],
    image: "/images/blog/ia-locale.jpg",
    content: `
      <p>Les entreprises hésitent souvent à utiliser l'IA générative par peur de fuite de données. La solution : déployer ses propres modèles en local.</p>
      
      <h2>Pourquoi l'IA locale ?</h2>
      <ul>
        <li><strong>Confidentialité :</strong> Aucune donnée ne quitte l'infrastructure</li>
        <li><strong>Performance :</strong> Latence réduite</li>
        <li><strong>Coût :</strong> Pas de frais d'API récurrents</li>
        <li><strong>Contrôle :</strong> Fine-tuning possible sur les données métier</li>
      </ul>
      
      <h2>La stack technique</h2>
      <ul>
        <li><strong>Ollama</strong> pour l'hébergement des modèles</li>
        <li><strong>Qdrant</strong> pour la base de données vectorielle</li>
        <li><strong>OpenWebUI</strong> pour l'interface utilisateur</li>
        <li><strong>Dify</strong> pour l'orchestration des workflows</li>
      </ul>
      
      <h2>Les résultats</h2>
      <ul>
        <li>Productivité des équipes augmentée de 30%</li>
        <li>0 données sensibles envoyées à l'extérieur</li>
        <li>Temps de réponse en moins de 2 secondes</li>
      </ul>
    `,
  },
];