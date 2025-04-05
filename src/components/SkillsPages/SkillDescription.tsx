import React from "react";

interface SkillDescriptionProps {
    color: string;
    title: string;
    description: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ title, description, color }) => (
    <section className="section skill-description">
        <h2 className={`section-title section-title-${color}`}>{title}</h2>
        <p>{description}</p>
    </section>
);

export default SkillDescription;
