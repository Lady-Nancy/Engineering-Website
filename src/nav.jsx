import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Nav = () => {
  return (
   

    <div className="container1">
        <div className="email"><p>+ (234) 816 079 1212</p>
        <p>cplexconstructioncompanyltd@email.com</p></div>

    <nav className="home">
        <div className='okay'>
     <div><img src="./src/assets/IMG-20251019-WA0023.jpg" alt="" />C - PLEX </div>
      <h6>Design And Construction</h6></div>
      
      <div className='link'>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/about" className='link'>About Us</Link>
      <Link to="/services" className='link'>Services</Link>
      <Link to="/projects" className='link'>Projects</Link>
      <Link to="/contacts" className='link'>Contact Us</Link>
      </div>

    <div className='icon'>
      <FaXTwitter size={30} />
      <FaInstagram size={30} />
      <FaFacebook size={30} />
      <FaYoutube size={30} />
    </div>
    </nav>

   
    </div>

   
  )
}

export default Nav
