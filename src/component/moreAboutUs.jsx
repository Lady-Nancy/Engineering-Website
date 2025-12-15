import React from 'react';
import './moreAboutUs.css';

const MoreAboutUs = () => {
  return (
    <section className="about-us-section">
      {/* Header Area */}
      <div className="about-us-header">
        <p className="sub-title">+ VALUES</p>
        <h1 className="main-title">Our Values</h1>
        <p className="description-text">
          We have come a long way from a small family-owned company to one of the most famous companies on the market.
        </p>
      </div>

      {/* Vision and Mission Cards Container */}
      <div className="cards-container">
        
        {/* Our Vision Card */}
        <div className="value-card vision-card">
          <div className="icon-container">
            {/* Placeholder for 'Vision' Icon (e.g., a gear or house under construction) */}
            <div className="icon-placeholder vision-icon">
                <span className="icon-symbol">🏗️</span>
            </div>
          </div>
          <h2 className="card-title">Our Vision</h2>
          <p className="card-text">
            Our vision is to be the leading world's contractor and employer of
            choice with the ability to provide successful construction projects
            globally. We use the best possible materials and high-end
            technologies to ensure that our clients get the best results.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="value-card mission-card">
          <div className="icon-container">
            {/* Placeholder for 'Mission' Icon (e.g., a completed building) */}
            <div className="icon-placeholder mission-icon">
                <span className="icon-symbol">🏛️</span>
            </div>
          </div>
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            Our mission is to satisfy our clients through excellent service,
            integrated solutions, and the highest quality. We are focused on
            long-term relationships with clients delivering our promises. We
            strive to build structures that will last for decades and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUs;