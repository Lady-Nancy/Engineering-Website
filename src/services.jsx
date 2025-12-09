import React from 'react'
import "./home.css"

const Services = () => {
  return (
    <div>
        <div class="image">
        <div>
            <img src="./src/assets/1.jpg" alt="" />
        </div>
        <div class="sector">
            <h5><span>+</span> SECTORS</h5>
            <h1>Building, Renovation & Improvements</h1>
            <h4>We are proud to be the leading company with more than 30 years of experience. We provide a wide range of high-quality services to the majority of industries while meeting high industry standards.</h4>
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

        <section class="work-video">
    <video id="bg-video" muted>
        <source src="./src/assets/VID-20251019-WA0124.mp4" type="video/mp4" />
    </video>

    <h1 id="tex" class="tex"><span>+</span>OUR VIDEO</h1>
    <h1 id="text" class="text">See Our Work in Action</h1>

    <button id="play-btn" class="play-btn">▶</button>
    <button id="pause-btn" class="pause-btn">⏸</button>
</section>

<script>
{`
const video = document.getElementById("bg-video");
const tex = document.getElementById("tex");
const text = document.getElementById("text");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", () => {
    tex.classList.add("fade-out");
    text.classList.add("fade-out");

    setTimeout(() => {
        video.style.opacity = 1;
        video.play();
        pauseBtn.style.display = "flex";
    }, 300);

    playBtn.style.display = "none";
});

pauseBtn.addEventListener("click", () => {
    if(video.paused) {
        video.play();
        pauseBtn.textContent = "⏸";
    } else {
        video.pause();
        pauseBtn.textContent = "▶";
    }
});
`}
</script>

    </div>
  )
}

export default Services
