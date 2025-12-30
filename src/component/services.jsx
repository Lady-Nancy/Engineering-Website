import { useRef, useState } from "react";
import Futa from './futa'
import { Link } from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Services = () => {
   const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);
const [played, setPlayed] = useState(false);
const [paused, setPaused] = useState(false);

const handlePlay = () => {
  if (!videoRef.current) return;
  videoRef.current.play();
  setPlayed(true);
  setPaused(false);
};

const handlePause = () => {
  if (!videoRef.current) return;

  if (videoRef.current.paused) {
    videoRef.current.play();
    setPaused(false);
  } else {
    videoRef.current.pause();
    setPaused(true);
  }
};

  return (
    <div>

      
    <div className="about1">
    
      {/* Top email bar */}
      <div className="email1">
        <p>+ (234) 816 079 1212</p>
        <p>cplexconstructioncompanyltd@email.com</p>
      </div>
    
      {/* Desktop Nav */}
      <nav className="home">
        <div className="okay">
          <div className="oh">
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
          <div className='oh'>
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
    
        <div className="image">
        <div>
            <img src="/images/onee.jpg" alt="" />
        </div>
        <div className="sector">
            <h5><span>+</span> SECTORS</h5>
            <h1>Building, Renovation & Improvements</h1>
            <h4 className='h'>We are proud to be the leading company with more than 30 years of experience. We provide a wide range of high-quality services to the majority of industries while meeting high industry standards.</h4>
          <div class="ul1">
            <p><span>•</span>Commercial</p>
            <p><span>•</span>Residential</p>
            <p><span>•</span>Recreational</p>
            <p><span>•</span>Healthcare</p> </div>
            <div class="ul2"><p><span>•</span>Civic & Culture</p>
            <p><span>•</span>Institutional</p>
            <p><span>•</span>Heavy Industrial</p></div>
          
          <h4 class="h4">We've started as a small, family-owned construction company in Alabama and now are one of the biggest and most reliable contractors throughout the USA. If you're looking for an experienced company to implement your project of any complexity, you can count on us.</h4>
         <div class="request"> <div class="re1">Request a Quote</div>
          <div class="re2">Projects <span>+</span></div> </div>
        </div>
        </div>

       {/* ===== WORK VIDEO SECTION ===== */}
      <div className="work-video">
        <video
          ref={videoRef}
          src="/images/VID-20251019-WA0124.mp4"
          muted
          loop
           className={played ? "show" : ""}
        />

        <div className={`tex ${played ? "fade-out" : ""}`}>+ OUR VIDEO</div>

        <div className={`text ${played ? "fade-out" : ""}`}>
          See Our Work in Action
        </div>
          {!played && (
          <div className="play-btn" onClick={handlePlay}>
            ▶
          </div>
        )}

        {played && (
          <div
            className="pause-btn"
            onClick={handlePause}
            style={{ display: "flex" }}
  >
            {paused ? "▶" : "⏸"}
          </div>
        )}
      </div>

<Futa/>
    </div>
  )
}

export default Services
