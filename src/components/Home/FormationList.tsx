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
        title: "Réaliser un développement d’application",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Partir des exigences et aller jusqu’à une application complète"
        ],
        skills: [
            "Conception fonctionnelle",
            "Codage",
            "Tests unitaires",
            "Intégration continue",
            "Documentation technique"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Optimiser des applications informatiques",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Sélectionner les algorithmes adéquats pour répondre à un problème donné"
        ],
        skills: [
            "Analyse de performance",
            "Optimisation de code",
            "Profiling",
            "Test de charge",
            "Benchmarking"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Administrer des systèmes informatiques communicants complexes",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Déployer des services dans une architecture réseau"
        ],
        skills: [
            "Configuration système",
            "Virtualisation",
            "Déploiement de services",
            "Surveillance réseau",
            "Sécurité informatique"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Gérer des données de l’information",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité"
        ],
        skills: [
            "Modélisation des données",
            "SQL avancé",
            "Sécurité des données",
            "Indexation",
            "Optimisation DB"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Conduire un projet",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Appliquer une démarche de suivi de projet en fonction des besoins métiers"
        ],
        skills: [
            "Gestion de projet",
            "Méthodes agiles",
            "Planification",
            "Suivi des risques",
            "Communication client"
        ]
    },
    {
        year: "2023 - 2026",
        title: "Travailler dans une équipe informatique",
        school: "IUT de Marne-la-Vallée",
        acquiredSkills: [
            "Situer son rôle et ses missions au sein d’une équipe informatique"
        ],
        skills: [
            "Collaboration",
            "Communication interpersonnelle",
            "Gestion de conflits",
            "Travail en mode agile",
            "Leadership collaboratif"
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
