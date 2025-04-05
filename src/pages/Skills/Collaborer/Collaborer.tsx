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
        title: "Outils collaboratifs",
        points: [
            "Git (contrôle de version)",
            "GitHub/GitLab/Bitbucket (hébergement de code)",
            "YouTrack/Jira (gestion de projet)",
            "Confluence (Wiki d'équipe)",
            "Office 365 (suite bureautique)",
        ],
    },
    {
        title: "Méthodes de travail",
        points: [
            "Méthode Agile (Scrum, Kanban)",
            "Merge Request",
            "Revues de code",
            "Protection du code",
            "Gestion des conflits",
        ],
    },
];

const description = "Plus on est de dévs, plus on code ! Enfin, encore faut-il savoir comment travailler ensemble... " +
    "Les projets informatiques sont plus ambitieux les uns que les autres, il est alors nécessaire d'acquérir, de développer et d'exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique. " +
    "Situer son rôle et ses missions au sein d'une équipe, rendre compte de son activité professionnelle et s'intégrer sont des choses que tout développeur est ammené à faire au cours de sa carrière (probablement plusieurs fois). " +
    "Il faut alors être en capacité de mobiliser des compétences interpersonnelles pour travailler dans une équipé informatique tout en développant une communication efficace et collaborative.";

const color = "collaborer";

const Collaborer: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"COLLABORER"} subtitle={"Une équipe, un projet, et quelques cafés"} backgroundImage={"../public/banners/banner-collaborer.jpg"}/>
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence collaborer ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Collaborer;
