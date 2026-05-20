import React from 'react';
import { KeyRound, Smartphone, FileCode2, ScanLine, Network, EyeOff, FolderTree } from 'lucide-react';
import './Features.css';

const features = [
    {
        title: 'The Ultimate Developer Vault',
        description: 'Create strong passwords, store digital passkeys, and manage TOTP codes locally. Never leave .env files exposed in plain text again.',
        icon: <KeyRound size={24} />,
        color: '#00ff88'
    },
    {
        title: 'Google Auth Importer',
        description: 'Use your webcam or screenshots to decode Google Authenticator\'s export QR codes and pull dozens of accounts into Tamga instantly.',
        icon: <ScanLine size={24} />,
        color: '#9d00ff'
    },
    {
        title: 'Developer .env Security',
        description: 'Safely store, manage, and toggle between your .env files for different projects without exposing secrets in your codebase.',
        icon: <FileCode2 size={24} />,
        color: '#ff0055'
    },
    {
        title: 'Advanced Relational Linking',
        description: 'Connect multiple assets. Enter the interactive Graph View to see a beautiful node-and-edge flowchart of how your credentials are interconnected.',
        icon: <Network size={24} />,
        color: '#00b8ff'
    },
    {
        title: 'Shift-to-Merge Groups',
        description: 'Hold the Shift key while dropping an item to nest them together into custom logical folders. Readjust, disband, and rename groups easily.',
        icon: <FolderTree size={24} />,
        color: '#ffb800'
    },
    {
        title: 'Privacy Screen (Blur Mode)',
        description: 'Sharing your screen on a Zoom call? Enable Blur Mode to instantly shroud all your passwords and keys behind a frosted glass layer.',
        icon: <EyeOff size={24} />,
        color: '#ff00aa'
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
