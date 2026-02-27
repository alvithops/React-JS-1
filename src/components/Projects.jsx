import React, { useState } from 'react';
import './Projects.css';

const Projects = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'NeoBank - Digital Banking',
      category: 'web',
      image: '🏦',
      description: 'Next-gen digital banking platform with AI-powered insights',
      role: 'Lead UI/UX Designer & Frontend Architect',
      tools: ['React', 'TypeScript', 'Figma', 'D3.js', 'WebGL'],
      year: '2024',
      client: 'NeoBank International',
      gradient: 'var(--gradient-1)'
    },
    {
      id: 2,
      title: 'EcoTrack AI',
      category: 'mobile',
      image: '🌱',
      description: 'Sustainable lifestyle tracking with gamification and AI coaching',
      role: 'UI/UX Designer & Frontend Developer',
      tools: ['React Native', 'Firebase', 'TensorFlow.js', 'Sketch'],
      year: '2024',
      client: 'EcoTech Global',
      gradient: 'var(--gradient-2)'
    },
    {
      id: 3,
      title: 'Quantum Analytics',
      category: 'web',
      image: '📈',
      description: 'Real-time analytics platform for quantum computing research',
      role: 'Frontend Architect & Lead Developer',
      tools: ['Vue 3', 'WebAssembly', 'D3.js', 'Python', 'GraphQL'],
      year: '2023',
      client: 'Quantum Labs',
      gradient: 'var(--gradient-3)'
    },
    {
      id: 4,
      title: 'MedTech VR',
      category: 'mobile',
      image: '🥽',
      description: 'VR surgical training platform for medical students',
      role: 'Senior Frontend Developer & UI Designer',
      tools: ['Three.js', 'React 360', 'WebRTC', 'Node.js'],
      year: '2023',
      client: 'MedTech Innovations',
      gradient: 'var(--gradient-1)'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image" style={{ background: project.gradient }}>
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tools.slice(0, 3).map(tool => (
                  <span key={tool} className="project-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header" style={{ background: selectedProject.gradient }}>
              <span className="modal-emoji">{selectedProject.image}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-section">
                <h4>My Role</h4>
                <p>{selectedProject.role}</p>
              </div>
              <div className="modal-section">
                <h4>Technologies</h4>
                <div className="modal-tags">
                  {selectedProject.tools.map(tool => (
                    <span key={tool} className="modal-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h4>Details</h4>
                <p><strong>Client:</strong> {selectedProject.client}</p>
                <p><strong>Year:</strong> {selectedProject.year}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;