import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Github, Download, Sun, Moon } from 'lucide-react';
import './Header.css';
import logo from "../../public/tamga.png"

const Header = ({ theme, toggleTheme }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <header className="header glass-panel">
            <div className="header-container container">
                <div className="logo">
                    <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src={logo} alt="Tamga Logo" className="logo-icon" />
                        <span className="logo-text">Tamga</span>
                    </Link>
                </div>

                <nav className="nav-links">
                    {isHomePage ? (
                        <>
                            <a href="#features" className="nav-link">Features</a>
                            <a href="#security" className="nav-link">Security</a>
                        </>
                    ) : (
                        <Link to="/" className="nav-link">Home</Link>
                    )}
                    <Link to="/changelog" className="nav-link">Changelog</Link>
                </nav>

                <div className="header-actions">
                    <button className="btn btn-outline theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme" style={{ padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <a href="https://github.com/osmn-byhn/tamga" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Github size={18} />
                        <span>Star on GitHub</span>
                    </a>
                    <a href="https://github.com/osmn-byhn/tamga/releases" className="btn btn-primary">
                        <Download size={18} />
                        <span>Download</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
