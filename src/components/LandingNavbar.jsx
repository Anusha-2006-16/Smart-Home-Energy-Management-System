import React from 'react'
import "./css/dashboard.css"
import "./css/navbar.css"
import { useNavigate } from 'react-router-dom'

const LandingNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.vj574pc5Rj5oAlKyNysB6QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
        />
        <h2 style={{color:"white"}} onClick={()=>navigate("/")} >
          Smart Home Energy System
        </h2>
      </div>

      <div className="nav-buttons">
        <button className='signup-btn'  onClick={() => navigate("/register")}>Sign Up</button>
        <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
        <button className="contact-btn" onClick={()=>navigate("/contact")}>Contact</button>
        <button className="about-btn" onClick={() => navigate("/landAbout")}>About Us</button> 
      </div>
    </div>
  )
}

export default LandingNavbar
