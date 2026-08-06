"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface Node {
  id: string;
  group: number;
  size: number;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

const techData = {
  nodes: [
    // Infrastructure
    { id: "Proxmox", group: 0, size: 20 },
    { id: "Kubernetes", group: 0, size: 25 },
    { id: "Docker", group: 0, size: 18 },
    { id: "Ceph", group: 0, size: 16 },
    { id: "ZFS", group: 0, size: 14 },
    
    // Cloud
    { id: "AWS", group: 1, size: 22 },
    { id: "Azure", group: 1, size: 18 },
    { id: "Terraform", group: 1, size: 16 },
    { id: "Ansible", group: 1, size: 16 },
    
    // Réseau
    { id: "pfSense", group: 2, size: 16 },
    { id: "HAProxy", group: 2, size: 14 },
    { id: "VLAN", group: 2, size: 12 },
    { id: "WireGuard", group: 2, size: 14 },
    
    // Sécurité
    { id: "Keycloak", group: 3, size: 16 },
    { id: "FreeIPA", group: 3, size: 14 },
    { id: "ZeroTrust", group: 3, size: 12 },
    
    // IA
    { id: "Ollama", group: 4, size: 18 },
    { id: "Mistral", group: 4, size: 16 },
    { id: "Qdrant", group: 4, size: 14 },
    { id: "RAG", group: 4, size: 12 },
    
    // Monitoring
    { id: "Zabbix", group: 5, size: 14 },
    { id: "Prometheus", group: 5, size: 16 },
    { id: "Grafana", group: 5, size: 14 },
  ],
  links: [
    { source: "Kubernetes", target: "Docker", value: 5 },
    { source: "Kubernetes", target: "Ceph", value: 4 },
    { source: "Kubernetes", target: "HAProxy", value: 3 },
    { source: "Proxmox", target: "ZFS", value: 4 },
    { source: "Proxmox", target: "Ceph", value: 3 },
    { source: "AWS", target: "Terraform", value: 5 },
    { source: "AWS", target: "Ansible", value: 4 },
    { source: "Azure", target: "Terraform", value: 4 },
    { source: "pfSense", target: "VLAN", value: 4 },
    { source: "pfSense", target: "WireGuard", value: 3 },
    { source: "Keycloak", target: "Kubernetes", value: 4 },
    { source: "FreeIPA", target: "Proxmox", value: 3 },
    { source: "Ollama", target: "Mistral", value: 5 },
    { source: "Ollama", target: "Qdrant", value: 4 },
    { source: "Ollama", target: "RAG", value: 3 },
    { source: "Zabbix", target: "Proxmox", value: 3 },
    { source: "Prometheus", target: "Kubernetes", value: 5 },
    { source: "Prometheus", target: "Grafana", value: 5 },
  ],
};

const colors = [
  "#3b82f6", // Infrastructure - Bleu
  "#8b5cf6", // Cloud - Violet
  "#06b6d4", // Réseau - Cyan
  "#ef4444", // Sécurité - Rouge
  "#22c55e", // IA - Vert
  "#f59e0b", // Monitoring - Orange
];

export default function TechNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (!svgRef.current) return;

    const width = dimensions.width;
    const height = dimensions.height;

    // Nettoyer le SVG
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "transparent");

    // Simulation de force
    const simulation = d3.forceSimulation(techData.nodes as any)
      .force("link", d3.forceLink(techData.links).id((d: any) => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Créer les liens
    const link = svg.append("g")
      .selectAll("line")
      .data(techData.links)
      .enter()
      .append("line")
      .attr("stroke", "#2d3748")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    // Créer les nœuds
    const node = svg.append("g")
      .selectAll("circle")
      .data(techData.nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => colors[d.group])
      .attr("stroke", "#1a2332")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .style("transition", "all 0.3s")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", d.size * 1.4)
          .attr("stroke", "#3b82f6");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", d.size)
          .attr("stroke", "#1a2332");
      });

    // Labels
    const label = svg.append("g")
      .selectAll("text")
      .data(techData.nodes)
      .enter()
      .append("text")
      .text((d) => d.id)
      .attr("font-family", "monospace")
      .attr("font-size", "11px")
      .attr("fill", "#94a3b8")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => d.size + 15);

    // Mise à jour de la simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      label
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    // Nettoyage
    return () => {
      simulation.stop();
    };
  }, [dimensions]);

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.min(container.clientWidth * 0.75, 600),
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#0d1321] border border-gray-800 rounded-xl p-6">
      <h3 className="font-mono text-xl font-bold text-center mb-6">
        Stack technologique
      </h3>
      <p className="text-gray-400 text-center text-sm mb-6">
        Visualisation des technologies que je maîtrise
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-gray-400">Infrastructure</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span className="text-gray-400">Cloud</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
          <span className="text-gray-400">Réseau</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="text-gray-400">Sécurité</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-gray-400">IA</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="text-gray-400">Monitoring</span>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <svg ref={svgRef} className="w-full" />
      </div>
    </div>
  );
}