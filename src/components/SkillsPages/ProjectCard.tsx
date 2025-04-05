export interface ProjectCardProps {
    image: string;
    title: string;
    subtitle: string;
    points: string[];
    voirPlus?: string;
}

function ProjectCard({ image, title, subtitle, points, voirPlus }: ProjectCardProps) {
    return (
        <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay"></div>
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <h4 className="project-card-subtitle">{subtitle}</h4>
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                {voirPlus && (
                    <a href={voirPlus}>
                        <button>Voir plus</button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;