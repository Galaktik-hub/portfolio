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
        title: "Technique 1",
        points: [
            "Point technique 1",
            "Point technique 2",
            "Point technique 3",
        ],
    },
    {
        title: "Technique 2",
        points: [
            "Point technique A",
            "Point technique B",
            "Point technique C",
        ],
    },
];

const description = "Partir des exigences fonctionnelles et techniques pour concevoir une solution technique. Réaliser des tests unitaires, d'intégration et de validation. Développer la solution technique en respectant les normes de codage et les bonnes pratiques. Intégrer la solution dans l'environnement de production.";

const Administrer: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"OPTIMISER"} subtitle={"Concevoir, tester, coder, tester et intégrer"} />
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence optimiser ?"} description={description} />
                <SkillTechniques techniques={techniques} />
                <ProjectsSection projects={projects} />
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Administrer;
