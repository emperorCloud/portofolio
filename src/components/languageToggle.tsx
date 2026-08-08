"use client";

import { useLanguage } from "@/contexts/languageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-xs font-mono rounded-md transition ${
          language === "fr"
            ? "bg-blue-600 text-white"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-mono rounded-md transition ${
          language === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}