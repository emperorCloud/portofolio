"use client";

import { useEffect, useState } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: string;
}

function MetricCard({ value, label, change, trend = "up", icon }: MetricCardProps) {
  return (
    <div className="group relative bg-[#0d1321] border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
          {value}
        </div>
        <div className="text-gray-400 text-sm mb-2">{label}</div>
        {change && (
          <div className={`text-xs font-mono ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {trend === 'up' ? '↑' : '↓'} {change}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MetricsDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    {
      value: "50+",
      label: "Infrastructures déployées",
      change: "+12 en 2026",
      trend: "up" as const,
      icon: "🏗️",
    },
    {
      value: "99.99%",
      label: "Disponibilité garantie",
      change: "SLA contractuel",
      trend: "up" as const,
      icon: "📊",
    },
    {
      value: "40%",
      label: "Réduction des coûts",
      change: "vs solutions on-premise",
      trend: "up" as const,
      icon: "💰",
    },
    {
      value: "7+",
      label: "Années d'expérience",
      change: "Architecture & Cloud",
      trend: "up" as const,
      icon: "🎯",
    },
    {
      value: "200+",
      label: "Utilisateurs actifs",
      change: "Sur mes plateformes",
      trend: "up" as const,
      icon: "👥",
    },
    {
      value: "5min",
      label: "Temps de récupération",
      change: "RTO/RPO optimisé",
      trend: "up" as const,
      icon: "⚡",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-mono text-3xl font-bold mb-4">
          Impact mesurable
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Des résultats concrets qui parlent d'eux-mêmes
        </p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <MetricCard {...metric} />
          </div>
        ))}
      </div>
    </section>
  );
}