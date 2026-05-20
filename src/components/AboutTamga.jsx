import React from 'react';
import './AboutTamga.css';

const AboutTamga = () => {
    return (
        <section className="about-tamga-section">
            <div className="container">
                <div className="glass-panel tamga-card animate-fade-in-delayed">
                    <div className="tamga-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <div className="tamga-content">
                        <h2 className="section-title">Why the name <span className="text-gradient">"Tamga"?</span></h2>
                        <p className="tamga-description">
                            <strong>Tamga</strong> comes from ancient Turkic culture and means a seal or tribal mark used to represent identity, ownership, and authority. Throughout history, our ancestors used their tamgas to mark what belonged to them and to ensure trust.
                        </p>
                        <p className="tamga-description">
                            In the digital world, <strong>Tamga</strong> serves as a <em>cryptographic seal</em>. We believe that your most sensitive digital assets should be protected without demanding blind trust in cloud servers.
                        </p>
                        <p className="tamga-description" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-color)', marginTop: '1rem' }}>
                            Tamga = A digital seal. Your data is yours. Your control. 🔐
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTamga;
