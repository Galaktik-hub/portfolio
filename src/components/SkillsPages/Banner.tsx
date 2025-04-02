import React from "react";

interface BannerProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundImage }) => {
    const bannerStyle = backgroundImage
        ? { background: `url(${backgroundImage}) no-repeat center`, backgroundSize: "cover" }
        : {};

    return (
        <header className="competences-banner" style={bannerStyle}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    );
};

export default Banner;
