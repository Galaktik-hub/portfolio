import React from "react";
import ProjectsSection from "../../../components/SkillsPages/ProjectsSection.tsx";
import SkillDescription from "../../../components/SkillsPages/SkillDescription.tsx";
import SkillTechniques, {Technique} from "../../../components/SkillsPages/SkillTechniques.tsx";
import Banner from "../../../components/SkillsPages/Banner.tsx";
import Header from "../../../components/Header.tsx";
import Footer from "../../../components/Footer.tsx";
import StickyBackArrow from "../../../components/SkillsPages/StickyBackArrow.tsx";
import {ProjectCardProps} from "../../../components/SkillsPages/ProjectCard.tsx";

const projects: ProjectCardProps[] = [
    {
        image: "public/projects/wikilinks.png",
        title: "Wikilinks",
        subtitle: "Jeu en ligne sur le thème de l'encyclopédie Wikipédia",
        points: [
            "Système de chat, salons publics et privés via WebSocket",
            "Personnalisation de l'expérience de jeu",
            "Application mobile développé en Java (Android) avec WebView",
        ],
        voirPlus: "https://github.com/Galaktik-hub/wikilinks"
    },
    {
        image: "public/projects/bills.png",
        title: "B.I.L.L.S",
        subtitle: "Portail web pour la visualisation de flux monétaires",
        points: [
            "Suivi des activités monétiques (transactions, impayés) pour les entreprises",
            "Extraction de données au format CSV et XLS",
            "Génération d'états et de rapports en PDF",
        ],
        voirPlus: "https://github.com/Galaktik-hub/B2-S3-BILLS"
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
            <Banner title={"CONDUIRE"} subtitle={"Du concept à la réalité"} backgroundImage={"../public/banners/banner-conduire.jpg"}/>
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
