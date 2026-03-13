import React from 'react'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

export default function Terms() {
  return (
     <div>
        <HomeNavbar/>
      <h1>Terms of Use</h1>
      <p><strong>Last Updated:</strong> February 2026</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Smart Home Energy Management System,
          you agree to comply with and be bound by these Terms of Use.
          If you do not agree with these terms, please do not use the system.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          The Smart Home Energy Management System provides tools to monitor,
          analyze, and optimize household energy consumption through smart
          devices and data analytics.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>You must provide accurate and complete information.</li>
          <li>You are responsible for maintaining account confidentiality.</li>
          <li>You agree not to misuse or attempt to disrupt the system.</li>
          <li>You must comply with all applicable laws and regulations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All content, software, and system design related to the Smart Home
          Energy Management System are the intellectual property of the
          organization and are protected by applicable copyright laws.
        </p>
      </section>

      <section>
        <h2>5. Data Usage</h2>
        <p>
          Energy consumption data and related analytics are used solely to
          improve system performance and user experience. Please refer to
          our Privacy Policy for detailed information about data handling.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          We are not responsible for any direct, indirect, incidental,
          or consequential damages arising from the use or inability to use
          the system, including device failures or data inaccuracies.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to the system
          if users violate these Terms of Use or engage in unauthorized activities.
        </p>
      </section>

      <section>
        <h2>8. Modifications to Terms</h2>
        <p>
          We may update these Terms of Use at any time. Continued use of
          the system after changes indicates acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and interpreted in accordance
          with the applicable laws of your jurisdiction.
        </p>
      </section>

      <section>
        <h2>10. Contact Information</h2>
        <p>
          For any questions regarding these Terms of Use, please contact us at:
        </p>
        <p>Email: support@yourdomain.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </section>
      <Footer/>
    </div>
  )
}
