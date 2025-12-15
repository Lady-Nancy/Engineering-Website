import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./component/nav.jsx";

import Home from "./component/home.jsx";
import Hero from "./component/hero.jsx";
import About from "./component/about.jsx";
import Services from "./component/services.jsx";
import Projects from "./component/projects.jsx";
import Contacts from "./component/contacts.jsx";
import Futa from './component/futa.jsx'

// Hidden pages (only open on click)
import Ser from "./component/service.jsx";
import MoreAboutUs from "./component/moreAboutUs.jsx";
import Project from "./component/project.jsx";

function App() {
  return (
    <Router>
      {/* Always visible */}
      <Nav />

      {/* Pages */}
      <Routes>
        {/* Main pages (nav) */}
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/futa" element={<Futa />} />

        {/* Hidden pages (open only by click) */}
        <Route path="/service" element={<Ser />} />
        <Route path="/moreAboutUs" element={<MoreAboutUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
