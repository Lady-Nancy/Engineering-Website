import React from 'react'
import { useState } from "react";
import './projects.css'
import { Link } from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Projects = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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

        
       <section class="projects">
        <div class="latest">
           <h5><span>+</span> LATEST WORKS</h5>
            <h1>Projects We Are Proud Of</h1> 
            <h4>Check out our lastest projects to see our style and expertize.</h4>
        </div>

        <div class="project1">
           <div class="pro1"><img src="/images/img1.jpg" alt="" />
           <div class="timeless"><h5 className='h5'><span>#</span> RENOVATION</h5>
            <h1>Timeless Gray & White Living Room</h1> 
            <h4>September, 20, 2024</h4>
            <h5>More About Project <span>#</span></h5></div>
        </div> 
        
        <div class="pro2">
            <img src="/images/img2.jpg" alt="" />
           <div class="gorgeous"> <h5 className='h5'><span>#</span> REMODELLING</h5>
            <h1>Gorgeous House Remodelling </h1> 
            <h4>September, 20, 2024</h4>
            <h5>More About Project <span>#</span></h5></div>
        </div>
        </div>

        <div class="project2">
        <div class="pro3">
            <img src="/images/img3.jpg" alt="" />
            <div class="amber"><h5 className='h5'><span>#</span> REMODELLING</h5>
            <h1>Amber House Remodelling </h1> 
            <h4>September, 20, 2024</h4>
            <h5>More About Project <span>#</span></h5></div>
        </div>

        <div class="pro4">
            <img src="/images/img4.jpg" alt="" />
            <div class="modern"><h5 className='h5'><span>#</span>INTEROR DESIGN</h5>
            <h1>Modern White Bathroom</h1> 
            <h4>September, 20, 2024</h4>
            <h5>More About Project <span>#</span></h5></div>
        </div>
        </div>

        <div class="all-pro">
            <p>All Projects</p>
        </div>
    </section>

    <section class="stay">
         <h5><span>+</span> STAY IN TOUCH</h5>
         <h1>Contact Us To Specify Your Project Details Right Now</h1> 
         <h4>Request a Quote</h4>
    </section>

    <section className="gallery">
        <div class="explore">
           <h5><span>+</span> GALLERY</h5>
            <h1>Explore Our Gallery</h1> 
            <h4>Here are some of our favourite pics from the contruction sites and resdy projects</h4>
        </div>

      
         <div class="pics">
            <img src="/images/img5.jpg" className="img1" />
            <img src="/images/img6.jpg" className="img2" />
            <img src="/images/img7.jpg" className="img3" />
            <img src="/images/img8.jpg" className="img4" />
            <img src="/images/img9.jpg" className="img5" />
            <img src="/images/img10.jpg" className="img6" />
         </div>
    </section>

    </div>
  )
}

export default Projects
