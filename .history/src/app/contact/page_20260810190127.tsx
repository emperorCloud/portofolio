"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ContactPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

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
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* En-tête */}
      <div className="text-center mb-16">
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 ${
          isDark 
            ? "bg-blue-500/10 border border-blue-500/20" 
            : "bg-blue-100 border border-blue-200"
        }`}>
          <span className={`text-xs font-mono tracking-widest ${
            isDark ? "text-blue-400" : "text-blue-700"
          }`}>
            📬 PRENDRE CONTACT
          </span>
        </div>
        <h1 className={`font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          Discutons de votre <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            projet d'infrastructure
          </span>
        </h1>
        <p className={`max-w-2xl mx-auto text-lg ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          Une question sur une architecture critique, un déploiement cloud, 
          ou besoin d'un audit ? Je suis à votre écoute.
        </p>
      </div>

      <div className={`rounded-2xl border p-8 md:p-10 transition-colors ${
        isDark 
          ? "bg-[#0d1321] border-gray-800" 
          : "bg-white border-gray-200 shadow-sm"
      }`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom + Email en grille */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={`block font-mono text-sm mb-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                Nom complet <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full rounded-lg px-4 py-3 outline-none transition border ${
                  isDark 
                    ? "bg-[#0a0e17] border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400" 
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="Beaureilo NANTSA"
              />
            </div>

            <div>
              <label className={`block font-mono text-sm mb-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                Email <span className="text-blue-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full rounded-lg px-4 py-3 outline-none transition border ${
                  isDark 
                    ? "bg-[#0a0e17] border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400" 
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="jean@gmail.com"
              />
            </div>
          </div>

          {/* Sujet */}
          <div>
            <label className={`block font-mono text-sm mb-2 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
              Sujet <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className={`w-full rounded-lg px-4 py-3 outline-none transition border ${
                isDark 
                  ? "bg-[#0a0e17] border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400" 
                  : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
              placeholder="Architecture cloud, audit infrastructure, déploiement Kubernetes..."
            />
          </div>

          {/* Message */}
          <div>
            <label className={`block font-mono text-sm mb-2 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
              Message <span className="text-blue-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className={`w-full rounded-lg px-4 py-3 outline-none transition border resize-none ${
                isDark 
                  ? "bg-[#0a0e17] border-gray-700 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400" 
                  : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              }`}
              placeholder="Décrivez votre projet, vos besoins, ou posez-moi une question technique..."
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full font-mono px-8 py-4 rounded-xl transition-all duration-300 text-white text-lg font-semibold ${
              status === "loading"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/30"
            }`}
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Envoi en cours...
              </span>
            ) : (
              "Envoyer le message →"
            )}
          </button>

          {/* Messages de statut */}
          {status === "success" && (
            <div className={`rounded-xl p-4 text-center border ${
              isDark 
                ? "bg-green-500/10 border-green-500/30 text-green-400" 
                : "bg-green-50 border-green-300 text-green-700"
            }`}>
              ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
            </div>
          )}

          {status === "error" && (
            <div className={`rounded-xl p-4 text-center border ${
              isDark 
                ? "bg-red-500/10 border-red-500/30 text-red-400" 
                : "bg-red-50 border-red-300 text-red-700"
            }`}>
              ❌ {errorMessage || "Erreur lors de l'envoi. Veuillez réessayer."}
            </div>
          )}
        </form>

        {/* Infos de contact supplémentaires */}
        <div className={`mt-8 pt-8 border-t ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">📧</div>
              <p className={`text-sm font-mono ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                emperordev@proton.me
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">📱</div>
              <p className={`text-sm font-mono ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                +237 222 806 026
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className={`text-sm font-mono ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Douala, Cameroun
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA secondaire */}
      <div className="text-center mt-12">
        <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
          Vous préférez un échange rapide ?
        </p>
        <a
          href="https://linkedin.com/in/ulrich-tchiem-a98334281"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 mt-2 font-mono text-sm transition-colors ${
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
          }`}
        >
          Connectons-nous sur LinkedIn →
        </a>
      </div>
    </section>
  );
}