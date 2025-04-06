import React from "react";

interface BannerProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundImage }) => {
    const bannerStyle: React.CSSProperties = backgroundImage
        ? {
            background: `url(${backgroundImage}) no-repeat center`,
            backgroundSize: "cover",
            position: "relative"
        }
        : {};

    return (
        <header className="competences-banner" style={bannerStyle}>
            <div className="overlay" style={{ zIndex: 1 } as React.CSSProperties} />
            <div className="banner-content" style={{ position: "relative", zIndex: 2 } as React.CSSProperties}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </header>
    );
};

export default Banner;
