import { Link } from "react-router-dom";
import { Project } from "../../data/types";

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link to={`/projects/${project.slug}`} className="project-card-link">
            <div
                className="project-card"
                style={{ backgroundImage: `url(/${project.image})` }}
            >
                <div className="overlay"></div>
                <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <h4 className="project-card-subtitle">{project.subtitle}</h4>
                    <div className="project-card-tags">
                        {project.technologies.slice(0, 5).map((tech, index) => (
                            <span key={index} className="project-card-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="project-card-summary">{project.summary}</p>
                    <ul className="project-card-features">
                        {project.keyFeatures.slice(0, 4).map((feature, index) => (
                            <li key={index} className="project-card-feature">{feature}</li>
                        ))}
                    </ul>
                    <span className="project-card-cta">Voir le projet →</span>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;