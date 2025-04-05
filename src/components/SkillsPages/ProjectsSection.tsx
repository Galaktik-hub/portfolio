import React from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
    image: string;
    title: string;
    subtitle: string;
    points: string[];
}

interface ProjectsSectionProps {
    color: string;
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, color }) => {
    return (
        <section className="section">
            <h2 className={`section-title section-title-${color}`}>Projets</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
