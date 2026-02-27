import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ theme }) => {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        projects: 48,
        experience: 8,
        clients: 32,
        satisfaction: 98
      };

      const duration = 2000;
      const steps = 60;
      const increment = {};

      Object.keys(targets).forEach(key => {
        increment[key] = targets[key] / steps;
      });

      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep < steps) {
          setStats(prev => ({
            projects: Math.min(Math.floor(prev.projects + increment.projects), targets.projects),
            experience: Math.min(Math.floor(prev.experience + increment.experience), targets.experience),
            clients: Math.min(Math.floor(prev.clients + increment.clients), targets.clients),
            satisfaction: Math.min(Math.floor(prev.satisfaction + increment.satisfaction), targets.satisfaction)
          }));
          currentStep++;
        } else {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'TypeScript', level: 90 },
    { name: 'Animation', level: 88 },
    { name: 'Performance', level: 94 }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title fade-scale">Dashboard</h1>
        <p className="dashboard-subtitle slide-glow">Welcome back, Alvitho Sipayung</p>
      </div>

      <div className="stats-grid" ref={statsRef}>
        <div className="stat-card">
          <div className="stat-icon float">📊</div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.projects}+</h3>
            <p className="stat-label">Projects</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon float">💼</div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.experience}</h3>
            <p className="stat-label">Years Experience</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon float">🤝</div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.clients}+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon float">⭐</div>
          <div className="stat-content">
            <h3 className="stat-value">{stats.satisfaction}%</h3>
            <p className="stat-label">Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="skills-preview">
        <h2 className="section-title">Core Competencies</h2>
        <div className="skills-bars">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-activity">
        <h2 className="section-title">Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time glow-pulse">2h ago</span>
            <span className="activity-text">Completed UI design for Fintech App</span>
          </div>
          <div className="activity-item">
            <span className="activity-time glow-pulse">5h ago</span>
            <span className="activity-text">Client meeting with TechCorp</span>
          </div>
          <div className="activity-item">
            <span className="activity-time glow-pulse">1d ago</span>
            <span className="activity-text">Published article on Micro-interactions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;