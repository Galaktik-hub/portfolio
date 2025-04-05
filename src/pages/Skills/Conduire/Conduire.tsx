import React from "react";
import ProjectsSection, {Project} from "../../../components/SkillsPages/ProjectsSection.tsx";
import SkillDescription from "../../../components/SkillsPages/SkillDescription.tsx";
import SkillTechniques, {Technique} from "../../../components/SkillsPages/SkillTechniques.tsx";
import Banner from "../../../components/SkillsPages/Banner.tsx";
import Header from "../../../components/Header.tsx";
import Footer from "../../../components/Footer.tsx";
import StickyBackArrow from "../../../components/SkillsPages/StickyBackArrow.tsx";

const projects: Project[] = [
    {
        image: "https://via.placeholder.com/350x200",
        title: "Projet 1",
        subtitle: "Sous-titre Projet 1",
        points: [
            "Description du point 1",
            "Description du point 2",
            "Description du point 3",
        ],
    },
    {
        image: "https://via.placeholder.com/350x200",
        title: "Projet 2",
        subtitle: "Sous-titre Projet 2",
        points: [
            "Description du point A",
            "Description du point B",
            "Description du point C",
        ],
    },
];

const techniques: Technique[] = [
    {
        title: "Planification & gestion de projet",
        points: [
            "Agile (Scrum, Kanban)",
            "Cycle en V",
            "Tableau RACI",
            "Diagramme de Gantt",
            "Analyse SWOT",
        ],
    },
    {
        title: "Outils de gestion de projet",
        points: [
            "YouTrack",
            "Jira",
            "Trello",
            "GanttProject",
        ],
    },
];

const description = "Beaucoup de gens ont des idées, mais peu d'entre eux savent les mettre en œuvre. " +
    "C'est pourquoi la compétence \"Conduire\" nous apprend comment satisfaire les besoins des clients, en adoptant une démarche proactive, créative et critique. " +
    "Il est alors important de savoir comment piloter un projet informatique avec des méthodes classiques ou agiles, pour pouvoir lancer, maintenir ou faire évoluer quelconque projet informatique. " +
    "Il est alors de notre ressort d'appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs. " +
    "Et pour ce faire, il faut savoir formaliser et concrétiser les besoins du client afin de définir et mettre en œuvre une démarche de suivi de projet.";

const color = "conduire";

const Conduire: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"CONDUIRE"} subtitle={"Du concept à la réalité"} />
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence conduire ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Conduire;
