"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400">
          Une question ? Un projet ? N'hésitez pas à me contacter.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-mono text-sm text-gray-400 mb-2">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full bg-[#0d1321] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block font-mono text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full bg-[#0d1321] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label className="block font-mono text-sm text-gray-400 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className="w-full bg-[#0d1321] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition resize-none"
            placeholder="Votre message..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full font-mono px-6 py-3 rounded-lg transition-all duration-300 ${
            status === "loading"
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25"
          } text-white font-semibold`}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            "Envoyer le message"
          )}
        </button>

        {status === "success" && (
          <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg p-4 text-center">
            ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-4 text-center">
            ❌ {errorMessage || "Erreur lors de l'envoi. Veuillez réessayer."}
          </div>
        )}
      </form>
    </section>
  );
}