import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header container">
            <h1>PORTFOLIO</h1>
            <nav>
                <ul className="header-menu">
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alexis-telle/" target={"_blank"} id="linkedin">
                            <img src="../../public/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Galaktik-hub" target={"_blank"} id="github">
                            <img src="../../public/github.svg" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="../../public/TELLE%20Alexis_CV.pdf" target={"_blank"}>CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
