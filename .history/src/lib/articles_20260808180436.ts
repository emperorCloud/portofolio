// src/lib/articles.ts

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "proxmox-xcpng-calcul-distribue",
    title: "Calcul distribué avec Proxmox et XCP-ng : pourquoi je les installe dans les entreprises grandissantes",
    excerpt: "Quand une PME camerounaise passe de 10 à 100 employés, le calcul distribué devient vital. Voici comment je déploie des clusters évolutifs avec Proxmox et XCP-ng.",
    date: "2026-07-25",
    readTime: "15 min",
    tags: ["Proxmox", "XCP-ng", "Cluster", "Calcul distribué", "Architecture", "Afrique"],
    image: "/images/blog/calcul-distribue.jpg",
    content: `
      <p>Au Cameroun, les entreprises grandissent vite. Très vite. Un jour vous avez 15 employés, le lendemain 80. Votre serveur unique qui faisait tourner Odoo, Nextcloud et le DNS en même temps commence à suffoquer. C'est là que le calcul distribué entre en jeu.</p>

      <h2>Pourquoi le calcul distribué est indispensable</h2>
      <p>Une entreprise qui grandit a besoin de :</p>
      <ul>
        <li><strong>Haute disponibilité</strong> : si le serveur tombe, 80 personnes ne travaillent plus</li>
        <li><strong>Répartition de charge</strong> : Odoo + Nextcloud + messagerie sur une seule machine = catastrophe à 10h quand tout le monde se connecte</li>
        <li><strong>Évolutivité</strong> : ajouter un nœud sans tout reconfigurer</li>
      </ul>

      <h2>Ma stack Proxmox pour le calcul distribué</h2>
      <p>Pour <strong>Weloobe</strong> et <strong>TQG</strong>, j'ai déployé des clusters Proxmox avec Ceph :</p>
      <ul>
        <li>3 nœuds minimum pour le quorum</li>
        <li>Ceph en hyperconvergé : pas de SAN externe, les disques locaux forment le stockage distribué</li>
        <li>Réseau 10 Gbps dédié au stockage (j'ai appris à mes dépens que le 1 Gbps ne suffit pas)</li>
        <li>Migration à chaud des VMs entre les nœuds : maintenance sans interruption</li>
      </ul>
      <p>Budget typique : 1 500 000 - 3 000 000 XAF pour 3 nœuds avec du matériel d'occasion.</p>

      <h2>Ma stack XCP-ng pour le calcul distribué</h2>
      <p>Pour <strong>ASAIT</strong> et <strong>PAD</strong>, j'ai choisi XCP-ng avec XOSTOR :</p>
      <ul>
        <li>GPU passthrough natif : indispensable pour l'inférence LLM</li>
        <li>XOSTOR (basé sur LINSTOR/DRBD) : réplication synchrone entre les nœuds</li>
        <li>Xen Orchestra : gestion centralisée, backups, monitoring</li>
      </ul>
      <p>Pourquoi XCP-ng plutôt que Proxmox sur ces projets ? Le GPU passthrough. Proxmox le fait aussi, mais XCP-ng (Xen) a une réputation de stabilité supérieure sur ce point précis.</p>

      <h2>MicroStack : mon expérience ratée</h2>
      <p>J'ai essayé d'installer OpenStack pour un client qui voulait un "vrai cloud privé". Problème : OpenStack demande 10+ nœuds pour être pertinent, et une équipe dédiée. J'ai testé MicroStack (version allégée) en pensant que ça passerait. Résultat :</p>
      <ul>
        <li>Installation qui a pris 3 jours au lieu de 2 heures</li>
        <li>Consommation RAM : 16 Go juste pour le contrôleur</li>
        <li>Le client a trouvé ça "trop complexe à maintenir"</li>
        <li>J'ai migré vers XCP-ng en une semaine</li>
      </ul>
      <p>Leçon apprise : OpenStack n'est pas fait pour les PME. Proxmox et XCP-ng couvrent 95% des besoins de calcul distribué pour les entreprises camerounaises.</p>

      <h2>Quand je propose du VMware ou Nutanix</h2>
      <p>Je me suis beaucoup formé sur VMware vSphere et Nutanix. Ce sont d'excellentes solutions, surtout pour les grands groupes. Mais au Cameroun, le coût des licences est prohibitif :</p>
      <ul>
        <li>VMware vSphere Essentials : ~2 000 000 XAF/an</li>
        <li>Nutanix : matériel certifié + licence, ~5 000 000 XAF minimum</li>
      </ul>
      <p>Je les propose aux clients qui en ont les moyens et qui exigent un support éditeur. Mais pour 90% de mes projets, Proxmox ou XCP-ng font parfaitement l'affaire.</p>
    `,
  },
  {
    slug: "starlink-sdwan-cameroun",
    title: "Starlink + SD-WAN au Cameroun : comment je contourne les problèmes d'IP publique et de NAT",
    excerpt: "Starlink est encore dans une zone grise au Cameroun, mais il change la donne pour les entreprises. Voici comment je l'intègre avec du SD-WAN et WireGuard.",
    date: "2026-07-10",
    readTime: "12 min",
    tags: ["Starlink", "SD-WAN", "WireGuard", "Réseau", "Cameroun", "Afrique"],
    image: "/images/blog/starlink-sdwan.jpg",
    content: `
      <p>Au Cameroun, la fibre optique progresse, mais elle reste absente dans de nombreuses zones. Les entreprises se tournent vers Starlink, même si c'est encore officieusement toléré. Le problème ? Starlink utilise du CGNAT : pas d'adresse IP publique. Impossible de faire du NAT classique pour exposer des services. Voici comment je résous ça.</p>

      <h2>Le problème : Starlink + CGNAT = pas d'IP publique</h2>
      <p>Quand vous avez une IP publique, exposer votre serveur Odoo ou Nextcloud est simple : vous ouvrez le port 443 sur le firewall, vous configurez un reverse proxy, et c'est réglé. Avec Starlink, vous êtes derrière un CGNAT (Carrier-Grade NAT). Votre "IP publique" est partagée entre plusieurs clients. Impossible d'ouvrir des ports entrants.</p>
      <p>Solutions classiques et leurs limites :</p>
      <ul>
        <li><strong>Acheter une IP publique fixe</strong> : Starlink la propose dans certains pays, mais le coût est élevé (~250 000 XAF/mois)</li>
        <li><strong>Utiliser un VPN classique</strong> : nécessite un serveur avec IP publique comme relais. Coût d'un VPS : ~30 000 XAF/mois</li>
      </ul>

      <h2>Ma solution : SD-WAN avec WireGuard et VPS relais</h2>
      <p>Voici l'architecture que je déploie pour les entreprises équipées de Starlink :</p>
      <ul>
        <li><strong>VPS chez un hébergeur (OVH, Contabo)</strong> : ~25 000 XAF/mois, avec une vraie IP publique</li>
        <li><strong>WireGuard entre le VPS et le site Starlink</strong> : tunnel permanent, sortie du CGNAT</li>
        <li><strong>pfSense sur site</strong> : firewall, routage, failover fibre/Starlink/4G</li>
        <li><strong>Reverse proxy sur le VPS</strong> : expose les services (Odoo, Nextcloud) avec SSL</li>
      </ul>

      <h2>Stack fibre + Starlink : le combo parfait</h2>
      <p>Pour les entreprises qui ont le budget, je propose une stack hybride :</p>
      <ul>
        <li><strong>Fibre optique</strong> : lien principal, IP publique (Orange, MTN, Yoomee)</li>
        <li><strong>Starlink</strong> : backup automatique en cas de coupure fibre</li>
        <li><strong>SD-WAN (pfSense)</strong> : basculement automatique, QoS par application</li>
      </ul>
      <p>Cette configuration coûte environ 150 000 XAF/mois (fibre 50 000 + Starlink 75 000 + VPS 25 000) mais garantit une disponibilité > 99.9%. Pour une entreprise qui perd 500 000 XAF par jour de panne Internet, c'est un investissement rentable.</p>

      <h2>Pourquoi le SD-WAN est parfait pour le Cameroun</h2>
      <p>Le SD-WAN n'est pas un luxe de grand groupe. Au Cameroun, c'est une nécessité :</p>
      <ul>
        <li>Les coupures fibre sont fréquentes (travaux, intempéries)</li>
        <li>La 4G est disponible presque partout, mais chère</li>
        <li>Starlink est rapide mais encore instable par moments</li>
      </ul>
      <p>Avec pfSense en mode SD-WAN, je configure 3 liens (fibre, Starlink, 4G) et le basculement est automatique. L'utilisateur ne voit rien. C'est cette résilience qui fait la différence entre une PME qui survit et une PME qui prospère.</p>

      <h2>Note sur la légalité de Starlink au Cameroun</h2>
      <p>Starlink n'a pas encore reçu d'autorisation officielle de l'ART (Agence de Régulation des Télécommunications) au Cameroun. Officiellement, son utilisation est dans une zone grise. Dans la pratique, de nombreuses entreprises l'utilisent déjà. Je recommande toujours à mes clients de vérifier leur conformité réglementaire. Cet article ne constitue pas un conseil juridique.</p>
    `,
  },
  {
    slug: "infrastructure-200-postes-budget-serre",
    title: "Comment j'ai digitalisé un centre de formation avec 200 postes pour moins de 1 500 000 XAF",
    excerpt: "Retour d'expérience sur le projet CPF Mbouo : contraintes électriques, lien radio instable, et maintenance par du personnel non technique.",
    date: "2026-06-15",
    readTime: "12 min",
    tags: ["Proxmox", "Infrastructure", "Budget", "Afrique", "Retour d'expérience"],
    image: "/images/blog/cpf-mbouo.jpg",
    content: `
      <p>Quand le directeur du CPF Mbouo m'a contacté, le cahier des charges était simple : "On a 200 étudiants, pas de budget, l'électricité coupe trois fois par jour, et Internet arrive par une antenne radio. Faites au mieux."</p>

      <h2>Le défi</h2>
      <p>Les contraintes étaient nombreuses :</p>
      <ul>
        <li><strong>Budget matériel</strong> : moins de 1 500 000 XAF pour tout (serveur, switchs, câblage, UPS)</li>
        <li><strong>Électricité</strong> : coupures quotidiennes, pas de groupe électrogène automatique</li>
        <li><strong>Internet</strong> : lien radio 10 Mbps partagé entre 200 personnes</li>
        <li><strong>Maintenance</strong> : le personnel local n'avait jamais administré un serveur Linux</li>
      </ul>

      <h2>Mes choix techniques</h2>
      <ul>
        <li><strong>Proxmox VE</strong> : gratuit, interface web compréhensible, snapshots pour les mises à jour risquées</li>
        <li><strong>pfSense</strong> : QoS pour prioriser le trafic pédagogique, proxy cache pour économiser la bande passante</li>
        <li><strong>Nextcloud</strong> : remplacer les clés USB par du partage de fichiers centralisé</li>
        <li><strong>ZFS</strong> : pas de RAID matériel coûteux, intégrité des données garantie</li>
      </ul>

      <h2>Les erreurs que j'ai faites</h2>
      <ul>
        <li>J'ai sous-estimé l'impact des coupures électriques. La première semaine, le serveur s'arrêtait brutalement 3 fois par jour. J'ai dû configurer un arrêt automatique propre via NUT (Network UPS Tools).</li>
        <li>Le lien radio était saturé par YouTube. La QoS pfSense a sauvé le projet.</li>
        <li>J'ai passé trop de temps à documenter en français technique. Un schéma plastifié accroché au mur a été plus utile que mes 20 pages de wiki.</li>
      </ul>

      <h2>Les résultats</h2>
      <ul>
        <li>Infrastructure opérationnelle en 3 semaines</li>
        <li>Coût total : 1 400 000 XAF (serveur d'occasion, switchs, câblage, UPS)</li>
        <li>Le personnel local administre le système après 2 jours de formation</li>
        <li>Plus aucune clé USB perdue ou infectée</li>
      </ul>
      <p>Ce projet m'a appris qu'une bonne architecture, c'est celle qui fonctionne avec les contraintes du terrain, pas celle qui est parfaite sur le papier.</p>
    `,
  },
  {
    slug: "llm-local-mistral-openwebui",
    title: "J'ai déployé un ChatGPT d'entreprise avec Mistral 7B et OpenWebUI : ce que j'ai appris",
    excerpt: "Comment j'ai mis en place une IA générative 100% locale pour une PME camerounaise, sans envoyer une seule donnée à OpenAI.",
    date: "2026-05-10",
    readTime: "16 min",
    tags: ["IA", "LLM", "Mistral", "Ollama", "OpenWebUI", "XCP-ng", "Afrique"],
    image: "/images/blog/llm-local.jpg",
    content: `
      <p>Le directeur d'une PME m'a appelé avec une demande précise : "Je veux que mes employés utilisent ChatGPT, mais nos documents sont confidentiels. Tu peux faire un ChatGPT qui tourne chez nous ?"</p>

      <h2>Le défi technique</h2>
      <p>Contrairement à ce qu'on lit sur Twitter, faire tourner un LLM en local n'est pas juste "docker run ollama". Les vrais défis sont :</p>
      <ul>
        <li><strong>Performance</strong> : sans GPU, Mistral 7B met 30 secondes pour répondre. Inutilisable en entreprise.</li>
        <li><strong>Interface</strong> : le terminal, c'est bien pour les devs. Pour la compta, il faut une interface propre.</li>
        <li><strong>RAG</strong> : connecter le modèle aux documents internes (PDF, Word) sans qu'il hallucine.</li>
      </ul>

      <h2>Ma stack</h2>
      <ul>
        <li><strong>XCP-ng</strong> : GPU passthrough natif, isolation forte des VMs</li>
        <li><strong>Ollama</strong> : le plus simple pour servir Mistral 7B en API REST</li>
        <li><strong>OpenWebUI</strong> : interface propre, support du RAG intégré, multi-utilisateur</li>
        <li><strong>RTX 3090 d'occasion</strong> : 400 000 XAF, le meilleur investissement du projet</li>
      </ul>

      <h2>Pourquoi Mistral et pas un autre ?</h2>
      <p>J'ai testé Llama 3, DeepSeek et Mistral 7B sur des documents en français. Mistral est sorti vainqueur :</p>
      <ul>
        <li>Meilleure compréhension du français juridique et administratif</li>
        <li>Moins d'hallucinations sur les faits</li>
        <li>Licence Apache 2.0, pas de restrictions d'usage commercial</li>
      </ul>

      <h2>Les erreurs à éviter</h2>
      <ul>
        <li><strong>Chunking mal fait</strong> : mes premiers essais de RAG étaient catastrophiques. J'ai compris que la taille des chunks et le recouvrement sont plus importants que le modèle lui-même.</li>
        <li><strong>Pas de GPU = pas de projet</strong> : ne pas essayer de faire tourner un LLM en CPU pour de la production. C'est juste frustrant.</li>
        <li><strong>Former les utilisateurs</strong> : j'ai passé 2 heures à expliquer ce qu'est un prompt. Les gens écrivaient "bonjour" et attendaient une réponse magique.</li>
      </ul>

      <h2>Les résultats après 3 mois</h2>
      <ul>
        <li>80% des employés utilisent l'assistant quotidiennement</li>
        <li>Temps de recherche documentaire divisé par 3</li>
        <li>Zéro donnée envoyée à l'extérieur</li>
        <li>Coût total : 1 000 000 XAF (GPU + serveur), aucun abonnement</li>
      </ul>
      <p>Ce projet m'a convaincu que l'IA locale n'est pas un gadget. C'est un vrai levier de productivité pour les PME, à condition de bien le faire.</p>
    `,
  },
  {
    slug: "ceph-debutant-retour-experience",
    title: "Ceph pour les débutants : ce que la documentation ne vous dit pas",
    excerpt: "Mes premiers pas avec Ceph sur Proxmox : les erreurs que j'ai faites, les ressources qui m'ont sauvé, et ce que je referais.",
    date: "2026-04-05",
    readTime: "10 min",
    tags: ["Ceph", "Proxmox", "Stockage", "Débutant", "Retour d'expérience"],
    image: "/images/blog/ceph-debutant.jpg",
    content: `
      <p>La documentation de Ceph fait 300 pages. J'ai quand même réussi à planter mon cluster trois fois la première semaine. Voici ce que j'aurais aimé savoir avant de commencer.</p>

      <h2>Erreur n°1 : Sous-estimer le réseau</h2>
      <p>J'ai déployé mon premier cluster Ceph sur un réseau 1 Gbps. Résultat : des latences de 200ms et des VMs qui freezent. La documentation dit "10 Gbps recommandé", mais en réalité c'est "10 Gbps minimum si vous voulez dormir la nuit".</p>

      <h2>Erreur n°2 : Mélanger HDD et SSD sans règles CRUSH</h2>
      <p>J'avais 2 SSD et 4 HDD. J'ai tout mis dans le même pool. Les performances étaient pires qu'un disque USB 2.0. Les règles CRUSH ne sont pas optionnelles quand on a des disques hétérogènes.</p>

      <h2>Erreur n°3 : Pas de monitoring</h2>
      <p>Un OSD est tombé en panne un vendredi soir. Je l'ai découvert le lundi matin parce qu'un utilisateur s'est plaint. Depuis, j'ai un dashboard Grafana avec alertes Telegram.</p>

      <h2>Ce qui m'a sauvé</h2>
      <ul>
        <li>Le forum Proxmox (en anglais) : des réponses en quelques heures</li>
        <li>La commande <code>ceph osd tree</code> : votre meilleure amie pour comprendre l'état du cluster</li>
        <li>Les vidéos de "The Ceph Foundation" sur YouTube : plus digestes que le wiki</li>
      </ul>

      <h2>Ce que je referais</h2>
      <ul>
        <li>Commencer avec 3 nœuds identiques (mêmes disques, même RAM)</li>
        <li>Réseau 10 Gbps DÈS LE DÉBUT, même pour un lab</li>
        <li>Monitoring avant la mise en production</li>
        <li>Ne pas avoir peur de casser un cluster de test. C'est comme ça qu'on apprend.</li>
      </ul>
    `,
  },
  {
    slug: "pfsense-firewall-entreprise",
    title: "Pourquoi j'ai remplacé tous mes routeurs par pfSense (et pourquoi vous devriez aussi)",
    excerpt: "Firewall, VPN, VLAN, IDS/IPS, portail captif Wi-Fi : comment un logiciel gratuit fait mieux qu'un routeur à 1 000 000 XAF.",
    date: "2026-03-12",
    readTime: "8 min",
    tags: ["pfSense", "Sécurité", "Réseau", "Firewall", "VPN", "Afrique"],
    image: "/images/blog/pfsense.jpg",
    content: `
      <p>J'ai découvert pfSense sur le projet TQG. Avant ça, j'utilisais des routeurs grand public ou des box opérateur. Aujourd'hui, je ne déploie plus aucune infrastructure sans pfSense. Voici pourquoi.</p>

      <h2>Ce que pfSense fait qu'un routeur classique ne fait pas</h2>
      <ul>
        <li><strong>VLANs</strong> : isoler le réseau invités, le réseau admin, et le réseau IoT en 5 minutes</li>
        <li><strong>VPN WireGuard intégré</strong> : connecter 3 sites distants sans licence, sans matériel supplémentaire</li>
        <li><strong>QoS</strong> : sur un lien radio 10 Mbps, prioriser le trafic critique change tout</li>
        <li><strong>Portail captif Wi-Fi</strong> : page de connexion personnalisable, idéal pour les hôtels et centres de formation</li>
        <li><strong>IDS/IPS avec Suricata</strong> : détection d'intrusion gratuite, signatures mises à jour quotidiennement</li>
      </ul>

      <h2>Mon setup type aujourd'hui</h2>
      <p>Sur chaque projet, pfSense est la première VM que je déploie. Configuration standard :</p>
      <ul>
        <li>WAN : lien fibre, Starlink ou radio</li>
        <li>LAN : réseau interne</li>
        <li>DMZ : services exposés (Nextcloud, Odoo)</li>
        <li>VLAN invités : Wi-Fi public isolé</li>
        <li>VPN WireGuard : accès distant et liaison inter-sites</li>
      </ul>

      <h2>Les limites que j'ai rencontrées</h2>
      <ul>
        <li>Sur du matériel très léger (2 Go RAM, 1 CPU), Suricata fait ramer le système. Désactiver l'IDS ou upgrader le matériel.</li>
        <li>La courbe d'apprentissage des règles de firewall est réelle. Mais une fois qu'on a compris le principe (bloquer tout, autoriser le nécessaire), c'est logique.</li>
      </ul>
      <p>pfSense ne m'a jamais déçu. C'est l'outil qui m'a fait passer d'administrateur système à architecte réseau.</p>
    `,
  },
  {
    slug: "devops-cloud-public-ambition",
    title: "Je fais du DevOps on-premise : pourquoi je suis prêt pour le cloud public",
    excerpt: "Mon parcours d'architecte infrastructure au Cameroun, mes compétences DevOps, et pourquoi j'attends l'opportunité de travailler sur AWS, Azure ou GCP.",
    date: "2026-02-20",
    readTime: "10 min",
    tags: ["DevOps", "Cloud", "AWS", "Azure", "GCP", "Carrière", "Afrique"],
    image: "/images/blog/devops-cloud.jpg",
    content: `
      <p>Je n'ai jamais travaillé sur un projet AWS, Azure ou GCP. Et pourtant, je sais que je suis prêt. Voici pourquoi.</p>

      <h2>Ce que je fais aujourd'hui (et que le cloud fait aussi)</h2>
      <p>Mon quotidien d'architecte infrastructure au Cameroun :</p>
      <ul>
        <li><strong>Infrastructure as Code</strong> : Terraform pour provisionner mes VMs Proxmox, Ansible pour les configurer</li>
        <li><strong>CI/CD</strong> : Gitea + Woodpecker CI pour déployer automatiquement mes applications</li>
        <li><strong>Conteneurisation</strong> : Docker pour packager, Kubernetes (K3s) pour orchestrer</li>
        <li><strong>GitOps</strong> : ArgoCD pour synchroniser mes clusters avec Git</li>
        <li><strong>Monitoring</strong> : Prometheus + Grafana + Loki, la même stack que dans le cloud</li>
        <li><strong>Haute disponibilité</strong> : clusters Proxmox et XCP-ng, load balancing avec HAProxy, failover automatique</li>
      </ul>
      <p>La différence ? Moi, je fais tout ça sur du matériel physique, dans des datacenters de fortune, avec des coupures électriques et des liens Internet instables. Le cloud, c'est la même logique, mais avec des API au lieu de câbles Ethernet.</p>

      <h2>Les services cloud que je maîtrise déjà (sans les avoir utilisés)</h2>
      <ul>
        <li><strong>EC2 (AWS) / Compute Engine (GCP)</strong> : c'est le même principe que mes VMs Proxmox, mais avec une API</li>
        <li><strong>S3 (AWS) / Cloud Storage (GCP)</strong> : j'utilise MinIO en local, l'API S3 est identique</li>
        <li><strong>EKS (AWS) / GKE (GCP)</strong> : je gère des clusters K3s, la logique Kubernetes est la même partout</li>
        <li><strong>RDS (AWS) / Cloud SQL (GCP)</strong> : j'administre PostgreSQL et MySQL depuis 5 ans</li>
        <li><strong>IAM</strong> : je configure Keycloak et FreeIPA, la gestion des identités est universelle</li>
      </ul>

      <h2>Ce que le cloud m'apporterait</h2>
      <p>Travailler sur le cloud public serait un accélérateur de carrière :</p>
      <ul>
        <li>Découvrir l'échelle : gérer 1000 VMs au lieu de 50</li>
        <li>Apprendre les services managés : ne plus administrer PostgreSQL moi-même</li>
        <li>Travailler en équipe internationale : confronter mes pratiques à d'autres architectes</li>
        <li>Obtenir des certifications : AWS Solutions Architect, Azure Administrator</li>
      </ul>

      <h2>Pourquoi je suis un bon candidat pour le cloud</h2>
      <p>Un architecte qui a fait du DevOps dans un environnement contraint (coupures électriques, liens instables, budget serré) développe des compétences qu'on n'apprend pas dans un lab AWS :</p>
      <ul>
        <li>La résilience : quand tout tombe en panne en même temps, on apprend à prioriser</li>
        <li>L'optimisation : quand le budget est serré, on apprend à faire mieux avec moins</li>
        <li>La débrouillardise : quand il n'y a pas de support éditeur, on apprend à tout comprendre en profondeur</li>
      </ul>
      <p>Je suis prêt. Il ne manque que l'opportunité.</p>
    `,
  },
];