import React from "react";

export interface Technique {
    title: string;
    points: string[];
}

interface SkillTechniquesProps {
    color: string;
    techniques: Technique[];
}

const SkillTechniques: React.FC<SkillTechniquesProps> = ({ techniques, color }) => (
    <section className="section skill-techniques">
        <h2 className={`section-title section-title-${color}`}>Compétences techniques mises en œuvre</h2>
        <div className="techniques-container">
            {techniques.map((technique, index) => (
                <div className="technique-item" key={index}>
                    <h3>{technique.title}</h3>
                    <ul>
                        {technique.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default SkillTechniques;
