import React from 'react';
import { Link } from "react-router-dom";
import './futa.css';
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6"; // Assuming you use react-icons

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
               <a href="https://x.com/your_username" 
                  className='social-icon'
                  target="_blank" rel="noopener noreferrer">
                     <FaXTwitter size={30} />
                   </a>
            
            
                 <a
                   href="https://www.instagram.com/your_username"
                   className='social-icon'
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaInstagram size={30} />
                 </a>
            
                   <a
                   href="https://www.instagram.com/c_plex_ltd?igsh=MTAzZjhsZmo5MjN1YQ=="
                   className='social-icon'
                   target="_blank"
                   rel="noopener noreferrer">
                   <FaFacebook size={30} />
                   </a>
                
                   <a href="https://youtube.com/@your_channel"
                    className='social-icon' 
                    target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} />
                   </a>
                </div>
        </div>

        {/* Column 2: About Links */}
        <div className="footer-column footer-links">
          <h4 className="column-title">About</h4>
         <ul className="link-list">
  <li>
    <Link to="/about" className="link">About Us</Link>
  </li>
  <li>
    <Link to="/services" className="link">Services</Link>
  </li>
  <li>
    <Link to="/projects" className="link">Projects</Link>
  </li>
  <li>
    <Link to="/contacts" className="link">Contact Us</Link>
  </li>
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