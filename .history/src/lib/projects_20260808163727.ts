// src/lib/projects.ts

export interface ADR {
  id: string;
  title: string;
  status: "proposé" | "accepté" | "déprécié";
  context: string;
  decision: string;
  consequences: string[];
  date: string;
}

export interface Diagram {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  slug: string; // ← TOUT EN MINUSCULES
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
  diagrams?: Diagram[];
}

export const projects: Project[] = [
  {
    title: "Weloobe – Plateforme SaaS multi-tenant",
    description:
      "Infrastructure complète pour startup SaaS : isolation clients, outils collaboratifs, automatisation IA et reprise d'activité.",
    stack: ["Proxmox", "pfSense", "DNS", "Reverse Proxy", "NPM", "Nextcloud", "Odoo", "Gitea", "Flowise", "PBS"],
    image: "/images/weloobe.png",
    slug: "weloobe", // ← MINUSCULE
    challenge:
      "Isoler les données de plusieurs clients avec des exigences de sécurité strictes tout en maintenant une performance optimale et en contrôlant les coûts avec un budget startup.",
    solution:
      "Architecture Proxmox avec VMs dédiées par service, pfSense pour la segmentation réseau, reverse proxy + NPM pour l'exposition sécurisée, et PBS pour les sauvegardes.",
    results: [
      "99.9% de disponibilité sur 6 mois",
      "Ajout d'un nouveau client en moins d'une heure",
      "Coût 40% inférieur à une solution cloud équivalente",
      "Isolation totale des données entre clients",
    ],
    metrics: {
      uptime: "99.9%",
      cost: "-40%",
      users: "500+",
    },
    adrs: [
      {
        id: "ADR-001",
        title: "Choix de l'hyperviseur",
        status: "accepté",
        context:
          "La startup a besoin d'une solution de virtualisation fiable, évolutive et sans coût de licence pour héberger ses services.",
        decision:
          "Utiliser Proxmox VE pour son support natif de ZFS, ses backups intégrés (PBS), et sa capacité à évoluer vers un cluster HA.",
        consequences: [
          "Zéro coût de licence",
          "Sauvegardes incrémentielles avec déduplication",
          "Possibilité d'ajouter des nœuds pour la haute disponibilité",
          "Compétences Linux nécessaires pour l'administration avancée",
        ],
        date: "2025-03-10",
      },
      {
        id: "ADR-002",
        title: "Stratégie de sécurisation des services",
        status: "accepté",
        context:
          "La plateforme doit exposer plusieurs services (Nextcloud, Odoo, Gitea) de manière sécurisée avec des certificats SSL.",
        decision:
          "Mettre en place pfSense comme firewall principal, un reverse proxy pour le routage HTTP, et Nginx Proxy Manager pour la gestion automatisée des certificats Let's Encrypt.",
        consequences: [
          "Terminaison SSL centralisée",
          "Renouvellement automatique des certificats",
          "Isolation réseau par VLAN",
          "IDS/IPS activé sur le trafic entrant",
        ],
        date: "2025-03-15",
      },
    ],
    diagrams: [
      {
        src: "/images/weloobe-architecture.png",
        alt: "Architecture Weloobe",
        title: "Vue d'ensemble de l'architecture",
        description: "Architecture Proxmox avec pfSense, reverse proxy, Nextcloud, Odoo, Gitea, Flowise et PBS",
      },
    ],
  },
  {
    title: "CPF Mbouo – Digitalisation d'un centre de formation",
    description:
      "Création complète d'un système d'information sur site pour 200 postes avec contraintes électriques et budget serré.",
    stack: ["Proxmox", "pfSense", "DNS", "Reverse Proxy", "NPM", "Nextcloud", "ZFS"],
    image: "/images/cpf-mbouo.png",
    slug: "cpf-mbouo", // ← MINUSCULE
    challenge:
      "Déployer une infrastructure complète dans un environnement avec alimentation électrique instable, connexion Internet peu fiable, et budget extrêmement limité.",
    solution:
      "Virtualisation avec Proxmox, stockage ZFS local, firewall pfSense avec QoS pour lien radio, reverse proxy + NPM pour Nextcloud.",
    results: [
      "Infrastructure opérationnelle en 3 semaines",
      "Coût réduit de 60% vs une solution externe",
      "Résilience aux coupures électriques (UPS + arrêt propre)",
      "200 utilisateurs formés en 6 mois",
    ],
    metrics: {
      uptime: "99.5%",
      cost: "-60%",
      users: "200+",
    },
    diagrams: [
      {
        src: "/images/cpf-mbouo-architecture.png",
        alt: "Architecture CPF Mbouo",
        title: "Architecture du système d'information",
        description: "Infrastructure de formation avec Proxmox, ZFS, pfSense et Nextcloud",
      },
    ],
  },
  {
    title: "TQG – Infrastructure IT multi-site",
    description:
      "Infrastructure centralisée avec ERP Odoo, VPN WireGuard et supervision unifiée pour 3 agences.",
    stack: ["Proxmox", "pfSense", "DNS", "Reverse Proxy", "NPM", "Odoo", "Zabbix", "WireGuard"],
    image: "/images/tqg.png",
    slug: "tqg", // ← MINUSCULE
    challenge:
      "Interconnecter 3 agences avec des liens Internet instables, fournir un accès centralisé à l'ERP, et superviser l'ensemble depuis le siège.",
    solution:
      "Serveur Proxmox au siège hébergeant Odoo, Zabbix et les services réseau. pfSense avec VPN WireGuard en full mesh entre les sites. Reverse proxy + NPM pour l'exposition sécurisée.",
    results: [
      "Disponibilité réseau > 99.9%",
      "Basculement fibre/4G transparent (< 30 secondes)",
      "Supervision proactive avec alertes avant les pannes",
      "Aucune fuite de données en 2 ans",
    ],
    metrics: {
      uptime: "99.9%",
      users: "50+",
    },
    diagrams: [
      {
        src: "/images/tqg-network.png",
        alt: "Architecture TQG",
        title: "Réseau multi-site avec VPN WireGuard",
        description: "Infrastructure centralisée Proxmox avec pfSense, Odoo et supervision Zabbix",
      },
    ],
  },
  {
    title: "Hotel Stenila – SI hôtelier complet",
    description:
      "Gestion hôtelière 24/7 avec téléphonie IP, segmentation réseau et haute disponibilité.",
    stack: ["Proxmox", "pfSense", "FreePBX", "Odoo", "Nextcloud", "ZFS"],
    image: "/images/hotel-stenila.png",
    slug: "hotel-stenila", // ← MINUSCULE
    challenge:
      "Assurer un check-in/check-out 24/7, gérer la téléphonie IP interne, et isoler le réseau clients du réseau administratif avec un budget modéré.",
    solution:
      "Cluster Proxmox 2 nœuds avec ZFS mirror, pfSense avec VLANs (clients, admin, VoIP), FreePBX pour la téléphonie IP, Odoo pour la gestion hôtelière.",
    results: [
      "Téléphonie IP fonctionnelle sur tous les postes",
      "Wi-Fi clients isolé du réseau administratif",
      "Zéro incident de sécurité en 18 mois",
      "ROI atteint en 8 mois",
    ],
    metrics: {
      uptime: "99.95%",
      users: "150+",
    },
    diagrams: [
      {
        src: "/images/hotel-stenila-architecture.png",
        alt: "Architecture Hotel Stenila",
        title: "Architecture du SI hôtelier",
        description: "Infrastructure Proxmox avec pfSense, FreePBX, Odoo et segmentation VLAN",
      },
    ],
  },
  {
    title: "ASAIT – Plateforme IA d'entreprise",
    description:
      "Déploiement de LLM locaux (Mistral 7B) avec interface utilisateur sur hyperviseur XCP-ng.",
    stack: ["XCP-ng", "OpenWebUI", "Mistral 7B", "Ollama", "GPU Passthrough"],
    image: "/images/asait.png",
    slug: "asait", // ← MINUSCULE
    challenge:
      "Permettre l'utilisation de l'IA générative en interne sans envoyer les données sensibles à l'extérieur, avec une interface simple pour les utilisateurs non techniques.",
    solution:
      "Déploiement sur XCP-ng avec GPU passthrough, Ollama pour l'inférence locale, Mistral 7B pour sa qualité en français, et OpenWebUI comme interface utilisateur.",
    results: [
      "100% des données restent sur site",
      "Mise en production en 4 semaines",
      "Adoption interne par 80% des employés",
      "Conformité RGPD intégrale",
    ],
    metrics: {
      performance: "<2s",
      users: "80+",
    },
    adrs: [
      {
        id: "ADR-001",
        title: "Choix de l'hyperviseur pour l'IA",
        status: "accepté",
        context:
          "Besoin d'un hyperviseur capable de faire du GPU passthrough pour l'inférence locale, avec une sécurité renforcée pour les données sensibles.",
        decision:
          "Utiliser XCP-ng pour son support natif du GPU passthrough, sa sécurité basée sur Xen, et sa maturité en environnement d'entreprise.",
        consequences: [
          "GPU passthrough natif et stable",
          "Isolation forte entre les VMs (Xen)",
          "100% open source",
          "Interface de gestion Xen Orchestra incluse",
        ],
        date: "2025-01-20",
      },
      {
        id: "ADR-002",
        title: "Choix du modèle LLM",
        status: "accepté",
        context:
          "Besoin d'un modèle de langage performant en français avec une bonne compréhension du contexte métier, exécutable localement.",
        decision:
          "Utiliser Mistral 7B pour son excellent rapport performance/ressources, sa qualité en français, et sa licence Apache 2.0.",
        consequences: [
          "Excellentes performances en français",
          "Nécessite un serveur avec GPU dédié (RTX 3090/4090)",
          "Indépendance vis-à-vis des API externes",
          "Possibilité de fine-tuning sur données métier",
        ],
        date: "2025-02-10",
      },
    ],
    diagrams: [
      {
        src: "/images/asait-architecture.png",
        alt: "Architecture ASAIT",
        title: "Architecture de la plateforme IA",
        description: "Déploiement de Mistral 7B sur XCP-ng avec GPU passthrough et OpenWebUI",
      },
    ],
  },
  {
    title: "PAD – GED et IA d'entreprise",
    description:
      "Gestion électronique de documents avec Alfresco, authentification centralisée Keycloak et assistant IA DeepSeek.",
    stack: ["XCP-ng", "pfSense", "NPM", "Keycloak", "Alfresco", "OpenWebUI", "DeepSeek"],
    image: "/images/pad.png",
    slug: "pad", // ← MINUSCULE
    challenge:
      "Mettre en place une GED industrielle avec workflows de validation, signatures électroniques, et un assistant IA capable d'analyser les documents, le tout avec une authentification unique.",
    solution:
      "Architecture XCP-ng avec Keycloak pour le SSO, Alfresco pour la GED, et OpenWebUI + DeepSeek pour l'assistant IA d'analyse documentaire. pfSense pour la sécurité réseau et NPM pour l'exposition.",
    results: [
      "GED opérationnelle avec workflows de validation",
      "Authentification unique (SSO) pour tous les services",
      "Assistant IA capable d'analyser et résumer des documents",
      "Conformité RGPD (100% des données sur site)",
    ],
    metrics: {
      uptime: "99.9%",
      users: "100+",
    },
    diagrams: [
      {
        src: "/images/pad-architecture.png",
        alt: "Architecture PAD",
        title: "Plateforme GED et IA",
        description: "Architecture XCP-ng avec Keycloak, Alfresco et assistant IA DeepSeek",
      },
    ],
  },
  {
    title: "Alpha – Plateforme Qualité (QMS)",
    description:
      "Système de gestion de la qualité pour conformité ISO 9001 avec traçabilité complète.",
    stack: ["Proxmox", "OpenQMS", "ZFS"],
    image: "/images/alpha.png",
    slug: "alpha", // ← MINUSCULE
    challenge:
      "Déployer un système de gestion de la qualité conforme ISO 9001 avec gestion documentaire, suivi des non-conformités, et traçabilité complète des actions correctives.",
    solution:
      "Proxmox VE avec VM dédiée OpenQMS, stockage ZFS avec snapshots quotidiens pour les retours arrière, et backup externe chiffré.",
    results: [
      "Certification ISO 9001 obtenue en 6 mois",
      "Traçabilité complète des actions correctives",
      "Adoption par tous les services",
      "Snapshots ZFS pour mises à jour sans risque",
    ],
    metrics: {
      uptime: "99.9%",
      users: "30+",
    },
    diagrams: [
      {
        src: "/images/alpha-architecture.png",
        alt: "Architecture Alpha",
        title: "Plateforme Qualité ISO 9001",
        description: "Déploiement d'OpenQMS sur Proxmox avec ZFS et snapshots",
      },
    ],
  },
];