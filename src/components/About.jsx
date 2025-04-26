import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">about</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
Developer. Problem-solver. Continuous learner.
</p>

<ul>I build things for the web with:
<li>JavaScript</li>
<li>React & Node.js</li>
<li>Modern CSS frameworks</li>
</ul>
<p>
Driven by curiosity and attention to detail, I specialize in creating fast,
accessible web applications that deliver real value to users and businesses alike.
</p>    
        </div>
        <div className="skills">
          <div className="skill-item">
            <h3>Front-End</h3>
            <p>60+ Hours Experience</p>
          </div>
          <div className="skill-item">
            <h3>wordpress</h3>
            <p>120+ Hours Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;