import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-wrapper container">
                <p className="footer-text">
                    N'hésitez pas à entrer en contact avec moi 👋
                </p>
                <ul className="footer-contact">
                    <li>tellealexis at gmail.com</li>
                    <li>+(33)7. 68. 13. 86. 18</li>
                </ul>
                <p className="footer-copy">Site créé avec React</p>
            </div>
        </footer>
    );
};

export default Footer;
