import React from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
    image: string;
    title: string;
    subtitle: string;
    points: string[];
}

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <section className="section">
            <h2 className="section-title">Projets</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
