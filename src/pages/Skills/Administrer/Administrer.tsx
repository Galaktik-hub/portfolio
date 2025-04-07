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
        image: "public/projects/serveur-web.jpg",
        title: "Hébergement web",
        subtitle: "Mise en place d'un serveur web",
        points: [
            "Configuration serveur Apache",
            "Configuration NAT, Firewall, DNS",
            "Mise en place d'un serveur HTTPS avec Let's Encrypt",
            "Gestion d'utilisateurs pour la base de données",
        ],
        voirPlus: "https://alexis-telle.fr"
    },
    {
        image: "public/projects/serveur-web.jpg",
        title: "TP VPN & Proxy",
        subtitle: "Mise en place d'un VPN et d'un Proxy avec Netkit",
        points: [
            "Configuration du VPN avec OpenVPN",
            "Configuration du Proxy avec Squid",
            "Mise en place d'un réseau virtuel avec Netkit",
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
    "À la fin, il nous est possible de déployer des solutions sur des serveurs et des services réseaux virtualisés tout en s'assurant que ces derniers sont sécurisés.";

const color = "administrer";

const Administrer: React.FC = () => {
    return (
        <div>
            <Header />
            <Banner title={"ADMINISTRER"} subtitle={"Être le chef d'orchestre d'une architecture réseau"} backgroundImage={"../public/banners/banner-administrer.jpg"}/>
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
