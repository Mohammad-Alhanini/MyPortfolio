import React from 'react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      title: "PortFolio",
      subtitle: "Figma Portfolio Template",
      description: "DESIGN PORTFOLIO",
      technologies: "HTML CSS JAVASCRIPT"
    },
    {
      title: "PortFolio",
      subtitle: "Figma Portfolio Template",
      description: "DESIGN PORTFOLIO",
      technologies: "HTML CSS JAVASCRIPT"
    }
  ];

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">work</h2>
      <div className="work-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        </p>
        <p>
          tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin.
        </p>
        <p>
          Id sit scelerisque neque, proin bibendum diam.
        </p>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p className="description">{project.description}</p>
              <p className="technologies">{project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;