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
        title: "Développement",
        points: [
            "C/C++",
            "Java (Design Patterns, POO)",
            "Python",
            "JavaScript/TypeScript (Développement web)",
            "HTML/CSS (Structuration et mise en forme)",
            "React (Développement web avancée)",
            "Android (Java)",
            "PHP (BackEnd web)",
        ],
    },
    {
        title: "Test et validation",
        points: [
            "Tests unitaires (JUnit)",
            "Cahier de tests",
            "Documentation technique & utilisateur",
            "CI/CD",
        ],
    },
    {
        title: "Outils & environnements",
        points: [
            "Suite JetBrains (IntelliJ, PyCharm, WebStorm, AndroidStudio, etc.)",
            "Git (contrôle de version)",
            "GitHub, GitLab, Bitbucket (hébergement de code)",
        ],
    },
];

const description = "La compétence réaliser peut s'avérer être la plus technique de toutes. " +
    "Cette compétence consiste à élaborer et implémenter des spécifications fonctionnelles et non fonctionnelles à partir des exigences du client. " +
    "Il faut ainsi s'assurer de respecter les besoins décrits par le client tout en appliquant des principes algorithmiques, et surtout de veiller à la qualité du code et à sa documentation. " +
    "Développer signifie aussi appliquer des principes d'accessibilité et d'ergonomie pour que les applications produites soient accessibles au plus grand nombre. " +
    "Enfin, il est important de s'assurer de la qualité du code produit, et cela passe par la mise en place de divers tests. " +
    "Grâce à cette compétence, notre capacité à réaliser des applications, les faire évoluer et les maintenir en conditions opérationnelles est mise à l'épreuve et nous fait évoluer de jour en jour.";

const color = "realiser";

const Realiser: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"RÉALISER"} subtitle={"Concevoir, tester, coder, tester et intégrer"} />
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence réaliser ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Realiser;
