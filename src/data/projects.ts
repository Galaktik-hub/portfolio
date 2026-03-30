import { Project } from "./types";

const projects: Project[] = [
    {
        slug: "text-editor",
        title: "Text Editor",
        subtitle: "Conception d'un éditeur de texte",
        year: 2025,
        image: "projects/editor.png",
        technologies: ["C", "Bibliothèques natives C"],
        summary:
            "Un éditeur de texte développé en C offrant des fonctionnalités avancées telles que " +
            "la coloration syntaxique, la recherche, l'ouverture et la sauvegarde de fichiers.",
        description:
            "Ce projet consiste en la création d'un éditeur de texte entièrement en C, en s'appuyant " +
            "sur les bibliothèques natives du langage. L'objectif était de comprendre en profondeur la manipulation " +
            "de bits, les commandes système et le fonctionnement d'un terminal. L'éditeur prend en charge l'ouverture " +
            "et la sauvegarde de fichiers, la recherche de texte et la coloration syntaxique adaptée au langage du " +
            "fichier ouvert. Ce projet m'a permis de renforcer ma maîtrise du langage C et de la programmation système.",
        keyFeatures: [
            "Développement en C : manipulation de bits, commandes système, etc.",
            "Utilisation des bibliothèques natives C",
            "Fonctionnalités : ouverture, sauvegarde, recherche, etc.",
            "Syntax highlighting selon le langage",
        ],
        link: "https://github.com/Galaktik-hub/text-editor",
    },
    {
        slug: "travia",
        title: "Travia",
        subtitle: "Réseau de transport intergalactique",
        year: 2025,
        image: "projects/travia.png",
        technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
        summary:
            "Application web de réservation de voyages intergalactiques avec gestion d'utilisateurs, " +
            "recherche de trajets et panier d'achats.",
        description:
            "Travia est une plateforme web de transport intergalactique permettant aux utilisateurs de rechercher " +
            "des trajets, de gérer leur compte de manière sécurisée et de passer des commandes via un panier d'achats. " +
            "Le projet met en œuvre une architecture serveur complète avec gestion de base de données relationnelle et " +
            "sécurisation des données utilisateurs. L'interface de recherche offre une expérience fluide pour trouver les " +
            "meilleurs itinéraires disponibles.",
        keyFeatures: [
            "Gestion d'utilisateurs sécurisée",
            "Interface de recherche de trajets",
            "Panier d'achats et gestion de commandes",
        ],
        link: "https://github.com/Galaktik-hub/travia",
    },
    {
        slug: "sortvisu",
        title: "SortVisu",
        subtitle: "Interface de visualisation d'algorithmes de tri",
        year: 2025,
        image: "projects/sortvisu.png",
        technologies: ["C", "GTK"],
        summary:
            "Application de visualisation interactive des algorithmes de tri avec interface graphique " +
            "et paramètres personnalisables.",
        description:
            "SortVisu est une application développée en C qui permet de visualiser de manière interactive le " +
            "fonctionnement de différents algorithmes de tri. L'interface graphique, réalisée avec la bibliothèque GTK, " +
            "offre la possibilité de personnaliser les paramètres de tri (taille du tableau, vitesse d'exécution, etc.) " +
            "et d'observer en temps réel les étapes de chaque algorithme. Ce projet illustre l'importance de la " +
            "compréhension algorithmique et de l'optimisation.",
        keyFeatures: [
            "Algorithmes de tri implémentés en C",
            "Interface graphique réalisée avec GTK",
            "Paramètres de tri personnalisables",
        ],
        link: "https://github.com/Galaktik-hub/sortvisu",
    },
    {
        slug: "orbit",
        title: "O.R.B.I.T.",
        subtitle: "Application de recherche de plus court chemin intergalactique",
        year: 2024,
        image: "projects/orbit.png",
        technologies: ["C", "PHP", "JavaScript", "HTML/CSS"],
        summary:
            "Application web de calcul du plus court chemin intergalactique utilisant l'algorithme A* " +
            "avec une interface web interactive.",
        description:
            "O.R.B.I.T. (Optimized Route-finding for Binary Interstellar Travel) est une application web permettant " +
            "de calculer le plus court chemin entre des systèmes stellaires. Le cœur algorithmique repose sur " +
            "l'implémentation de l'algorithme A* en C avec utilisation de structures de tas pour optimiser les " +
            "performances. L'interface web, réalisée en PHP et JavaScript, permet une visualisation interactive des " +
            "résultats et inclut un système complet de gestion d'utilisateurs avec envoi de mails.",
        keyFeatures: [
            "Algorithme A* implémenté en C avec utilisation de tas",
            "Interface web réalisée en PHP et JavaScript",
            "Gestion d'utilisateurs avec envoi de mail",
        ],
        link: "https://orbit.alexis-telle.fr/",
    },
    {
        slug: "hebergement-web",
        title: "Hébergement web",
        subtitle: "Mise en place d'un serveur web",
        year: 2024,
        image: "projects/serveur-web.jpg",
        technologies: ["Apache", "Linux", "Let's Encrypt", "DNS", "MySQL"],
        summary:
            "Configuration complète d'un serveur web incluant Apache, certificats HTTPS, " +
            "gestion DNS et sécurisation réseau.",
        description:
            "Ce projet porte sur la mise en place complète d'un serveur web de production. Il couvre la " +
            "configuration du serveur Apache, la mise en place du NAT et du firewall, la configuration DNS, " +
            "ainsi que la sécurisation HTTPS via Let's Encrypt. La gestion des utilisateurs pour la base de " +
            "données a également été mise en place. Ce projet illustre les compétences en administration système " +
            "et en déploiement de services réseau sécurisés.",
        keyFeatures: [
            "Configuration serveur Apache",
            "Configuration NAT, Firewall, DNS",
            "Mise en place d'un serveur HTTPS avec Let's Encrypt",
            "Gestion d'utilisateurs pour la base de données",
        ],
        link: "https://alexis-telle.fr",
    },
    {
        slug: "wikilinks",
        title: "Wikilinks",
        subtitle: "Jeu compétitif multijoueur de navigation Wikipédia en temps réel",
        year: 2025,
        image: "projects/wikilinks.png",
        technologies: [
            "React", "TypeScript", "Vite", "Mantine", "Tailwind CSS",
            "Node.js", "Express", "Socket.io", "MongoDB",
            "C", "Docker", "Redis", "Java", "Android",
        ],
        summary:
            "Jeu multijoueur compétitif en temps réel où les joueurs naviguent entre des articles Wikipédia " +
            "via les liens hypertextes pour atteindre un article cible le plus rapidement possible. Inclut des " +
            "artefacts stratégiques, un solveur BFS en C et des challenges quotidiens.",
        description:
            "Wikilinks est un jeu multijoueur compétitif développé dans le cadre d'une SAE (semestre 4, ~250+ heures, " +
            "équipe de 4). Les joueurs s'affrontent en temps réel en naviguant d'article en article sur Wikipédia pour " +
            "atteindre un article cible. Le frontend offre une expérience fluide et animée grâce à React 18, Mantine et " +
            "Framer Motion, tandis que le backend gère le trafic temps réel intensif via WebSocket (Socket.io). " +
            "Un défi majeur était la sérialisation et l'optimisation du graphe Wikipédia, nécessitant un solveur BFS " +
            "implémenté en C pour respecter les contraintes de mémoire et de rapidité. L'architecture a été migrée vers " +
            "une stack cloud-ready avec Docker et Redis (Pub/Sub pour les répliques WebSocket, persistance AOF) assurant " +
            "la synchronisation des sessions et le passage à l'échelle horizontal.",
        keyFeatures: [
            "Sessions multijoueur compétitives avec chat en temps réel et synchronisation des états de jeu",
            "8 artefacts stratégiques uniques (GPS, Téléporteur, Mine, Escargot, etc.) pour perturber les adversaires",
            "Solveur de plus court chemin BFS implémenté en C pour le graphe Wikipédia",
            "Architecture cloud-native conteneurisée avec scaling horizontal via Redis",
            "Challenges quotidiens avec classements mondiaux",
            "Application mobile Android native en Java avec WebView, géolocalisation et notifications push",
            "Pipeline CI/CD automatisé avec GitLab et déploiement Docker",
        ],
        link: "https://github.com/Galaktik-hub/wikilinks",
    },
    {
        slug: "bills",
        title: "B.I.L.L.S",
        subtitle: "Portail web pour la visualisation de flux monétaires",
        year: 2025,
        image: "projects/bills.png",
        technologies: ["PHP", "JavaScript", "HTML/CSS", "PDF"],
        summary:
            "Portail web de suivi des activités monétiques permettant l'extraction de données " +
            "et la génération de rapports PDF.",
        description:
            "B.I.L.L.S est un portail web conçu pour les entreprises afin de visualiser et suivre leurs flux " +
            "monétaires. L'application permet le suivi des activités monétiques (transactions, impayés), " +
            "l'extraction de données dans plusieurs formats (CSV, XLS) et la génération d'états et de rapports " +
            "détaillés en PDF. Ce projet met en avant les compétences en développement web back-end et en " +
            "traitement de données financières.",
        keyFeatures: [
            "Suivi des activités monétiques (transactions, impayés) pour les entreprises",
            "Extraction de données au format CSV et XLS",
            "Génération d'états et de rapports en PDF",
        ],
        link: "https://github.com/Galaktik-hub/B2-S3-BILLS",
    },
    {
        slug: "traintran",
        title: "TrainTran",
        subtitle: "Plateforme de réservation de train",
        year: 2025,
        image: "projects/train-tran.png",
        technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
        summary:
            "Plateforme de réservation de trains utilisant les données de la SNCF " +
            "avec une base de données NoSQL.",
        description:
            "TrainTran est une plateforme web de réservation de billets de train qui exploite les jeux de données " +
            "de la SNCF. L'interface utilisateur est développée avec React et Tailwind CSS pour offrir une expérience " +
            "moderne et réactive. La gestion des données repose sur une base de données NoSQL MongoDB, permettant " +
            "une grande flexibilité dans le stockage et l'interrogation des informations de voyages.",
        keyFeatures: [
            "Interface utilisateur avec React & Tailwind CSS",
            "Jeu de données de la SNCF",
            "Gestion d'une base de données NoSQL avec MongoDB",
        ],
        link: "https://github.com/KirushieldDev/Train-tran",
    },
    {
        slug: "ats",
        title: "ATS - Analyse de CV par IA",
        subtitle: "Système de suivi de candidatures avec analyse automatisée des CV par intelligence artificielle",
        year: 2026,
        image: "projects/ats.png",
        technologies: [
            "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
            "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic",
            "Mistral AI", "Tesseract", "Docker", "GitLab CI",
        ],
        summary:
            "Plateforme ATS permettant aux recruteurs d'analyser automatiquement des lots de CV grâce à " +
            "l'intelligence artificielle, avec scoring IA, OCR multi-moteurs, messagerie email intégrée et " +
            "filtrage géographique des candidats.",
        description:
            "Développement d'un système de suivi de candidatures (ATS) dans le cadre de la SAE du BUT 3 " +
            "Informatique, réalisé en équipe de 6 développeurs sur 8 mois (~200+ heures de développement). " +
            "Architecture full-stack avec un frontend Next.js 16 (React 19, TypeScript, TailwindCSS 4, shadcn/ui) " +
            "et un backend FastAPI (Python 3.12) communiquant via une API REST. Extraction du texte des CV par OCR " +
            "après l'évaluation comparative de 6 moteurs différents ayant conduit à la sélection de Tesseract et " +
            "Mistral OCR. Analyse et scoring des candidatures par l'API Mistral AI avec vérification grammaticale " +
            "via LanguageTool. Gestion complète des candidats avec système de favoris, notes personnelles, statuts " +
            "de suivi et filtrage par distance géographique. Module de conversations email (SMTP/IMAP) pour la " +
            "communication directe avec les candidats. Interface en split-view SPA, authentification JWT avec " +
            "gestion des rôles et panel d'administration. Pipeline CI/CD GitLab avec conteneurisation Docker " +
            "multi-stage et déploiement automatisé.",
        keyFeatures: [
            "Scoring automatique des candidatures par lots via l'API Mistral AI",
            "OCR multi-moteurs : extraction de texte via Tesseract et Mistral OCR, sélectionnés parmi 6 moteurs testés",
            "Messagerie candidats intégrée via SMTP/IMAP avec templates personnalisables et export d'historique",
            "Filtrage géographique des candidats par distance à l'offre d'emploi",
            "Interface split-view SPA pour consultation des offres et candidatures",
            "Authentification JWT avec gestion des rôles et panel d'administration",
            "~30 endpoints REST, ~150 tests unitaires, 10 000+ lignes de code",
        ],
    },
    {
        slug: "e-learning",
        title: "Plateforme E-Learning",
        subtitle: "Plateforme de formation en ligne avec chapitres multiformat et module VR 360°",
        year: 2026,
        image: "projects/e-learning.webp",
        technologies: [
            "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui",
            "Node.js", "PostgreSQL", "Prisma", "NextAuth v5", "Docker", "GitLab CI",
        ],
        summary:
            "Plateforme de formation en ligne complète avec gestion de formations hiérarchiques, " +
            "chapitres multiformat (vidéo, texte, quiz, VR 360°), suivi de progression séquentielle " +
            "et documentation API interactive.",
        description:
            "Développement d'une plateforme e-learning dans le cadre de la SAE du BUT 3 Informatique, " +
            "réalisé en équipe de 6 développeurs sur 8 mois. L'application permet à une entreprise de proposer " +
            "des formations en ligne à ses collaborateurs, avec un système de progression séquentielle par chapitres. " +
            "Architecture full-stack avec Next.js 16 (React 19, TypeScript, TailwindCSS 4, shadcn/ui) et une API " +
            "REST versionnée. Quatre types de chapitres : vidéo, texte enrichi (éditeur WYSIWYG), quiz interactifs " +
            "(QCM et vrai/faux avec tentatives, scoring et seuil de réussite configurable) et module VR 360° via " +
            "A-Frame pour des expériences immersives dans le navigateur. Gestion hiérarchique Formation → Cours → " +
            "Chapitre avec réordonnement drag & drop, système de publication/dépublication et upload de fichiers. " +
            "Authentification NextAuth v5 (JWT) avec rôles collaborateur et administrateur. Tableau de bord " +
            "analytique pour les administrateurs. Documentation API interactive via Scalar (OpenAPI 3.1). " +
            "Base de données PostgreSQL avec Prisma 7 ORM et pipeline CI/CD GitLab avec Docker.",
        keyFeatures: [
            "Chapitres multiformat : vidéo, texte enrichi, quiz interactifs et modules VR 360° via A-Frame",
            "Gestion hiérarchique Formation → Cours → Chapitre avec drag & drop et gestion des médias",
            "Contrôle d'accès par rôles via NextAuth v5 (collaborateur et administrateur)",
            "Documentation API interactive Scalar en OpenAPI 3.1",
            "Suivi de progression séquentielle avec scoring et seuils de réussite configurables",
            "Tableau de bord analytique pour les administrateurs",
            "10 600+ lignes de code, 30+ endpoints REST, 10 modèles de données",
        ],
    },
    {
        slug: "memphis-unesco",
        title: "Memphis & sa Nécropole",
        subtitle: "Site web multilingue de médiation culturelle en partenariat avec l'UNESCO",
        year: 2024,
        image: "projects/memphis-unesco.webp",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"],
        summary:
            "Site web trilingue de médiation culturelle sur le patrimoine mondial de Memphis et sa nécropole " +
            "en Égypte, avec carte interactive, panel d'administration et articles dynamiques multilingues.",
        description:
            "Projet de médiation culturelle numérique réalisé en équipe de 5 étudiants dans le cadre du BUT 1 " +
            "Informatique, en partenariat avec l'UNESCO. Le site met en valeur le patrimoine mondial de Memphis " +
            "et sa nécropole en Égypte, à travers des pages dédiées à l'histoire, l'architecture, les activités " +
            "touristiques, une carte interactive Google Maps et des informations pratiques pour organiser un voyage. " +
            "Le projet a été livré en deux phases : un site statique en HTML/CSS/JavaScript (janvier 2024), puis " +
            "un site dynamique avec PHP et PostgreSQL (juin 2024). La version finale intègre un panel d'administration " +
            "avec authentification, un système d'articles multilingues stockés en base de données, et une traduction " +
            "complète en français, anglais et chinois.",
        keyFeatures: [
            "Site trilingue : navigation en français, anglais et chinois avec changement dynamique",
            "Carte interactive Google Maps localisant les sites historiques et points d'intérêt",
            "Panel administrateur sécurisé pour la gestion des articles par langue",
            "Articles dynamiques stockés en base de données avec gestion multilingue et requêtes préparées",
            "10+ pages, 225 commits, livraison en deux phases (statique puis dynamique)",
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
    return slugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as Project[];
}
