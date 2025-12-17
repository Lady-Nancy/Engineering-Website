import React from "react";
import "./service.css";

export default function Services() {
  const data = [
    {
      img: "./src/assets/s1.jpg",
      title: "Preconstruction",
      text: "We start with accurate project planning of your dream construction design.",
    },
    {
      img: "./src/assets/s2.jpg",
      title: "Construction",
      text: "Our mission is to make your construction process as smooth as possible.",
    },
    {
      img: "./src/assets/s3.jpg",
      title: "Design-Build",
      text: "We have experience and industry network to deal with comprehensive project demands.",
    },
    {
      img: "./src/assets/s4.jpg",
      title: "General Contracting",
      text: "We make responsible decisions every step of the way to achieve quality construction.",
    },
    {
      img: "./src/assets/s5.jpg",
      title: "Interior Design",
      text: "Need a unique interior design? We can turn any idea into reality.",
    },
    {
      img: "./src/assets/s6.jpg",
      title: "Construction Management",
      text: "From meetings with architects and engineers to project completion, we meet all goals.",
    },
    {
      img: "./src/assets/s7.jpg",
      title: "Property Development",
      text: "We work with well-known funders, builders, and owners to optimize the whole life-cycle.",
    },
    {
      img: "./src/assets/s8.jpg",
      title: "Project Estimation",
      text: "Our huge database of projects allows us to create budget estimates with accuracy.",
    },
  ];

  return (
    <div className="services-container">
      <p className="section-tag"><span>+</span> WHAT WE DO</p>
      <h2 className="section-title">High-Performance Services</h2>
      <p className="section-desc">
        We can do anything related to construction and renovation. See the list of our services below:
      </p>

      <div className="services-grid">
        {data.map((item, i) => (
          <div className="service-card" key={i}>
            <img src={item.img} alt={item.title} className="service-img" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#" className="learn-more">Learn More <span>+</span></a>
          </div>
        ))}
      </div>
    </div>
  );
}
