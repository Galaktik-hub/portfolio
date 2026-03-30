import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../data/types";

interface ProjectsSectionProps {
    color: string;
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, color }) => {
    return (
        <section className="section">
            <h2 className={`section-title section-title-${color}`}>Projets</h2>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
