import React from 'react';

interface Formation {
    year: string;
    title: string;
    school: string;
    acquiredSkills: string[];
    skills: string[];
}

const formationData: Formation[] = [
    {
        year: "2023 - 2026",
        title: "Réaliser",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Développer - c'est-à-dire concevoir, coder, tester, et intégrer - une solution informatique pour un client."
        ],
        skills: [
            "Codage",
            "Tests unitaires",
            "Documentation technique",
            "Java",
            "C",
            "PHP",
            "Python",
            "HTML/CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "TailWindCSS",
            "SQL",
            "Git",
        ]
    },
    {
        year: "2023 - 2026",
        title: "Optimiser",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'éxécution, précision, consommation de ressources..."
        ],
        skills: [
            "Optimisation de code",
            "Benchmarking",
            "Algorithmique",
            "Complexité",
            "Structures de données",
            "Conception orientée objet",
            "Design patterns",
        ]
    },
    {
        year: "2023 - 2026",
        title: "Administrer",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation."
        ],
        skills: [
            "Configuration système",
            "Déploiement de services",
            "Sécurité informatique",
            "Apache",
            "Ubuntu Server",
            "PHPMyAdmin",
            "TCP/IP",
            "DNS",
            "DHCP",
            "Firewall",
            "VPN",
            "SSH",
            "NAT",
            "HTTPS",
        ]
    },
    {
        year: "2023 - 2026",
        title: "Gérer",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à dispositon toutes les informations pour un bon pilotage de l'entreprise."
        ],
        skills: [
            "Base de données",
            "SQL",
            "Sécurité des données",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Regex",
        ]
    },
    {
        year: "2023 - 2026",
        title: "Conduire",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Satisfaire les besoin des utilisateurs au regarde de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles."
        ],
        skills: [
            "Méthodes agiles",
            "SCRUM",
            "Kanban",
            "Gestion de projet",
            "Planification",
            "Suivi des risques",
            "Communication client"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Collaborer",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique."
        ],
        skills: [
            "YouTrack",
            "Jira",
            "Trello",
            "GitHub",
            "GitLab",
            "Bitbucket",
            "Confluence",
            "Code Review",
        ]
    }
];

interface FormationProps {
    formation: Formation;
}

const FormationComponent: React.FC<FormationProps> = ({ formation }) => {
    return (
        <div className="forma">
            <span className="forma-year">{formation.year}</span>
            <div className="format-title-wrapper">
                <h3 className="forma-title">
                    {formation.title}
                    <br />
                </h3>
                <p>{formation.school}</p>
            </div>
            <span className="forma-title">Compétences acquises</span>
            <ul className="forma-text list">
                {formation.acquiredSkills.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul className="forma-skills">
                {formation.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

const FormationList: React.FC = () => {
    return (
        <section id="formation" className="formation container">
            {formationData.map((formation, index) => (
                <FormationComponent key={index} formation={formation} />
            ))}
        </section>
    );
};

export default FormationList;
