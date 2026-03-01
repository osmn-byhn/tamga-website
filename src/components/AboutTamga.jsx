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
                        <h2 className="section-title">Where Does the Name "Tamga" <span className="text-gradient">Come From?</span></h2>
                        <p className="tamga-description">
                            <strong>Tamga</strong> (or damga) is an ancient seal with origins in old Turkic and Mongolic cultures, symbolizing the independence, identity, and belonging of tribes and communities. Throughout history, our ancestors used their tamgas to mark what belonged to them and to ensure trust.
                        </p>
                        <p className="tamga-description">
                            In the digital world, <strong>Tamga</strong> serves as a <em>cryptographic seal</em> that proves the immutability, security, and exclusive ownership of your data and identity. Just like the marks left by our ancestors, we protect your digital footprints with the highest security standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTamga;
