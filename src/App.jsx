import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './nav.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Services from './services.jsx'
import Projects from './projects.jsx'
import Contacts from './contacts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
  )
}

export default App;
