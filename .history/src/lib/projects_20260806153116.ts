export interface ADR {
  id: string;
  title: string;
  status: "proposé" | "accepté" | "déprécié";
  context: string;
  decision: string;
  consequences: string[];
  date: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  slug: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics?: {
    uptime?: string;
    cost?: string;
    performance?: string;
    users?: string;
  };
  adrs?: ADR[];
}

export const projects: Project[] = [
  {
    title: "Weloobe – Plateforme SaaS multi-tenant",
    description:
      "Architecture cloud-native avec isolation stricte des clients, haute disponibilité et scalabilité horizontale pour 500+ utilisateurs.",
    stack: ["Kubernetes", "Ceph", "Keycloak", "HAProxy", "PostgreSQL"],
    image: "/images/weloobe.png",
    slug: "weloobe",
    challenge:
      "Isoler les données de 500+ clients avec des exigences de sécurité strictes tout en maintenant une performance optimale et en contrôlant les coûts.",
    solution:
      "Architecture multi-tenant avec namespace Kubernetes par client, base de données dédiée par tenant, et proxy HAProxy pour le routage.",
    results: [
      "99.99% de disponibilité garantie",
      "Réduction de 40% des coûts vs solution précédente",
      "Temps de déploiement réduit de 2 heures à 5 minutes",
      "Isolation totale des données des clients",
    ],
    metrics: {
      uptime: "99.99%",
      cost: "-40%",
      users: "500+",
    },
    adrs: [
      {
        id: "ADR-001",
        title: "Choix de l'isolation multi-tenant",
        status: "accepté",
        context:
          "La plateforme SaaS doit accueillir des clients avec des exigences de sécurité et de performance variables. Une approche unique ne peut pas répondre à tous les cas.",
        decision:
          "Utiliser des namespaces Kubernetes isolés avec NetworkPolicy pour l'isolation réseau, et des bases de données PostgreSQL distinctes par tenant pour l'isolation des données.",
        consequences: [
          "Isolation maximale des données et des ressources",
          "Complexité de monitoring accrue (nécessite des outils multi-tenant)",
          "Coût d'infrastructure initial plus élevé mais compensé par la réduction des risques",
        ],
        date: "2024-06-15",
      },
      {
        id: "ADR-002",
        title: "Choix du moteur de base de données",
        status: "accepté",
        context:
          "Besoin d'une base de données relationnelle fiable avec support des transactions ACID et scalabilité horizontale.",
        decision:
          "Utiliser PostgreSQL avec Citus pour la scalabilité horizontale et TimescaleDB pour les données de monitoring.",
        consequences: [
          "Performance optimale pour les transactions complexes",
          "Extension possible pour l'analytique temps réel",
          "Learning curve pour les équipes opérationnelles",
        ],
        date: "2024-07-01",
      },
    ],
  },
  {
    title: "CPF Mbouo – Infrastructure de formation",
    description:
      "Création complète d'un système d'information sur site pour 200 postes avec contraintes électriques et budget serré.",
    stack: ["Proxmox", "ZFS", "pfSense", "Nextcloud", "Zabbix"],
    image: "/images/cpf-mbouo.png",
    slug: "cpf-mbouo",
    challenge:
      "Déployer une infrastructure complète dans un environnement avec alimentation électrique instable et budget limité.",
    solution:
      "Virtualisation avec Proxmox, stockage ZFS en RAID, firewall pfSense avec failover, et monitoring Zabbix.",
    results: [
      "Infrastructure opérationnelle en 3 semaines",
      "Coût réduit de 60% vs une solution externe",
      "Disponibilité stable malgré les coupures électriques",
      "200 utilisateurs formés en 6 mois",
    ],
    metrics: {
      uptime: "99.9%",
      cost: "-60%",
      users: "200+",
    },
  },
  {
    title: "Hotel Stenila – SI hôtelier complet",
    description:
      "Gestion hôtelière 24/7 avec segmentation réseau stricte et conformité PCI DSS.",
    stack: ["Proxmox", "Odoo", "FreeIPA", "VLAN", "pfSense"],
    image: "/images/hotel-stenila.png",
    slug: "hotel-stenila",
    challenge:
      "Assurer la sécurité des paiements (PCI DSS) tout en offrant une expérience fluide aux clients et en gérant les flux de travail hôteliers.",
    solution:
      "Réseau segmenté en VLAN (administration, clients, paiements), authentification centralisée avec FreeIPA, serveur Odoo pour la gestion.",
    results: [
      "Conformité PCI DSS obtenue",
      "Taux d'occupation augmenté de 20% grâce à la gestion optimisée",
      "Réduction de 50% des incidents de sécurité",
    ],
    metrics: {
      uptime: "99.95%",
      users: "150+",
    },
  },
  {
    title: "ASAIT – Plateforme IA d'entreprise",
    description:
      "Déploiement de LLM locaux (Mistral, DeepSeek) avec RAG sur documents internes.",
    stack: ["Ollama", "OpenWebUI", "Qdrant", "Dify", "Mistral"],
    image: "/images/asait.png",
    slug: "asait",
    challenge:
      "Permettre l'utilisation de l'IA générative en interne sans envoyer les données sensibles à l'externe.",
    solution:
      "Déploiement de modèles LLM en local avec Ollama, système RAG avec Qdrant, et interface OpenWebUI.",
    results: [
      "Productivité des équipes augmentée de 30%",
      "0 données sensibles envoyées à l'extérieur",
      "Temps de réponse en moins de 2 secondes",
    ],
    metrics: {
      performance: "<2s",
      users: "50+",
    },
    adrs: [
      {
        id: "ADR-001",
        title: "Choix du modèle LLM",
        status: "accepté",
        context:
          "Besoin d'un modèle de langage performant en français avec une bonne compréhension du contexte métier.",
        decision:
          "Utiliser Mistral 7B pour son bon équilibre performance/ressources, avec fine-tuning sur les données métier.",
        consequences: [
          "Bonnes performances en français",
          "Nécessite un serveur avec GPU dédié",
          "Coût initial plus élevé mais indépendance vis-à-vis des API externes",
        ],
        date: "2025-02-10",
      },
    ],
  },
];