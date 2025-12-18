import React from 'react'
import Futa from './futa'
import { useState } from "react";
import { Link } from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const About = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
     <div>
        <div className="container1">
             {/* Top email bar */}
             <div className="email">
               <p>+ (234) 816 079 1212</p>
               <p>cplexconstructioncompanyltd@email.com</p>
             </div>
           
             {/* Desktop Nav */}
             <nav className="home">
               <div className="okay">
                 <div>
                   <img src="/images/IMG-20251019-WA0023.jpg" alt="" />
                   C - PLEX
                 </div>
                 <h6>Design And Construction</h6>
               </div>
           
               <div className="link">
                 <Link to="/home" className='link'>Home</Link>
                 <Link to="/about" className='link'>About Us</Link>
                 <Link to="/services" className='link'>Services</Link>
                 <Link to="/projects" className='link'>Projects</Link>
                 <Link to="/contacts" className='link'>Contact Us</Link>
               </div>
           
               <div className="icon">
                   <a href="https://x.com/your_username" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={30} />
                  </a>
           
           
                <a
                  href="https://www.instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer">
                 <FaInstagram size={30} />
                </a>
           
                  <a
                  href="https://www.instagram.com/c_plex_ltd?igsh=MTAzZjhsZmo5MjN1YQ=="
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook size={30} />
                  </a>
               
                  <a href="https://youtube.com/@your_channel" target="_blank" rel="noopener noreferrer">
                   <FaYoutube size={30} />
                  </a>
               </div>
             </nav>
           
             {/* ✅ MOBILE TOGGLE (OUTSIDE .home) */}
             <div
             className={`mobile-toggle ${menuOpen ? "hide" : ""}`}
             onClick={() => setMenuOpen(true)}
           >
             ☰
           </div>
           
           
             {/* ✅ MOBILE MENU (OUTSIDE .home) */}
             <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
               <div
                 className="mobile-close"
                 onClick={() => setMenuOpen(false)}
               >
                 ✕
               </div>
           
                <div className="okay">
                 <div>
                   <img src="/images/IMG-20251019-WA0023.jpg" alt="" />
                   C - PLEX
                 </div>
                 <h6>Design And Construction</h6>
               </div>
           
               <ul className="mobile-links">
                 <li><Link to="/home" onClick={() => setMenuOpen(false)} className='link'>Home</Link></li>
                 <li><Link to="/about" onClick={() => setMenuOpen(false)} className='link'>About Us</Link></li>
                 <li><Link to="/services" onClick={() => setMenuOpen(false)} className='link'>Services</Link></li>
                 <li><Link to="/projects" onClick={() => setMenuOpen(false)} className='link'>Projects</Link></li>
                 <li><Link to="/contacts" onClick={() => setMenuOpen(false)} className='link'>Contacts</Link></li>
               </ul>
           
               <div className="mobile-contact">
                 <p>+(234) 816 079 1212</p>
                 <p>cplexconstructioncompanyltd@email.com</p>
               </div>
            <div className="icon">
                   <a href="https://x.com/your_username" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={30} />
                  </a>
           
           
                <a
                  href="https://www.instagram.com/your_username"
                  target="_blank"
                  rel="noopener noreferrer">
                 <FaInstagram size={30} />
                </a>
           
                  <a
                  href="https://www.instagram.com/c_plex_ltd?igsh=MTAzZjhsZmo5MjN1YQ=="
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook size={30} />
                  </a>
               
                  <a href="https://youtube.com/@your_channel" target="_blank" rel="noopener noreferrer">
                   <FaYoutube size={30} />
                  </a>
               </div>
             </div>
             </div>
           
       
       <div className="about-us">
        <div className="about-us2">
        <h5><span>+</span> ABOUT US</h5>
        <h1>We Are More Than <span>4 Years</span> on the Market</h1>
        <h4>We're proud of our reliability and reputation.</h4>
        <p>We are a leading construction company with 30+ years of experience in the industry. We are dedicated to providing the highest quality construction services to our customers meeting their special needs on schedule and within their budgets. Client satisfaction is always our first priority.</p>
        <div className="more">More About Us</div>
        </div>
          <img src="/images/0539e10035c641d08c11faf834874571.jpg" alt="" />
    </div>

    <div className="years">
        <div className="two">
       <div className="three">
        <img src="/images/IMG-20251019-WA0107.jpg" alt="" />
        <h1>30+</h1>
        <p>years on the market</p>
       </div>

       <div className="six">
       <img src="/images/awards.jpg" alt="" />
        <h1>600+</h1>
        <p>sq ft built</p>
       </div>

       <div className="five">
        <h1>534</h1>
        <p>qualified workers</p>
       </div>

       <div className="one">
        <img src="/images/IMG-20251019-WA0114.jpg" alt="" />
        <h1><span>12</span></h1>
        <p>awards received</p>
       </div>
        </div>

       </div>
        <Futa/>
    </div>
  )
}

export default About;
