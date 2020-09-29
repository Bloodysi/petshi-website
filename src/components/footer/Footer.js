import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <div className='footer__container-links'>
          <div className="footer__link--items">
            <h2>About Us</h2>
            <Link to="/sign__up">How it works</Link> <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link> <Link to="/">Investments</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link> <Link to="/">Support</Link>
            <Link to="/">Destinations</Link> <Link to="/">Sponsorships</Link>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link> <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link> <Link to="/">Twitter</Link>
          </div>
        </div>
        <div className='footer__social'>
          <div className="footer__social-wrapper">
            <Link to="/" className='logo'><i className="fas fa-spa"></i>PETSHI</Link>
            <p className="website__rights">© PETSHI 2020. All rights reserved</p>
            <div className="social__icons">
              <Link to="/" className="social__icon" target="_blank"><i className="fab fa-facebook"></i></Link>
              <Link to="/" className="social__icon" target="_blank"><i className="fab fa-instagram"></i></Link>
              <Link to="/" className="social__icon" target="_blank"><i className="fab fa-twitter"></i></Link>
              <Link to="/" className="social__icon" target="_blank"><i className="fab fa-linkedin"></i></Link>
              <Link to="/" className="social__icon" target="_blank"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
