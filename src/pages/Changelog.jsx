import React, { useState, useEffect } from 'react';
import { FileClock, X } from 'lucide-react';
import { GithubFetcher } from '@osmn-byhn/changelog-github-core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Changelog.css';

const Changelog = () => {
    const [releases, setReleases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRelease, setSelectedRelease] = useState(null);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const fetcher = new GithubFetcher('osmn-byhn', 'tamga');
                const data = await fetcher.fetchReleases();
                setReleases(data.slice(0, 12)); // Fetch up to 12 releases to look good in grid
            } catch (error) {
                console.error("Failed to fetch releases:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchReleases();
    }, []);

    const openModal = (release) => {
        setSelectedRelease(release);
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    };

    const closeModal = () => {
        setSelectedRelease(null);
        document.body.style.overflow = 'auto'; // restore background scrolling
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

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
                    {loading ? (
                        <div className="loading-spinner">Loading releases...</div>
                    ) : (
                        <div className="releases-grid">
                            {releases.map((release) => (
                                <div 
                                    key={release.id} 
                                    className="release-card glass-panel"
                                    onClick={() => openModal(release)}
                                >
                                    <div className="release-card-header">
                                        <span className="release-tag">{release.tag_name}</span>
                                        <span className="release-date">{formatDate(release.published_at)}</span>
                                    </div>
                                    <h3 className="release-title">{release.name || release.tag_name}</h3>
                                    <p className="release-click-hint">Click to view details &rarr;</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selectedRelease && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <X size={24} />
                        </button>
                        <div className="modal-header">
                            <span className="release-tag">{selectedRelease.tag_name}</span>
                            <span className="release-date">{formatDate(selectedRelease.published_at)}</span>
                        </div>
                        <h2 className="modal-title">{selectedRelease.name || selectedRelease.tag_name}</h2>
                        <div className="modal-body markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {selectedRelease.body}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Changelog;
