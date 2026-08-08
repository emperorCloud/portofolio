"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.architecture": "Architecture Lab",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "DISPO · MARS 2026",
    "hero.title": "Ulrich Tchiem",
    "hero.subtitle": "Infrastructure & Cloud Solutions Architect",
    "hero.stats.1": "infrastructures",
    "hero.stats.2": "nœuds Proxmox",
    "hero.stats.3": "SLA",
    "hero.stats.4": "domaines d'archi.",
    "hero.punchline": "Je conçois des infrastructures critiques où chaque décision est justifiée par l'usage métier.",
    "hero.cta.architecture": "Architecture Lab",
    "hero.cta.cv": "CV",
    "hero.cta.projects": "Projets",
    
    // Footer
    "footer.brand": "Infrastructure & Cloud Solutions Architect",
    "footer.contact": "Contact",
    "footer.legal": "Mentions légales",
    "footer.copyright": "© {year} Ulrich Tchiem — Infrastructure & Cloud Solutions Architect",
    "footer.tech": "Next.js · Tailwind · Vercel",
    
    // Contact
    "contact.title": "Discutons de votre",
    "contact.title.gradient": "projet d'infrastructure",
    "contact.subtitle": "Une question sur une architecture critique, un déploiement cloud, ou besoin d'un audit ? Je suis à votre écoute.",
    "contact.name": "Nom complet",
    "contact.email": "Email",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.placeholder.name": "Ulrich Tchiem",
    "contact.placeholder.email": "ulrich@emperorcloud.io",
    "contact.placeholder.subject": "Architecture cloud, audit infrastructure, déploiement Kubernetes...",
    "contact.placeholder.message": "Décrivez votre projet, vos besoins, ou posez-moi une question technique...",
    "contact.submit": "Envoyer le message",
    "contact.submit.loading": "Envoi en cours...",
    "contact.success": "✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    "contact.error": "❌ Erreur lors de l'envoi. Veuillez réessayer.",
    "contact.cta": "Vous préférez un échange rapide ?",
    "contact.cta.link": "Connectons-nous sur LinkedIn →",
    
    // Architecture Lab
    "arch.title": "Bibliothèque de décisions architecturales",
    "arch.subtitle": "Chaque fiche répond à la question :",
    "arch.subtitle.highlight": "“Pourquoi choisir cette technologie dans ce contexte précis, plutôt qu'une autre ?”",
    "arch.stats": "technologies analysées · domaines couverts",
    "arch.cta": "Voir sur GitHub",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.architecture": "Architecture Lab",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "AVAILABLE · MARCH 2026",
    "hero.title": "Ulrich Tchiem",
    "hero.subtitle": "Infrastructure & Cloud Solutions Architect",
    "hero.stats.1": "infrastructures",
    "hero.stats.2": "Proxmox nodes",
    "hero.stats.3": "SLA",
    "hero.stats.4": "architecture domains",
    "hero.punchline": "I design critical infrastructures where every decision is justified by business needs.",
    "hero.cta.architecture": "Architecture Lab",
    "hero.cta.cv": "CV",
    "hero.cta.projects": "Projects",
    
    // Footer
    "footer.brand": "Infrastructure & Cloud Solutions Architect",
    "footer.contact": "Contact",
    "footer.legal": "Legal notice",
    "footer.copyright": "© {year} Ulrich Tchiem — Infrastructure & Cloud Solutions Architect",
    "footer.tech": "Next.js · Tailwind · Vercel",
    
    // Contact
    "contact.title": "Let's discuss your",
    "contact.title.gradient": "infrastructure project",
    "contact.subtitle": "A question about a critical architecture, cloud deployment, or need an audit? I'm here to help.",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.placeholder.name": "Ulrich Tchiem",
    "contact.placeholder.email": "ulrich@emperorcloud.io",
    "contact.placeholder.subject": "Cloud architecture, infrastructure audit, Kubernetes deployment...",
    "contact.placeholder.message": "Describe your project, your needs, or ask me a technical question...",
    "contact.submit": "Send message",
    "contact.submit.loading": "Sending...",
    "contact.success": "✅ Message sent successfully! I'll get back to you shortly.",
    "contact.error": "❌ Error sending message. Please try again.",
    "contact.cta": "Prefer a quick chat?",
    "contact.cta.link": "Let's connect on LinkedIn →",
    
    // Architecture Lab
    "arch.title": "Architectural Decision Library",
    "arch.subtitle": "Each sheet answers the question:",
    "arch.subtitle.highlight": "“Why choose this technology in this specific context, rather than another?”",
    "arch.stats": "technologies analyzed · domains covered",
    "arch.cta": "View on GitHub",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "fr" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.fr];
    if (!translation) return key;
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}