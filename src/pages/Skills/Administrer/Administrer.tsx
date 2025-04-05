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
        title: "Services réseaux",
        points: [
            "TCP/IP",
            "HTTP(S)",
            "DNS",
            "DHCP",
            "FTP",
            "SSH",
            "SMTP (IMAP, POP3)",
            "VPN",
            "Proxy",
            "NAT",
            "Firewall",
        ],
    },
    {
        title: "Déploiement et sécurisation",
        points: [
            "Apache",
            "PHPMyAdmin",
            "Ubuntu Server",
            "SSL/TLS",
            "Let's Encrypt",
            "Nom de domaine",
            "Netkit"
        ],
    },
];

const description = "Une fois la solution technique développée, il faut s'assurer d'avoir les connaissances nécessaires pour la déployer, sinon elle sera difficile d'accès pour vos clients... " +
    "Ainsi, la compétence administrer nous assure d'avoir le savoir nécessaire pour concevoir et développer des applications communicantes, tout en maintenant un niveau de sécurité élevé. " +
    "Elle nout permet d'appliquer les normes de sécurité en vigueur et les bonnes pratiques architecturales et de sécurité tout en offrant une qualité de service optimale. " +
    "Évidemment, à la fin, il nous est possible de déployer des solutions sur des serveurs et des services réseaux virtualisés tout en s'assurant que ces derniers sont sécurisés.";

const color = "administrer";

const Administrer: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"ADMINISTRER"} subtitle={"Être le chef d'orchestre d'une architecture réseau"} />
            <div className="container">
                <SkillDescription title={"Qu'est-ce que la compétence administrer ?"} description={description} color={color}/>
                <SkillTechniques techniques={techniques} color={color} />
                <ProjectsSection projects={projects} color={color}/>
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default Administrer;
