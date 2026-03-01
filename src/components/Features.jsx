import React from 'react';
import { KeyRound, Smartphone, FileCode2, ScanLine } from 'lucide-react';
import './Features.css';

const features = [
    {
        title: 'Password Management',
        description: 'Create strong, complex passwords and store them securely in an encrypted vault organized by platform and username.',
        icon: <KeyRound size={24} />,
        color: '#00ff88'
    },
    {
        title: 'Desktop 2FA (TOTP)',
        description: 'A complete alternative to mobile apps. Generate two-factor authentication codes directly on your desktop securely.',
        icon: <Smartphone size={24} />,
        color: '#00b8ff'
    },
    {
        title: 'Authy/Google Auth Migration',
        description: 'Directly decode and import all your accounts from Google Authenticator export QR codes in one single scan.',
        icon: <ScanLine size={24} />,
        color: '#9d00ff'
    },
    {
        title: 'Developer .env Security',
        description: 'Never leave sensitive API keys in plain text again. Store developer .env files safely in your encrypted digital seal.',
        icon: <FileCode2 size={24} />,
        color: '#ff0055'
    }
];

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything you need to stay secure</h2>
                    <p className="section-subtitle">
                        Tamga consolidates all your developer and personal security tools into one fully-offline, zero-knowledge interface.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card glass-panel" key={index}>
                            <div
                                className="feature-icon-wrapper"
                                style={{ '--feature-color': feature.color }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
