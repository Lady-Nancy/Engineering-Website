import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Futa from './futa';
import { useState } from "react";
import { Link } from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Contacts = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m9kz80e',      // e.g service_xxxxxx
      'template_izkx2du',     // e.g template_xxxxxx
      formRef.current,
      'sa9eIl7BlSST0bepW'       // e.g XXXXXXXXXXXXXXXXX
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset(); // clear form after send
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error.text);
      }
    );
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

      <section className="contact-us">
        <div className="contact-us1">
          <div className="head">
            <h5><span>+</span> CONTACT US</h5>
            <h1>Get In Touch</h1>
            <h4>
              Please complete the form if you have a project in mind,
              questions to our team of construction experts, or any other inquiries.
            </h4>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="form">
            <input
              className="name"
              type="text"
              name="user_name"
              placeholder="Name*"
              required
            />

            <input
              className="phone"
              type="tel"
              name="user_phone"
              placeholder="Phone number*"
              required
            />

            <input
              className="Email"
              type="email"
              name="user_email"
              placeholder="Email*"
              required
            />

            <textarea
              className="textarea"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit" className="button">
              Send A Request
            </button>
          </form>
        </div>
      </section>

      <Futa />
    </div>
  );
};

export default Contacts;
