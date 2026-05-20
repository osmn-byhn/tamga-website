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
                                    <h4>Zero-Knowledge Cloudless Model</h4>
                                    <p>Tamga never sends your credentials to the internet. There is no backend, no sync server, and no cloud database. Everything is written purely to your local disk.</p>
                                </div>
                            </li>
                            <li className="security-item glass-panel">
                                <Cpu size={24} className="sec-icon icon-green" />
                                <div>
                                    <h4>Extensive PBKDF2 Derivations</h4>
                                    <p>Your global Master Password runs through rigorous PBKDF2 derivations to create an unlocking key. The actual vault files are encrypted via local AES-GCM (256-bit).</p>
                                </div>
                            </li>
                            <li className="security-item glass-panel">
                                <Database size={24} className="sec-icon icon-blue" />
                                <div>
                                    <h4>Native Web Crypto API</h4>
                                    <p>Powered by the standard, robust SubtleCrypto API. Built completely standalone running locally on an Electron engine for maximum security.</p>
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
