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
            "Système de chat, salon publics et privés via WebSocket",
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
    {
        image: "public/projects/orbit.png",
        title: "O.R.B.I.T.",
        subtitle: "Application de recherche de plus court chemin intergalactique",
        points: [
            "Algorithmes A* implémenté en C par tas",
            "Interface web réalisé en PHP et JavaScript",
            "Gestion d'utilisateurs avec envoi de mail",
        ],
        voirPlus: "https://orbit.alexis-telle.fr/"
    },
    {
        image: "public/projects/train-tran.png",
        title: "TrainTran",
        subtitle: "Plateforme de résevation de train",
        points: [
            "Interface utilisateur avec React & TailwindCSS",
            "Jeu de données de la SNCF",
            "Gestion d'une base de données NoSQL avec MongoDB",
        ],
        voirPlus: "https://github.com/KirushieldDev/Train-tran"
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
