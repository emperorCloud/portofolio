// ═══════════════════════════════════════════════════════════
// 📁 src/components/skillMatrix.tsx
// ═══════════════════════════════════════════════════════════

const domains = [
  {
    title: "Datacenter & Infrastructure physique",
    items: ["Tier I à IV", "Alimentation redondante", "Refroidissement"],
  },
  {
    title: "Virtualisation",
    items: ["Proxmox VE", "XCP-ng", "VMware vSphere", "Hyper-V"],
  },
  {
    title: "Stockage",
    items: ["Ceph", "ZFS", "iSCSI", "MinIO", "NFS"],
  },
  {
    title: "Réseau",
    items: ["VLAN", "BGP/OSPF", "SD-WAN", "WireGuard", "OpenVPN", "Tailscale", "Headscale", "Spine-Leaf"],
  },
  {
    title: "Sécurité",
    items: ["pfSense", "IDS/IPS", "Zero Trust", "SIEM", "PKI"],
  },
  {
    title: "Cloud & Kubernetes",
    items: ["AWS", "Azure", "GCP", "Oracle", "K8s", "K3s", "Helm", "ArgoCD"],
  },
  {
    title: "Automatisation",
    items: ["Terraform", "Ansible", "CloudInit", "Docker"],
  },
  {
    title: "IA/ML",
    items: ["Ollama", "RAG", "Qdrant", "LangChain"],
  },
];

export default function SkillMatrix() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {domains.map((domain) => (
        <div
          key={domain.title}
          className="bg-[#0d1321] border border-gray-800 rounded-lg p-6"
        >
          <h3 className="font-mono text-lg font-bold text-blue-400 mb-3">
            {domain.title}
          </h3>
          <ul className="space-y-1">
            {domain.items.map((item) => (
              <li key={item} className="text-gray-400 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}