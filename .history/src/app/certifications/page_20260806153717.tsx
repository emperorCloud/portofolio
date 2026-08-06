export default function CertificationsPage() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2025",
      icon: "☁️",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2025",
      icon: "⎈",
    },
    {
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      icon: "⎈",
    },
    {
      name: "Red Hat Certified Engineer (RHCE)",
      issuer: "Red Hat",
      date: "2024",
      icon: "🎩",
    },
    {
      name: "Cisco Certified Network Professional (CCNP)",
      issuer: "Cisco",
      date: "2023",
      icon: "🌐",
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "2024",
      icon: "🟦",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
          Certifications
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Des certifications qui valident mon expertise technique
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="group bg-[#0d1321] border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex items-center gap-4"
          >
            <div className="text-4xl">{cert.icon}</div>
            <div>
              <h3 className="font-mono font-bold group-hover:text-blue-400 transition">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}