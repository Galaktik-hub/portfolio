import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../../data/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyBackArrow from "../../components/SkillsPages/StickyBackArrow";

const ProjectDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <div>
                <Header />
                <div className="container project-not-found">
                    <h1>Projet introuvable</h1>
                    <p>Le projet demandé n'existe pas.</p>
                    <Link to="/projects" className="btn-back-projects">
                        ← Retour aux projets
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div
                className="project-hero"
                style={{ backgroundImage: `url(/${project.image})` }}
            >
                <div className="overlay"></div>
                <div className="project-hero-content">
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    <span className="project-hero-year">{project.year}</span>
                </div>
            </div>

            <div className="container project-detail">
                <div className="project-detail-technologies">
                    <h3>Technologies</h3>
                    <div className="project-detail-tags">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="project-detail-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="project-detail-summary">
                    <h3>Résumé</h3>
                    <p>{project.summary}</p>
                </div>

                <div className="project-detail-features">
                    <h3>Fonctionnalités clés</h3>
                    <ul>
                        {project.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-detail-description">
                    <h3>Description détaillée</h3>
                    <p>{project.description}</p>
                </div>

                <div className="project-detail-actions">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project-link"
                        >
                            Voir le projet en ligne ↗
                        </a>
                    )}
                    <Link to="/projects" className="btn-back-projects">
                        ← Tous les projets
                    </Link>
                </div>
            </div>

            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
