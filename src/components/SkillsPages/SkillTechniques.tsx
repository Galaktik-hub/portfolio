import React from "react";

export interface Technique {
    title: string;
    points: string[];
}

interface SkillTechniquesProps {
    techniques: Technique[];
}

const SkillTechniques: React.FC<SkillTechniquesProps> = ({ techniques }) => (
    <section className="section skill-techniques">
        <h2 className="section-title">Compétences techniques mises en oeuvre</h2>
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
