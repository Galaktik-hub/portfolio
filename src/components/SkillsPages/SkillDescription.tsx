import React from "react";

interface SkillDescriptionProps {
    title: string;
    description: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ title, description }) => (
    <section className="section skill-description">
        <h2 className="section-title">{title}</h2>
        <p>{description}</p>
    </section>
);

export default SkillDescription;
