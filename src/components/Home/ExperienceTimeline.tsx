import React from 'react';

interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
}

const experienceData: Experience[] = [
    {
        year: "2024 - Présent",
        title: "Apprenti développeur logiciel",
        company: "Thales",
        description: "Développement d'un outil d'analyse de traces techniques pour un composant de détection et de résolution de conflits pour le contrôle du trafic aérien. Conception et implémentation d'un parser personnalisé en Python et Rust pour extraire des informations pertinentes à partir de traces techniques. Création de visualisations interactives avec Dash (Plotly) pour reconstruire les trajectoires d'aéronefs et afficher les conflits potentiels.",
        skills: ["Python", "Java", "Rust", "React", "Dash (Plotly)", "GitLab CI", "Recueil de besoins"]
    },
    {
        year: "2024 - 2025",
        title: "Professeur particulier de mathématiques",
        company: "",
        description: "Cours de mathématiques particuliers de niveau collège pour une préparation au brevet des collèges.",
        skills: ["Mathématiques", "Pédagogie", "Communication"]
    },
];

interface ExperienceItemProps {
    experience: Experience;
    isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isLast }) => {
    return (
        <div className={`experience-item ${isLast ? 'experience-item--last' : ''}`}>
            <div className="experience-timeline-dot"></div>
            <div className="experience-card">
                <span className="experience-year">{experience.year}</span>
                <div className="experience-content">
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company}</p>
                    <p className="experience-description">{experience.description}</p>
                    <ul className="experience-skills">
                        {experience.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ExperienceTimeline: React.FC = () => {
    return (
        <section id="experiences" className="experience-section container">
            <h2 className="experience-section-title">Expériences Professionnelles</h2>
            <div className="experience-timeline">
                {experienceData.map((experience, index) => (
                    <ExperienceItem 
                        key={index} 
                        experience={experience} 
                        isLast={index === experienceData.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
