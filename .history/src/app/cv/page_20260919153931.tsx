import Link from "next/link";

export default function CVPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">Curriculum Vitae</h1>
        <p className="text-gray-400">Beaureilo NANTSA — Infrastructure & Cloud Architect</p>
      </div>

      <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <p className="text-gray-400 text-sm">Version PDF du CV</p>
          </div>
          <a
            href="/cv_Nantsa.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger le CV (PDF)
          </a>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <h2 className="font-mono text-lg font-bold text-blue-400 mb-4">Résumé</h2>
          <p className="text-gray-300 leading-relaxed">
            Infrastructure & Cloud Architect avec 7+ années d'expérience dans la conception, 
            le déploiement et l'exploitation d'infrastructures d'entreprise. Expertise en virtualisation, 
            cloud privé, stockage distribué, cybersécurité, VPN, ERP, GED et plateformes collaboratives.
          </p>

          <h2 className="font-mono text-lg font-bold text-blue-400 mt-6 mb-4">Compétences clés</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Proxmox", "XCP-ng", "VMware", "Nutanix",
              "Ceph", "ZFS", "iSCSI", "ProLab",
              "Kubernetes", "Docker",
              "pfSense", "WireGuard", "OpenVPN", "Tailscale",
              "Terraform", "Ansible",
              "AWS", "Azure", "GCP", "Oracle",
              "Odoo", "Nextcloud", "Gitea", "Alfresco", "Mattermost", "Rocket.Chat",
              "Ollama", "Flowise AI", "Mistral", "DeepSeek", "ChatGPT", "Claude",
            ].map((skill) => (
              <span key={skill} className="text-xs font-mono bg-gray-800 text-blue-400 px-3 py-1 rounded-full border border-gray-700">
                {skill}
              </span>
            ))}
          </div>

          <h2 className="font-mono text-lg font-bold text-blue-400 mt-6 mb-4">Expérience</h2>
          <div className="space-y-4">
            <div>
              <p className="font-mono text-sm text-blue-400">2022 — Présent</p>
              <p className="font-bold text-white">Ingénieur Infrastructure & Cloud — Weloobe</p>
              <p className="text-gray-400 text-sm">Cluster Proxmox 8 nœuds · Ceph · ZFS · HA</p>
            </div>
            <div>
              <p className="font-mono text-sm text-blue-400">2022 — Présent</p>
              <p className="font-bold text-white">Directeur des Systèmes d'Information — TQG</p>
              <p className="text-gray-400 text-sm">Budget IT 2M FCFA · 100% disponibilité · ERP Odoo</p>
            </div>
            <div>
              <p className="font-mono text-sm text-blue-400">2022 — Présent</p>
              <p className="font-bold text-white">Propriétaire — Freelance</p>
              <p className="text-gray-400 text-sm">Cloud Privé · Virtualisation · Cybersécurité · ERP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}