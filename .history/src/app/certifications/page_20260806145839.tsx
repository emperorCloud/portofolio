// src/app/certifications/page.tsx
export default function CertificationsPage() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2025",
      icon: "/icons/aws.svg",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2025",
      icon: "/icons/kubernetes.svg",
    },
    // Ajoute tes vraies certifs
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-12">Certifications</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-[#0d1321] border border-gray-800 rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              {/* Icone */}
              <span className="text-2xl">🏆</span>
            </div>
            <div>
              <h3 className="font-mono font-bold">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}