import React from 'react'
import LandingNavbar from './LandingNavbar'
import Footer from './Footer'
import "./css/landing.css"

export default function LandingAbout() {
  return (
     <>
   <LandingNavbar/>
       <div className="about-container" style={{marginTop:"30px"}}>
        
      <h1>About Smart Home Energy Management System</h1>

      <p className="about-intro">
        The Smart Home Energy Management System is a web-based application
        designed to monitor, control, and optimize household energy usage.
        It helps users track energy consumption, manage smart devices,
        reduce electricity costs, and improve energy efficiency.
      </p>

      <div className="features">

        <div className="feature-card">
          <h3>⚡ Real-Time Energy Monitoring</h3>
          <p>
            Track total energy consumption (kWh) in real-time and monitor
            usage trends for better control.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔌 Device Control</h3>
          <p>
            Turn ON/OFF smart devices like Lights, AC, and Fans directly
            from the dashboard.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Energy Usage Analytics</h3>
          <p>
            View daily, weekly, and monthly energy consumption reports
            with graphical representation.
          </p>
        </div>

        <div className="feature-card">
          <h3>💰 Cost Estimation</h3>
          <p>
            Automatically calculate estimated electricity cost based on
            active devices and consumption.
          </p>
        </div>

        <div className="feature-card">
          <h3>📈 Efficiency Score</h3>
          <p>
            Get an energy efficiency score based on active devices and
            usage optimization.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔐 Secure Authentication</h3>
          <p>
            Secure login and registration system with encrypted passwords
            and protected user dashboard.
          </p>
        </div>

        <div className="feature-card">
          <h3>👤 User Dashboard</h3>
          <p>
            Personalized dashboard showing user-specific device usage,
            statistics, and energy reports.
          </p>
        </div>

        <div className="feature-card">
          <h3>🌍 Eco-Friendly Optimization</h3>
          <p>
            Helps reduce carbon footprint by encouraging energy-efficient
            device usage.
          </p>
        </div>

      </div>
    </div>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}
