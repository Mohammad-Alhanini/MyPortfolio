import React from 'react';
import './Footer.css';
import iconinsta from'./instagram.png';
import icongithub from './github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Mohammad Alhanini</h2>
      <h2>+962795719299</h2>
      <a href='https://www.instagram.com/m7md_alhanini'><img src={iconinsta}></img></a>
      <a href='https://github.com/Mohammad-Alhanini'><img src={icongithub}></img></a>
    </footer>
  );
};

export default Footer;