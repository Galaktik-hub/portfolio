import React from 'react';

interface Formation {
    year: string;
    title: string;
    school: string;
    acquiredSkills: string[];
    skills: string[];
}

const formationData: Formation[] = Array(6).fill({
    year: "2023 - 2026",
    title: "BUT Informatique",
    school: "IUT de Marne-la-Vallée",
    acquiredSkills: [
        "Réalisation d'applications",
        "Conception",
        "Développement",
        "Validation",
        "Alternance",
    ],
    skills: [
        "Python",
        "Java",
        "SQL",
        "PHP",
        "HMTL",
        "CSS",
        "C",
        "Algorithmique",
        "Mathématiques discrètes",
        "Graphes & Automates",
    ],
});

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
