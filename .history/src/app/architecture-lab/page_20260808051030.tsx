import Link from "next/link";

const domains = [
  {
    id: "01",
    title: "Datacenter",
    description: "Tiers I à IV, conception de salles serveurs, alimentation, refroidissement",
    count: 4,
    icon: "🏛️",
  },
  {
    id: "02",
    title: "Virtualisation",
    description: "Proxmox, XCP-ng, VMware, Nutanix, OpenStack, Hyper-V, KVM",
    count: 7,
    icon: "🖥️",
  },
  {
    id: "03",
    title: "Stockage",
    description: "Ceph, ZFS, iSCSI, Fibre Channel, NFS, SMB, MinIO",
    count: 7,
    icon: "💾",
  },
  {
    id: "04",
    title: "Réseau",
    description: "VLAN, BGP, OSPF, SD-WAN, WireGuard, EVPN-VXLAN, Spine-Leaf",
    count: 12,
    icon: "🌐",
  },
  {
    id: "05",
    title: "Sécurité",
    description: "pfSense, IDS/IPS, Zero Trust, SIEM, SOAR, PKI",
    count: 6,
    icon: "🔒",
  },
  {
    id: "06",
    title: "Cloud",
    description: "AWS, Azure, GCP, Cloud privé, Hybride, Multi-cloud",
    count: 6,
    icon: "☁️",
  },
  {
    id: "07",
    title: "Applications Entreprise",
    description: "ERP, CRM, GED, BPM, ITSM, RH, Ticketing",
    count: 15,
    icon: "📊",
  },
  {
    id: "08",
    title: "Haute Disponibilité",
    description: "Clustering, Load Balancing, Failover, HAProxy, Keepalived",
    count: 5,
    icon: "⚡",
  },
  {
    id: "09",
    title: "Reprise d'Activité",
    description: "Backup, Réplication, PRA/PCA, Immutabilité",
    count: 4,
    icon: "🔄",
  },
  {
    id: "10",
    title: "Supervision",
    description: "Prometheus, Grafana, Zabbix, Loki, Wazuh",
    count: 6,
    icon: "📈",
  },
  {
    id: "11",
    title: "Kubernetes",
    description: "K8s, K3s, Helm, ArgoCD, Rancher, Longhorn",
    count: 6,
    icon: "⎈",
  },
  {
    id: "12",
    title: "Automatisation",
    description: "Terraform, Ansible, Docker, CloudInit, GitOps",
    count: 6,
    icon: "🤖",
  },
  {
    id: "13",
    title: "Intelligence Artificielle",
    description: "Ollama, RAG, Qdrant, Mistral, DeepSeek, LangChain",
    count: 9,
    icon: "🧠",
  },
  {
    id: "99",
    title: "Projets Réels",
    description: "Weloobe, CPF Mbouo, Hotel Stenila, ASAIT, TQG, GED",
    count: 6,
    icon: "🚀",
  },
];

export default function ArchitectureLab() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* En-tête */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
          <span className="text-blue-400 text-sm font-mono">📐 ARCHITECTURE LAB</span>
        </div>
        <h1 className="font-mono text-3xl md:text-5xl font-bold mb-4">
          Bibliothèque de décisions architecturales
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Chaque fiche répond à la question :<br />
          <span className="text-blue-400 font-mono">
            “Pourquoi choisir cette technologie dans ce contexte précis, plutôt qu'une autre ?”
          </span>
        </p>
        <p className="text-gray-500 text-sm mt-4">
          {domains.reduce((acc, d) => acc + d.count, 0)}+ technologies analysées · 15 domaines couverts
        </p>
      </div>

      {/* Grille des domaines */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <Link
            key={domain.id}
            href={`/architecture-lab/${domain.id}${domain.title}`}
            className="group relative bg-[#0d1321] border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
          >
            {/* Badge du domaine */}
            <div className="absolute top-4 right-4 text-xs font-mono text-gray-600">
              {domain.id}
            </div>

            {/* Icône */}
            <div className="text-4xl mb-4">{domain.icon}</div>

            {/* Titre */}
            <h3 className="font-mono text-xl font-bold text-white group-hover:text-blue-400 transition mb-2">
              {domain.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">{domain.description}</p>

            {/* Nombre de technologies */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              {domain.count} technologies documentées
            </div>

            {/* Arrow */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA GitHub */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-[#0d1321] border border-gray-800 rounded-xl p-8 max-w-2xl w-full">
          <p className="text-gray-400 mb-4">
            🔗 Toute cette documentation est disponible sur GitHub
          </p>
          <a
            href="https://github.com/emperorCloud/entreprise-architecture-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}