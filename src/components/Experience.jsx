import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      position: 'Lead UI/UX Engineer',
      company: 'NeoCorp Technologies',
      period: '2023 — Present',
      location: 'San Francisco, CA',
      description: 'Leading design system architecture for AI-powered enterprise solutions. Managing cross-functional team of 12 developers and designers.',
      achievements: ['Component library with 95% adoption rate', '60% performance improvement', 'Design system covering 20+ products'],
      icon: '🚀',
      color: 'var(--neon-blue)'
    },
    {
      id: 2,
      position: 'Senior Frontend Developer',
      company: 'InnovateLabs',
      period: '2021 — 2023',
      location: 'New York, NY',
      description: 'Developed cutting-edge web applications for Fortune 500 clients. Implemented micro-frontend architecture.',
      achievements: ['15+ enterprise applications', 'Mentored 8 junior developers', 'Micro-frontend migration'],
      icon: '💡',
      color: 'var(--neon-purple)'
    },
    {
      id: 3,
      position: 'UI/UX Designer & Developer',
      company: 'Digital Frontier',
      period: '2019 — 2021',
      location: 'Austin, TX',
      description: 'Created immersive user experiences for tech startups. Led design thinking workshops.',
      achievements: ['20+ responsive web apps', '2 industry design awards', 'Design system implementation'],
      icon: '🎯',
      color: 'var(--neon-cyan)'
    },
    {
      id: 4,
      position: 'Junior Developer',
      company: 'TechStart Incubator',
      period: '2018 — 2019',
      location: 'Chicago, IL',
      description: 'Built MVPs for early-stage startups. Collaborated with cross-functional teams.',
      achievements: ['5 successful MVPs', 'Agile methodology', 'Client communication'],
      icon: '🌱',
      color: 'var(--neon-pink)'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'M.S. in Computer Science',
      institution: 'Stanford University',
      period: '2016 — 2018',
      focus: 'Human-Computer Interaction',
      achievement: 'GPA: 3.9/4.0',
      icon: '🎓'
    },
    {
      id: 2,
      degree: 'B.A. in Cognitive Science',
      institution: 'UC Berkeley',
      period: '2012 — 2016',
      focus: 'Design Psychology',
      achievement: 'Summa Cum Laude',
      icon: '📚'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience" ref={timelineRef}>
      <div className="experience-header">
        <h1 className="experience-title">Career Journey</h1>
        <p className="experience-subtitle">8+ years of shaping digital experiences</p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker" style={{ background: exp.color }}>
              <span className="timeline-icon">{exp.icon}</span>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h3 className="timeline-position">{exp.position}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">{exp.location}</span>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="achievement-tag">{achievement}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`education-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="education-icon">{edu.icon}</div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-focus">{edu.focus}</p>
                <p className="education-achievement">{edu.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;