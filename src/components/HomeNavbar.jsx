import React from 'react'
import "./css/navbar.css"
import { useNavigate } from 'react-router-dom'

export default function HomeNavbar() {
    const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="logo-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.vj574pc5Rj5oAlKyNysB6QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
        />
        {/* <span><i className="fa-jelly-fill fa-regular fa-house"></i></span> */}
        <h2 style={{color:"white"}} onClick={()=>navigate("/home")} >
          Smart Home Energy System
        </h2>
      </div>

      <div className="nav-buttons">

        <button className="home-btn" onClick={()=>navigate("/home")}> <span><i className="fa-solid fa-house"></i></span> </button>
      <button className="about-btn" onClick={()=>navigate("/about")}>
  <i className="fa-solid fa-circle-info"></i> About
</button>
      <button className="test-btn" onClick={()=>navigate("/testimonials")}>
  <i className="fa-solid fa-star"></i> Testimonials
  </button>

<button className="faq-btn" onClick={()=>navigate("/faqs")}>
  <i className="fa-solid fa-circle-question"></i> FAQs
</button>

<button className="contact-btn" onClick={()=>navigate("/contact")}>
  <i className="fa-solid fa-phone"></i> Contact
</button>

        <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
        <button className="signup-btn" onClick={()=>navigate("/register")}>Signup</button>
        <button className='logout-btn' onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  )
}
