import React from 'react'
import { useState,  useRef  } from "react";
import emailjs from 'emailjs-com';
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import Hero from './hero';
import Futa from './futa'
import { Link } from 'react-router-dom';


const home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  /* VIDEO STATES */
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(false);
  const [paused, setPaused] = useState(false);

  const handlePlay = () => {
    setPlayed(true);

    setTimeout(() => {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }, 300);
  };

  const handlePause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

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
      <div className="container1">
   {/*} <div className="email">
        <p>+ (234) 816 079 1212</p>
        <p>cplexconstructioncompanyltd@email.com</p>
    </div>

    <div className="home">
        <div>
            <img src="./src/assets/IMG-20251019-WA0023.jpg" alt="" />C - PLEX  
            <h6>Design And Construction</h6>
        </div>
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Contacts</p>
        
         <div className='icon'>
              <FaXTwitter size={30} />
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaYoutube size={30} />
            </div>
    </div> */ }
       {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>

        <ul className="mobile-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>

        <div className="mobile-contact">
          <p>+(234) 816 079 1212</p>
          <p>cplexconstructioncompanyltd@email.com</p>
        </div>

        <div className="mobile-socials">
          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
        </div>

      </div>

    {/*<div className="describe">
        <h1>Engineering, Construction, and Project Management</h1>
    </div>
    <div className="describe2">
        <h2>Our Services</h2>
    </div> */}
</div>

<Hero/>

<div className="about-us">
    <div className="about-us2">
        <h5><span>+</span> ABOUT US</h5>
        <h1>We Are More Than <span>4 Years</span> on the Market</h1>
        <h4>We're proud of our reliability and reputation.</h4>
        <p>We are a leading construction company with 30+ years of experience in the industry We are dedicated to providing the highest quality construction services to our customers meeting their special needs on schedule and within their budgets. Client satisfaction is always our first priority.</p>
       
        <Link  to="/moreAboutUs" className='moree'>
        <div className="more">
           More About Us </div></Link>
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
            <img src="/images../assets/IMG-20251019-WA0114.jpg" alt="" />
            <h1><span>12</span></h1>
            <p>awards received</p>
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

            <div className="ul1">
                <p><span>•</span>Commercial</p>
                <p><span>•</span>Residential</p>
                <p><span>•</span>Recreational</p>
                <p><span>•</span>Healthcare</p>
            </div>

            <div className="ul2">
                <p><span>•</span>Civic & Culture</p>
                <p><span>•</span>Institutional</p>
                <p><span>•</span>Heavy Industrial</p>
            </div>

            <h4 className="h4">We've started as a small family-owned construction company  in Alabama and now are one of the biggest and most reliable contractors throughout the USA. If you're looking for an experienced company to implement your project of any complexity, you can count on us.</h4>

            <div className="request">
                <Link to="/contacts" className='rel-link'><div className="re1"> Request a Quote</div></Link>
                <Link to= "/project" className='rel2-link'><div className="re2">Projects <span>+</span></div></Link>
            </div>
        </div>
    </div>
</div>

<section className="projects">
    <div className="latest">
        <h5><span>+</span> LATEST WORKS</h5>
        <h1>Projects We Are Proud Of</h1>
        <h4>Check out our lastest projects to see our style and expertize.</h4>
    </div>

    <div className="project1">
        <div className="pro1">
            <img src="/images/img1.jpg" alt="" />
            <div className="timeless">
                <h5 className='h5'><span>#</span> RENOVATION</h5>
                <h1>Timeless Gray & White Living Room</h1>
                <h4>September, 20, 2024</h4>
                <h5>More About Project <span>#</span></h5>
            </div>
        </div>

        <div className="pro2">
            <img src="/images/img2.jpg" alt="" />
            <div className="gorgeous">
                <h5 className='h5'><span>#</span> REMODELLING</h5>
                <h1>Gorgeous House Remodelling</h1>
                <h4>September, 20, 2024</h4>
                <h5>More About Project <span>#</span></h5>
            </div>
        </div>
    </div>

    <div className="project2">
        <div className="pro3">
            <img src="/images/img3.jpg" alt="" />
            <div className="amber">
                <h5 className='h5'><span>#</span> REMODELLING</h5>
                <h1>Amber House Remodelling</h1>
                <h4>September, 20, 2024</h4>
                <h5>More About Project <span>#</span></h5>
            </div>
        </div>

        <div className="pro4">
            <img src="/images/img4.jpg" alt="" />
            <div className="modern">
                <h5 className='h5'><span>#</span>INTEROR DESIGN</h5>
                <h1>Modern White Bathroom</h1>
                <h4>September, 20, 2024</h4>
                <h5>More About Project <span>#</span></h5>
            </div>
        </div>
    </div>

   <Link to="/project" className="all-pro">
  All Projects
</Link>

</section>

<section className="stay">
    <h5><span>+</span> STAY IN TOUCH</h5>
    <h1>Contact Us To Specify Your Project Details Right Now</h1>
    <Link to= "/contacts" className='stay-link'><h4>Request a Quote</h4></Link>
</section>

<section className="gallery">
    <div className="explore">
        <h5><span>+</span> GALLERY</h5>
        <h1>Explore Our Gallery</h1>
        <h4>Here are some of our favourite pics...</h4>
    </div>

    <div className="pics">
        <img src="/images/img5.jpg" className="img1" />
        <img src="/images/img6.jpg" className="img2" />
        <img src="/images/img7.jpg" className="img3" />
        <img src="/images/img8.jpg" className="im4" />
        <img src="/images/img9.jpg" className="img5" />
        <img src="/images/img10.jpg" className="img6" />
    </div>
</section>

  {/* ===== WORK VIDEO SECTION ===== */}
      <div className="work-video">
        <video
          ref={videoRef}
          src="/images/VID-20251019-WA0124.mp4"
          muted
          loop
        />

        <div className={`tex ${played ? "fade-out" : ""}`}> <span>+</span> OUR VIDEO</div>

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
              placeholder="Message">
              required
           </textarea>

            <button type="submit" className="button">
              Send A Request
            </button>
          </form>
        </div>
      </section>


    <Futa />

    </div>
  )
}

export default home
