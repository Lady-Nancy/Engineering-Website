import React from 'react'
import { Link } from "react-router-dom";


const hero = () => {
  return (
     <div className='con'>
    <div>
       <div className="describe">
        <h1>Engineering, Construction, and Project Management</h1>
    </div>
     <Link to="/service" className="services-box">
    <div className="describe2">
   <h3>Our Services</h3>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default hero
