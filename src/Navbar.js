import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className="navbar">
          <div>
          <Link to="/input"> <p>input</p> </Link>
          </div>
          <div>
          <Link to="/showinput"><p>showinput</p></Link>
          </div>
      
    </div>
  )
}

export default Navbar
