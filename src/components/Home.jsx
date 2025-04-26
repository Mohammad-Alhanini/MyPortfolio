import React from 'react';
import profileImage from './profile.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-content">
        <div className="home-text">
          <h2>Hello, I'm Mohammad,</h2>
          <h1>Full stack<br />Developer</h1>
          <a className="contact-btn" href='#contact'>Contact Me</a>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Mohammad" />
        </div>
      </div>
    </section>
  );
};

export default Home;