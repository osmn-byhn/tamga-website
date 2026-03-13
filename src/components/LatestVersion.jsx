import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';
import { GithubFetcher } from '@osmn-byhn/changelog-github-core';
import './LatestVersion.css';

const LatestVersion = () => {
    const [latestData, setLatestData] = React.useState({
        version: 'v1.0.0',
        title: 'Tamga is now Live!'
    });

    React.useEffect(() => {
        const fetchLatest = async () => {
            try {
                const fetcher = new GithubFetcher('osmn-byhn', 'tamga');
                const releases = await fetcher.fetchReleases();
                if (releases && releases.length > 0) {
                    setLatestData({
                        version: releases[0].tag_name,
                        title: releases[0].name || `Tamga ${releases[0].tag_name} is here!`
                    });
                }
            } catch (error) {
                console.error("Failed to fetch latest version:", error);
            }
        };
        fetchLatest();
    }, []);

    return (
        <section className="latest-version-section">
            <div className="container">
                <div className="latest-card glass-panel animate-fade-in-delayed">
                    <div className="latest-info">
                        <div className="version-tag">
                            <Activity size={16} className="pulse-icon" />
                            <span>Latest Release: {latestData.version}</span>
                        </div>
                        <h3>{latestData.title}</h3>
                        <p>Experience local-first, zero-knowledge architecture. Keep your passwords, 2FA codes, and developer .env files safe on your own device.</p>
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
