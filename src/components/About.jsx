import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">about</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate,
          </p>
          <p>
            tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit.
          </p>
          <p>
            scelerisque neque, proin bibendum diam.
          </p>
        </div>
        <div className="skills">
          <div className="skill-item">
            <h3>Front-End</h3>
            <p>60+ Hours Experience</p>
          </div>
          <div className="skill-item">
            <h3>Python</h3>
            <p>4 Years Experience</p>
          </div>
          <div className="skill-item">
            <h3>Machine Learning</h3>
            <p>120+ Hours Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;