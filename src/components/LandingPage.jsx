import React from 'react' 
import LandingNavbar from './LandingNavbar'
import Footer from './Footer'
import "./css/landing.css"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingNavbar/>

      <div className="hero-section">
        <h1>
          Welcome To Smart Home Energy Management System
        </h1>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
