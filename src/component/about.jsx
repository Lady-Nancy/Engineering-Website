import React from 'react'
import Futa from './futa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
     <div>
           <div className="top">
             <Link to="/home" className='link'>Home</Link>
             <Link to="/about" className='link'>About Us</Link>
             <Link to="/services" className='link'>Services</Link>
             <Link to="/projects" className='link'>Projects</Link>
             <Link to="/contacts" className='link'>Contact Us</Link>
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
