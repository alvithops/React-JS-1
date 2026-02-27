import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const technicalSkills = [
    { 
      id: 1,
      name: 'React & Next.js', 
      level: 95, 
      category: 'Frontend', 
      icon: '⚛️',
      color: '#00f0ff',
      description: 'Building scalable web applications'
    },
    { 
      id: 2,
      name: 'TypeScript', 
      level: 92, 
      category: 'Frontend', 
      icon: '📘',
      color: '#b300ff',
      description: 'Type-safe development'
    },
    { 
      id: 3,
      name: 'UI/UX Design', 
      level: 94, 
      category: 'Design', 
      icon: '🎨',
      color: '#ff00aa',
      description: 'User-centered design approach'
    },
    { 
      id: 4,
      name: 'Figma', 
      level: 90, 
      category: 'Design', 
      icon: '🖌️',
      color: '#00ffc2',
      description: 'Design systems & prototyping'
    },
    { 
      id: 5,
      name: 'Node.js', 
      level: 88, 
      category: 'Backend', 
      icon: '🚀',
      color: '#00f0ff',
      description: 'Server-side development'
    },
    { 
      id: 6,
      name: 'GraphQL', 
      level: 85, 
      category: 'Backend', 
      icon: '📊',
      color: '#b300ff',
      description: 'API design & optimization'
    },
    { 
      id: 7,
      name: 'Animation (GSAP)', 
      level: 89, 
      category: 'Frontend', 
      icon: '✨',
      color: '#ff00aa',
      description: 'Smooth micro-interactions'
    },
    { 
      id: 8,
      name: 'WebGL/Three.js', 
      level: 82, 
      category: 'Frontend', 
      icon: '🌐',
      color: '#00ffc2',
      description: '3D web experiences'
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills" ref={skillsRef}>
      <div className="skills-header">
        <h1 className="skills-title">Technical Expertise</h1>
        <p className="skills-subtitle">Specialized in modern web technologies</p>
      </div>

      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div 
            key={skill.id} 
            className={`skill-card ${isVisible ? 'visible' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--skill-color': skill.color 
            }}
          >
            <div className="skill-card-inner">
              <div className="skill-header">
                <span className="skill-icon" style={{ background: `linear-gradient(135deg, ${skill.color}, transparent)` }}>
                  {skill.icon}
                </span>
                <div className="skill-title-group">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-progress-container">
                <div className="skill-progress-info">
                  <span className="skill-progress-label">Proficiency</span>
                  <span className="skill-progress-value">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;