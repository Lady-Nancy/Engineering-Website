import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Nav = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
   
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
        <img src="./src/assets/IMG-20251019-WA0023.jpg" alt="" />
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
        <img src="./src/assets/IMG-20251019-WA0023.jpg" alt="" />
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

   
  )
}

export default Nav
