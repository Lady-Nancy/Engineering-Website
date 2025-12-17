import React, { useRef } from 'react';
import './project.css';
import Futa from './futa'

// --- Static Project Grid Components (From Previous Request) ---

// Data for the Commercial projects section (used in the static grid)
const commercialProjects = [
  { id: 1, title: 'Anchor NYC office', subtitle: 'Renovation', imgSrc: './src/assets/commercial1.jpg' },
  { id: 2, title: 'Lamb studio', subtitle: 'Interior Design', imgSrc: './src/assets/commercial2.jpg' },
  { id: 3, title: 'Neal Studio', subtitle: 'Interior Design', imgSrc: './src/assets/commercial3.jpg' },
  { id: 4, title: 'Preconstruction', subtitle: 'Construction', imgSrc: './src/assets/commercial4.jpg' },
  { id: 5, title: 'SPRING Design Studio', subtitle: 'Design-Build', imgSrc: './src/assets/commercial5.jpg' },
  { id: 6, title: 'Edward Cos Campus', subtitle: 'Construction', imgSrc: './src/assets/commercial6.jpg' },
  { id: 7, title: 'Edward Cos Campus', subtitle: 'Construction', imgSrc: './src/assets/commercial7.jpg' },
  { id: 8, title: 'Garage Center', subtitle: 'Construction', imgSrc: './src/assets/commercial8.jpg' },
];

// Data for the Interiors projects section (used in the static grid)
const interiorProjects = [
  { id: 1, title: 'Potter Center', subtitle: 'Renovation', imgSrc: './src/assets/interior1.jpg' },
  { id: 2, title: 'Lloyd Center', subtitle: 'Interior Design', imgSrc: './src/assets/interior2.jpg' },
  { id: 3, title: 'Lloyd Center', subtitle: 'Interior Design', imgSrc: './src/assets/interior3.jpg' },
  { id: 4, title: 'Lloyd Center', subtitle: 'Interior Design', imgSrc: './src/assets/interior4.jpg' },
];

// Component for an individual project card in the static grid
const StaticProjectCard = ({ title, subtitle, imgSrc }) => (
  <div className="project-card static-card">
    <div className="project-image-wrapper">
      <img src={imgSrc} alt={title} className="project-image" />
    </div>
    <h3 className="project-title">{title}</h3>
    <p className="project-subtitle">{subtitle}</p>
  </div>
);

// Component for the Commercial and Interiors section
const StaticProjectsSection = () => (
    <>
        <section className="project-section commercial-section">
            <p className="section-category-small"><span>+</span>COMMERCIAL</p>
            <h2 className="section-title">Commercial</h2>
            <p className="section-description">
                We have great experience in implementing commercial construction projects.
            </p>
            
            <div className="project-grid">
                {commercialProjects.map(project => (
                    <StaticProjectCard 
                        key={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        imgSrc={project.imgSrc}
                    />
                ))}
            </div>
        </section>

        <div className="section-separator"></div>

        <section className="project-section interiors-section">
            <p className="section-category-small"><span>+</span>INTERIORS</p>
            <h2 className="section-title">Interiors</h2>
            <p className="section-description">
                Modern or classy? Check out our recent projects and define your favorite style!
            </p>
            
            <div className="project-grid interior-grid">
                {interiorProjects.map(project => (
                    <StaticProjectCard 
                        key={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        imgSrc={project.imgSrc}
                    />
                ))}
            </div>
        </section>
    </>
);


// --- Residential Carousel Components (Your New Code) ---

// Component for a single project card in the carousel
const ResidentialProjectCard = ({ imageUrl, title, category }) => (
  <div className="project-card carousel-card">
    <div className="card-image-wrapper">
      <img src={imageUrl} alt={title} className="card-image" />
    </div>
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-category">{category}</p>
    </div>
  </div>
);

// Main Residential Projects section component (Carousel)
const ResidentialProjectsSection = () => {
  const projectsListRef = useRef(null);
  const scrollStep = 380; 

  const residentialProjects = [
    { id: 1, imageUrl: './src/assets/s1.jpg', title: 'Cervantes Home Renovation', category: 'Renovation' },
    { id: 2, imageUrl: './src/assets/residential2.jpg', title: 'Amber House Remodeling', category: 'Remodeling' },
    { id: 3, imageUrl: './src/assets/residential3.jpg', title: 'Denver Bathroom Remodeling', category: 'Bathroom Remodeling' },
    { id: 4, imageUrl: './src/assets/s4.jpg', title: 'Luxury Kitchen Refit', category: 'Kitchen Design' },
    // Add more projects to enable scrolling
  ];

  const scroll = (direction) => {
    if (projectsListRef.current) {
      const currentScroll = projectsListRef.current.scrollLeft;
      const newScroll = currentScroll + (direction === 'left' ? -scrollStep : scrollStep);
      
      projectsListRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="projects-section-container residential-carousel-section">
        <div className='under'></div>
      <div className="projects-header">
        <p className="header-category-label">
          <span className="plus-sign">+</span> RESIDENTIAL
        </p>
        <h2 className="header-title">Residential</h2>
        <p className="header-subtitle">
          Check out our latest implemented residential projects below.
        </p>
      </div>

      <div className="projects-carousel-wrapper">
        <button 
          className="carousel-arrow left-arrow"
          onClick={() => scroll('left')}
          aria-label="Previous Project"
        >
          &lt; 
        </button> 
        
        <div className="projects-list" ref={projectsListRef}>
          {residentialProjects.map((project) => (
            <ResidentialProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
        
        <button 
          className="carousel-arrow right-arrow"
          onClick={() => scroll('right')}
          aria-label="Next Project"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};


// --- Main Exported Component ---
const Project = () => {
    return (
        <div className="project-page-container">
            {/* The new Residential Carousel section */}
            <ResidentialProjectsSection />

            {/* A separator between the two major styles/sections */}
            <div className="section-separator light-separator"></div>

            {/* The old Commercial and Interiors Static Grid sections */}
            <StaticProjectsSection />

            <Futa/>
        </div>
    );
};


export default Project;