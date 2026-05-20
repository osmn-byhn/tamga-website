import React from 'react';
import './Gallery.css';

const galleryItems = [
    {
        id: 'vault',
        title: 'Central Password Vault',
        description: 'Your secure gateway. View and manage all your protected passwords at a glance with a clean, intuitive interface designed for efficiency.',
        image: '/gallery/passwords.png',
        tag: 'Overview'
    },
    {
        id: 'otp',
        title: 'Built-in Authenticator',
        description: 'Advanced Two-Factor Authentication (2FA) support. Generate TOTP codes locally on your desktop, eliminating the need for cloud-synced mobile apps.',
        image: '/gallery/otp.png',
        tag: 'Security'
    },
    {
        id: 'env',
        title: 'Environment Manager',
        description: 'A developer\'s dream. Safely store, manage, and toggle between your .env files for different projects without exposing secrets in your codebase.',
        image: '/gallery/envs.png',
        tag: 'Development'
    },
    {
        id: 'health',
        title: 'Security Audit & Health',
        description: 'Monitor your digital security posture. Detect leaked passwords via HIBP and identify weak or reused credentials instantly.',
        image: '/gallery/password-health.png',
        tag: 'Auditing'
    },
    {
        id: 'generator',
        title: 'Smart Password Generator',
        description: 'Create cryptographically strong, unique passwords instantly. Tailor length and complexity to meet the strictest security requirements.',
        image: '/gallery/passwords-generator.png',
        tag: 'Utility'
    },
    {
        id: 'settings',
        title: 'Advanced Customization',
        description: 'Fine-tune your vault. Configure auto-lock timers, strict clipboard clearing, and intruder protection to match your specific workflow.',
        image: '/gallery/settings-auto-lock.png',
        tag: 'Control'
    }
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <h2 className="section-title">Experience the Interface</h2>
                    <p className="section-subtitle">A powerful, elegant workspace designed to keep your digital life secure and organized.</p>
                </div>

                <div className="gallery-items">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`gallery-item ${index % 2 === 1 ? 'reverse' : ''} tamga-card`}
                        >
                            <div className="gallery-image-container">
                                <div className="gallery-image-wrapper glass-panel">
                                    <img src={item.image} alt={item.title} className="gallery-img" />
                                    <div className="image-overlay"></div>
                                </div>
                            </div>

                            <div className="gallery-info">
                                <span className="item-tag">{item.tag}</span>
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-description">{item.description}</p>
                                <div className="item-features">
                                    <div className="item-feature-dot"></div>
                                    <span>Local-First Execution</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
