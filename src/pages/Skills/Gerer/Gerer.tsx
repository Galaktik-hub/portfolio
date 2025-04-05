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
        title: "Base de données",
        points: [
            "SQL (MySQL, PostgreSQL)",
            "NoSQL (MongoDB)",
            "Indexation et optimisation des requêtes",
            "Sécurité des données (Hachage)",
        ],
    },
    {
        title: "Respect des réglementations",
        points: [
            "RGPD",
            "Loi Informatique et Libertés",
            "Consentement utilisateur",
            "Qualité et intégrité des données"
        ],
    },
];

const description = "Plus les années passent, plus l'informatique devient omniprésente dans notre quotidien. Il est donc crucial de savoir comment traiter les pétaoctets de données qui circulent en ligne. " +
    "À travers la compétence \"Gérer\", nous apprenons à concevoir, gérer, administrer et exploiter les données et à les mettre à disposition des utilisateurs. " +
    "Il est alors important de savoir comment optimiser une base de données, afin de la faire interagir avec une application, tout en prêtant une attention particulière à la sécurité des données utilisateurs. " +
    "Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles est alors un enjeu majeur de cette compétence, il faut se conformer aux diverses lois en vigueur (RGPD). " +
    "Évidemment, la finalité de cette compétence est de savoir comment manipuler des données hétérogènes afin de les rendre exploitable et de les restituer à travers la programmation et la visualisation.";

const color = "gerer";

const Gerer: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"GÉRER"} subtitle={"L'architecte de vos données"} backgroundImage={"../public/banners/banner-gerer.jpg"}/>
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence gérer ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Gerer;
