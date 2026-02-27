import React from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '📅' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav className={`navigation ${theme}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <span className="logo-icon">AR</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="nav-items">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="nav-footer">
        <div className="nav-status">
          <div className="status-dot"></div>
          <span>Available for work</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;