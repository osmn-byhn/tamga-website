import React from 'react';
import { FileClock } from 'lucide-react';
import { ReactChangelogLoader } from '@osmn-byhn/changelog-github-client';
import './Changelog.css';



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

                <div className="changelog-container animate-slide-up">
                    <ReactChangelogLoader
                        owner="osmn-byhn"
                        repo="tamga"
                        template="timeline"
                        theme="dark"
                        maxReleases={10}
                    />
                </div>
            </div>
        </div>
    );
};

export default Changelog;
