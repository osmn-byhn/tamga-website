import React from 'react';
import './FirewallBackground.css';

const FirewallBackground = () => {
    return (
        <div className="firewall-bg-container">
            {/* The perspective grid wall */}
            <div className="firewall-wall"></div>
            
            {/* Horizontal scanning laser */}
            <div className="scanning-laser"></div>
            
            {/* Vertical data streams being "blocked" or analyzed */}
            <div className="data-streams">
                <div className="stream stream-1"></div>
                <div className="stream stream-2"></div>
                <div className="stream stream-3"></div>
                <div className="stream stream-4"></div>
                <div className="stream stream-5"></div>
            </div>

            {/* Glowing shield base at the bottom */}
            <div className="shield-base"></div>
        </div>
    );
};

export default FirewallBackground;
