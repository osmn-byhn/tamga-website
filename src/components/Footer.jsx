import React from 'react';
import { Shield } from 'lucide-react';
import './Footer.css';
import logo from "../../public/tamga.png"

const Footer = () => {
    return (
        <footer className="footer border-top">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src={logo} alt="Tamga Logo" className="logo-icon" />
                            <span className="logo-text">Tamga</span>
                        </div>
                        <p className="footer-description">
                            The zero-knowledge, local-first digital vault. Protect your sensitive data without relying on the cloud.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="https://github.com/osmn-byhn/tamga/releases">Download</a></li>
                                <li><a href="https://github.com/osmn-byhn/tamga">Documentation</a></li>
                                <li><a href="#features">Features</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Community</h4>
                            <ul>
                                <li><a href="https://github.com/osmn-byhn/tamga">GitHub Repo</a></li>
                                <li><a href="https://github.com/osmn-byhn/tamga/issues">Report an Issue</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tamga Open Source Project. Released under MIT License.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
