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
    {
        image: "public/projects/travia.png",
        title: "Travia",
        subtitle: "Réseau de transport intergalactique",
        points: [
            "Gestion d'utilisateurs sécurisée",
            "Interface de recherche de trajets",
            "Panier d'achats et gestion de commandes",
        ],
        voirPlus: "https://github.com/Galaktik-hub/travia"
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
