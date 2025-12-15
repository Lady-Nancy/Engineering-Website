import React from 'react';
import './futa.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Assuming you use react-icons

const Futa = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Logo and Company Info */}
        <div className="footer-column footer-info">
          {/* Replace with your actual logo component or image */}
          <div className="logo-container">
            <img 
              src="/path-to-your-logo.png" 
              alt="C-PLEX Engineering & Construction Logo" 
              className="logo-img"
            />
            <span className="logo-text">C-PLEX</span>
            <span className="logo-subtext">engineering & construction</span>
          </div>
          <p className="company-description">
            A leading construction company with 4+ years of experience in the industry. 
            We are dedicated to providing the highest quality construction services.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
            <a href="#" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" className="social-icon youtube"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2: About Links */}
        <div className="footer-column footer-links">
          <h4 className="column-title">About</h4>
          <ul className="link-list">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        
        {/* Column 3: Subscription Form */}
        <div className="footer-column footer-subscribe">
          <h4 className="subscribe-text">
            Subscribe to get the latest news and special offers from uus
          </h4>
          <form className="subscribe-form">
            <input 
              type="email" 
              placeholder="Email*" 
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright-left">© Created by</p>
        <p className="copyright-right">All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Futa;