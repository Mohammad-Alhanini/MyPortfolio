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
     <p> I bridge design and development to create impactful digital experiences. 
My work focuses on delivering solutions that are:
</p>
<ul>
<li>- Visually compelling</li>
<li>- Technically robust</li>
<li>- User-friendly</li>
<li>- Performance-optimized</li>
</ul>
<h3>#Go to my GitHub account to see the projects I've worked on</h3>
</div>
    </section>
  );
};

export default Work;