import React from 'react'
import "./css/privacy.css"
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'
const Privacy = () => {
  return (
     <div className="privacy-container">
        <HomeNavbar/>
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: February 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our Smart Home Energy Management System. Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          store, and protect your information when you use our system.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Name, email address, and contact details</li>
          <li>Energy consumption and smart meter data</li>
          <li>IoT device identifiers and usage statistics</li>
          <li>IP address, browser type, and system logs</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To monitor and optimize energy consumption</li>
          <li>To provide real-time analytics and alerts</li>
          <li>To improve system performance</li>
          <li>To enhance user experience and security</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage and Security</h2>
        <p>
          We implement appropriate security measures including encrypted
          communication, secure cloud storage, and access control mechanisms to
          protect your data.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell your personal data. Information may only be shared
          with trusted service providers or when required by law.
        </p>
      </section>

      <section>
        <h2>6. User Rights</h2>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of incorrect data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section>
        <h2>7. Cookies and Tracking</h2>
        <p>
          Our system may use cookies to improve functionality and analyze usage
          patterns. Users can disable cookies through browser settings.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          reflected with a revised “Last Updated” date.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at:
        </p>
        <p>Email: support@yourdomain.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>
      <Footer/>
    </div>
  )
}

export default Privacy
