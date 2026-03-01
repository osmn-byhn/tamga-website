import React from 'react';
import { FileClock, Tag, ShieldCheck, Cpu } from 'lucide-react';
import './Changelog.css';

const releases = [
    {
        version: 'v1.0.0',
        date: 'February 2026',
        title: 'Initial Release: The Digital Seal',
        features: [
            'AES-256-GCM Military Grade Encryption Engine',
            'Local-First JSON Password Vault',
            'Desktop TOTP Authenticator capabilities',
            'Google Authenticator QR Code Migration tool',
            'Secure developer .env management module',
            'Windows, macOS, and Linux support'
        ]
    }
];

const Changelog = () => {
    return (
        <div className="changelog-page">
            <div className="container">
                <div className="changelog-header text-center animate-fade-in">
                    <div className="changelog-badge">
                        <FileClock size={16} />
                        <span>Version History</span>
                    </div>
                    <h1 className="section-title">Tamga Changelog</h1>
                    <p className="section-subtitle">
                        All the latest updates, features, and security patches for your digital vault.
                    </p>
                </div>

                <div className="changelog-timeline animate-fade-in-delayed">
                    {releases.map((release, idx) => (
                        <div className="release-item" key={idx}>
                            <div className="release-sidebar">
                                <div className="release-version">
                                    <Tag size={16} className="text-secondary" />
                                    <span>{release.version}</span>
                                </div>
                                <div className="release-date">{release.date}</div>
                            </div>

                            <div className="release-content glass-panel">
                                <h3 className="release-title">{release.title}</h3>
                                <ul className="release-features">
                                    {release.features.map((feat, fIdx) => (
                                        <li key={fIdx}>
                                            {fIdx % 2 === 0 ? <ShieldCheck size={16} className="text-green" /> : <Cpu size={16} className="text-blue" />}
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Changelog;
