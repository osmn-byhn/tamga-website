import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';
import './LatestVersion.css';

const LatestVersion = () => {
    return (
        <section className="latest-version-section">
            <div className="container">
                <div className="latest-card glass-panel animate-fade-in-delayed">
                    <div className="latest-info">
                        <div className="version-tag">
                            <Activity size={16} className="pulse-icon" />
                            <span>Latest Release: v1.0.0</span>
                        </div>
                        <h3>Tamga is now Live!</h3>
                        <p>Experience local-first, zero-knowledge architecture. The initial release brings military-grade AES encryption and complete TOTP/Password management to your desktop.</p>
                    </div>

                    <div className="latest-action">
                        <Link to="/changelog" className="btn btn-outline">
                            <span>Read Changelog</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestVersion;
