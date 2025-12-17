import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavLayout from "./NavLayout";

import Home from "./component/home.jsx";
import Hero from "./component/hero.jsx";
import About from "./component/about.jsx";
import Services from "./component/services.jsx";
import Projects from "./component/projects.jsx";
import Contacts from "./component/contacts.jsx";
import Futa from "./component/futa.jsx";

// Hidden pages
import Ser from "./component/service.jsx";
import MoreAboutUs from "./component/moreAboutUs.jsx";
import Project from "./component/project.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* ONLY pages with navbar */}
        <Route element={<NavLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Pages WITHOUT navbar */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/futa" element={<Futa />} />

        {/* Hidden pages */}
        <Route path="/service" element={<Ser />} />
        <Route path="/moreAboutUs" element={<MoreAboutUs />} />
        <Route path="/project" element={<Project />} />

      </Routes>
    </Router>
  );
}

export default App;
