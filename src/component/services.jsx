import { useRef, useState } from "react";
import "./home.css";
import Futa from './futa'

const Services = () => {
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
        <div className="image">
        <div>
            <img src="./src/assets/1.jpg" alt="" />
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
          src="./src/assets/VID-20251019-WA0124.mp4"
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
