import React from 'react';
import { ServerOff, Database, Cpu } from 'lucide-react';
import './Security.css';

const Security = () => {
    return (
        <section id="security" className="security-section">
            <div className="container">
                <div className="security-header text-center">
                    <h2 className="section-title">Built for Developer Paranoia</h2>
                    <p className="section-subtitle">
                        Tamga doesn't just encrypt your data; it refuses to even have the capability to transmit it.
                    </p>
                </div>

                <div className="security-grid">
                    <div className="security-visual">
                        <div className="secure-box glass-panel">
                            <div className="encryption-line top-line">
                                <span>AES-256-GCM</span>
                            </div>
                            <div className="data-layer">
                                <Database size={48} className="db-icon" />
                                <div className="pbkdf2-badge">PBKDF2 Derivation</div>
                            </div>
                            <div className="encryption-line bottom-line">
                                <span>Local Storage Only</span>
                            </div>
                        </div>
                    </div>

                    <div className="security-content">
                        <ul className="security-list">
                            <li className="security-item glass-panel">
                                <ServerOff size={24} className="sec-icon icon-red" />
                                <div>
                                    <h4>Zero Cloud Architecture</h4>
                                    <p>There is no backend, no sync server, and no cloud database. Everything is written purely to your local device disk.</p>
                                </div>
                            </li>
                            <li className="security-item glass-panel">
                                <Cpu size={24} className="sec-icon icon-green" />
                                <div>
                                    <h4>Military-Grade Crypto API</h4>
                                    <p>Uses native Web Crypto APIs (SubtleCrypto) to ensure state-of-the-art AES-256-GCM encryption without relying on heavy third-party libs.</p>
                                </div>
                            </li>
                            <li className="security-item glass-panel">
                                <Database size={24} className="sec-icon icon-blue" />
                                <div>
                                    <h4>JSON Encrypted Blocks</h4>
                                    <p>Your passwords, tokens, and environments are serialized to JSON, encrypted as a single unreadable block, and stored locally.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
