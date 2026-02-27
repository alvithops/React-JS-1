import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${animationComplete ? 'fade-out' : ''}`}>
      {/* Animated Background Particles */}
      <div className="splash-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="splash-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              animation: `splashFloat ${Math.random() * 10 + 10}s linear ${Math.random() * 5}s infinite`,
              background: i % 3 === 0 ? 'var(--neon-blue)' : 
                          i % 3 === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)',
              filter: `blur(${Math.random() * 30 + 20}px)`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh */}
      <div className="splash-mesh"></div>

      {/* Light Waves */}
      <div className="splash-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Main Content */}
      <div className="splash-content">
        <div className="splash-logo-container">
          <div className="splash-logo">
            <span className="logo-text">AR</span>
          </div>
          <div className="logo-ring"></div>
          <div className="logo-ring ring2"></div>
        </div>

        <h1 className="splash-name">
          {'Alvitho Sipayung'.split('').map((char, i) => (
            <span
              key={i}
              className="name-char"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="splash-roles">
          <span className="splash-role" style={{ animationDelay: '0.5s' }}>
            Senior Backend Engineer
          </span>
          <span className="splash-role" style={{ animationDelay: '0.7s' }}>
            Frontend Architect
          </span>
        </div>

        <p className="splash-tagline" style={{ animationDelay: '0.9s' }}>
          Crafting digital experiences that matter
        </p>

        <div className="splash-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Loading experience...</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element e1">⚡</div>
        <div className="floating-element e2">✨</div>
        <div className="floating-element e3">🚀</div>
        <div className="floating-element e4">💫</div>
      </div>
    </div>
  );
};

export default SplashScreen;