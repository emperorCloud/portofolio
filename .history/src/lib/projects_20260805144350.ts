export const projects = [
  {
    title: "Weloobe – Plateforme SaaS multi-tenant",
    description:
      "Architecture cloud-native avec isolation stricte des clients, haute disponibilité et scalabilité horizontale.",
    stack: ["Kubernetes", "Ceph", "Keycloak", "HAProxy", "PostgreSQL"],
    image: "/images/weloobe.png",
    slug: "weloobe",
  },
  {
    title: "CPF Mbouo – Infrastructure de formation",
    description:
      "Création complète d'un SI sur site pour 200 postes avec contraintes électriques et budget serré.",
    stack: ["Proxmox", "ZFS", "pfSense", "Nextcloud", "Zabbix"],
    image: "/images/cpf-mbouo.png",
    slug: "cpf-mbouo",
  },
  {
    title: "Hotel Stenila – SI hôtelier complet",
    description:
      "Gestion hôtelière 24/7 avec segmentation réseau stricte et conformité PCI DSS.",
    stack: ["Proxmox", "Odoo", "FreeIPA", "VLAN", "pfSense"],
    image: "/images/hotel-stenila.png",
    slug: "hotel-stenila",
  },
  {
    title: "ASAIT – Plateforme IA d'entreprise",
    description:
      "Déploiement de LLM locaux (Mistral, DeepSeek) avec RAG sur documents internes.",
    stack: ["Ollama", "OpenWebUI", "Qdrant", "Dify", "Mistral"],
    image: "/images/asait.png",
    slug: "asait",
  },
];