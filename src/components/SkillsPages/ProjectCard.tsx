interface ProjectCardProps {
    image: string;
    title: string;
    subtitle: string;
    points: string[];
}

function ProjectCard ({ image, title, subtitle, points }: ProjectCardProps) {
    return (
        <div className="project-card">
            <img src={image} alt={title}/>
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <h4 className="project-card-subtitle">{subtitle}</h4>
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <button>Voir plus</button>
            </div>
        </div>
    );
}

export default ProjectCard;