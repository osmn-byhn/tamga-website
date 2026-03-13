import React from 'react';
import { ShieldCheck, Lock, Key } from 'lucide-react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa6';
import { GithubFetcher } from '@osmn-byhn/changelog-github-core';
import './Hero.css';

const Hero = () => {
    const [downloads, setDownloads] = React.useState({
        windows: "https://github.com/osmn-byhn/tamga/releases/download/v1.0.0/Tamga-Setup-1.0.0.exe",
        macos: "https://github.com/osmn-byhn/tamga/releases/download/v1.0.0/tamga-1.0.0-arm64.dmg",
        linuxDeb: "https://github.com/osmn-byhn/tamga/releases/download/v1.0.0/tamga_1.0.0_amd64.deb",
        linuxRpm: "https://github.com/osmn-byhn/tamga/releases/download/v1.0.0/tamga-1.0.0-1.x86_64.rpm",
        appImage: "https://github.com/osmn-byhn/tamga/releases/download/v1.0.0/Tamga-1.0.0.AppImage"
    });

    React.useEffect(() => {
        const fetchLatest = async () => {
            try {
                const fetcher = new GithubFetcher('osmn-byhn', 'tamga');
                const releases = await fetcher.fetchReleases();
                if (releases && releases.length > 0) {
                    const latest = releases[0];
                    const assets = latest.assets || [];

                    const newDownloads = { ...downloads };

                    assets.forEach(asset => {
                        const name = asset.name.toLowerCase();
                        if (name.endsWith('.exe')) newDownloads.windows = asset.browser_download_url;
                        else if (name.endsWith('.dmg')) newDownloads.macos = asset.browser_download_url;
                        else if (name.endsWith('.deb')) newDownloads.linuxDeb = asset.browser_download_url;
                        else if (name.endsWith('.rpm')) newDownloads.linuxRpm = asset.browser_download_url;
                        else if (name.endsWith('.appimage')) newDownloads.appImage = asset.browser_download_url;
                    });

                    setDownloads(newDownloads);
                }
            } catch (error) {
                console.error("Failed to fetch latest release:", error);
            }
        };
        fetchLatest();
    }, []);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="glow-ball glow-1"></div>
                <div className="glow-ball glow-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge animate-fade-in">
                    <ShieldCheck size={16} className="badge-icon" />
                    <span>Local-First, Zero-Knowledge Vault</span>
                </div>

                <h1 className="hero-title animate-fade-in">
                    Your Digital Seal.<br />
                    <span className="text-gradient">Your Control.</span>
                </h1>

                <p className="hero-subtitle animate-fade-in-delayed">
                    Tamga is a comprehensive digital vault protecting your passwords, 2FA codes, and .env files with military-grade AES-256 encryption. Keep everything on your device, safely away from the cloud.
                </p>

                <div className="hero-actions-container animate-fade-in-delayed" style={{ animationDelay: '0.4s' }}>
                    <div className="download-buttons">
                        <a href={downloads.windows} className="btn btn-download-os">
                            <FaWindows size={18} />
                            <span>Windows</span>
                            <span className="os-badge">.exe</span>
                        </a>
                        <a href={downloads.macos} className="btn btn-download-os">
                            <FaApple size={20} />
                            <span>macOS</span>
                            <span className="os-badge">.dmg</span>
                        </a>
                        <a href={downloads.linuxDeb} className="btn btn-download-os">
                            <FaLinux size={18} />
                            <span>Linux (Deb)</span>
                            <span className="os-badge">.deb</span>
                        </a>
                        <a href={downloads.linuxRpm} className="btn btn-download-os">
                            <FaLinux size={18} />
                            <span>Linux (Rpm)</span>
                            <span className="os-badge">.rpm</span>
                        </a>
                        <a href={downloads.appImage} className="btn btn-download-os">
                            <FaLinux size={18} />
                            <span>Linux (AppImage)</span>
                            <span className="os-badge">.AppImage</span>
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-delayed" style={{ animationDelay: '0.6s' }}>
                    <div className="visual-shield">
                        <div className="shield-rings">
                            <div className="ring ring-1"></div>
                            <div className="ring ring-2"></div>
                            <div className="ring ring-3"></div>
                        </div>
                        <div className="shield-core">
                            <Lock size={48} weight="bold" className="core-icon" />
                        </div>

                        {/* Floating Elements */}
                        <div className="floating-badge badge-left">
                            <Key size={16} />
                            <span>AES-256-GCM</span>
                        </div>
                        <div className="floating-badge badge-right">
                            <span className="dot"></span>
                            <span>Offline Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
