// ═══════════════════════════════════════════════════════════
// 📁 src/app/contact/page.tsx
// ═══════════════════════════════════════════════════════════

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-8">Contact</h1>
      <form action="/api/contact" method="POST" className="space-y-6">
        <div>
          <label className="block font-mono text-sm mb-2">Nom</label>
          <input
            type="text"
            name="name"
            className="w-full bg-[#0d1321] border border-gray-700 rounded px-4 py-2 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block font-mono text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full bg-[#0d1321] border border-gray-700 rounded px-4 py-2 focus:border-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block font-mono text-sm mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full bg-[#0d1321] border border-gray-700 rounded px-4 py-2 focus:border-blue-400 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-mono px-6 py-3 rounded transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}