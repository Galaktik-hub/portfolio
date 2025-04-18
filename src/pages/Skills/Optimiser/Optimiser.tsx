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
        image: "public/projects/sortvisu.png",
        title: "SortVisu",
        subtitle: "Interface de visualisation d'algorithmes de tri",
        points: [
            "Algorithmes de tri implémentés en C",
            "Interface graphique réalisée avec Gtk",
            "Paramètres de tri personnalisables",
        ],
        voirPlus: "https://github.com/Galaktik-hub/sortvisu"
    },
    {
        image: "public/projects/orbit.png",
        title: "O.R.B.I.T.",
        subtitle: "Application de recherche de plus court chemin intergalactique",
        points: [
            "Algorithmes A* implémenté en C avec utilisation de tas",
            "Interface web réalisée en PHP et JavaScript",
            "Gestion d'utilisateurs avec envoi de mail",
        ],
        voirPlus: "https://orbit.alexis-telle.fr/"
    },
];

const techniques: Technique[] = [
    {
        title: "Algorithmes",
        points: [
            "Algorithmes de tri (tri rapide, tri fusion, tri par tas, etc.)",
            "Algorithme de Dijkstra, A*",
            "Diviser pour régner (dichotomie, recherche binaire)",
            "Recherche en profondeur et en largeur",
        ],
    },
    {
        title: "Structures de données",
        points: [
            "Listes chaînées",
            "Arbres binaires",
            "Graphes (représentation par matrice d'adjacence, liste d'adjacence)",
            "Tables de hachage",
            "Tas"
        ],
    },
    {
        title: "Design Patterns",
        points: [
            "Singleton",
            "Factory",
            "Visitor",
            "Chain of responsability",
            "Etc."
        ],
    }
];

const description = "Une application qui marche, c'est bien, une application qui marche vite, c'est mieux. C'est pourquoi il est important de toujours s'efforcer à optimiser son code. " +
    "Il faut alors savoir formaliser et modéliser des situations complexes à l'aide d'algorithmes efficaces et des structures de données adaptées. " +
    "Il est d'autant plus important, dans un contexte professionnel, d'améliorer les performances des programmes qu'on écrit, que ce soit pour limiter l'impact environnemental que nos solutions ont, ou bien pour limiter l'impact économique qu'elles ont. " +
    "Ainsi, cette compétence nous pousse à employer des schémas de raisonnement construits tout en justifiant les choix technologiques, afin obtenir des résultats probants.";

const color = "optimiser";

const Optimiser: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"OPTIMISER"} subtitle={"Parce que chaque microseconde compte"} backgroundImage={"../public/banners/banner-optimiser.jpg"}/>
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence optimiser ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Optimiser;
