import React, { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [theme, setTheme] = useState('dark');
  const [backgroundParticles, setBackgroundParticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Generate animated particles based on active section
  useEffect(() => {
    const particles = [];
    const particleCount = activeSection === 'dashboard' ? 30 :
                         activeSection === 'projects' ? 25 :
                         activeSection === 'skills' ? 35 :
                         activeSection === 'experience' ? 20 : 15;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        color: i % 3 === 0 ? 'var(--neon-blue)' : 
               i % 3 === 1 ? 'var(--neon-purple)' : 'var(--neon-cyan)'
      });
    }
    setBackgroundParticles(particles);
  }, [activeSection]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard': return <Dashboard theme={theme} />;
      case 'projects': return <Projects theme={theme} />;
      case 'skills': return <Skills theme={theme} />;
      case 'experience': return <Experience theme={theme} />;
      case 'contact': return <Contact theme={theme} />;
      default: return <Dashboard theme={theme} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`app ${theme}`} data-section={activeSection}>
      {/* Animated Background Particles */}
      <div className={`background-particles background-${activeSection}`}>
        {backgroundParticles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              animation: `floatParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              filter: `blur(${particle.size * 0.3}px)`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Background */}
      <div className={`gradient-mesh mesh-${activeSection}`}></div>

      {/* Light Wave Background */}
      <div className={`light-wave wave-${activeSection}`}></div>

      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;