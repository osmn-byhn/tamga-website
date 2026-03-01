import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Security from '../components/Security';
import LatestVersion from '../components/LatestVersion';

const Home = () => {
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                }
            });
        };

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.feature-card, .security-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <LatestVersion />
            <Features />
            <Security />
        </main>
    );
};

export default Home;
