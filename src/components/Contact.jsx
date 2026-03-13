import React, { useState } from "react";
import "./css/contact.css"
function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
   <> 
    <div style={styles.page}>

      <h1 style={styles.heading}>Contact Us</h1>

      <div style={styles.container}>

        {/* Contact Form */}
        <div style={styles.formCard}>
          <h2>Send Us a Message</h2>

          {submitted && (
            <p style={{ color: "lightgreen" }}>
              ✅ Your message has been submitted successfully!
            </p>
          )}

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              required
              style={styles.input}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              required
              style={styles.input}
            />

            <label>Message</label>
            <textarea
              name="query"
              rows="5"
              placeholder="Write your query here..."
              required
              style={styles.textarea}
            ></textarea>

            <button type="submit" style={styles.button}>
              Send
            </button>

          </form>
        </div>

        {/* Company Details */}
        <div style={styles.detailsCard}>
          <h2>Company Details</h2>

          <p><b>📍 Address:</b> Ghatkesar, Hyderabad</p>
          <p><b>📧 Email:</b> support@smartenergy.com</p>
          <p><b>📞 Phone:</b> +91 9XXXXXXXXX</p>
          <p><b>🕒 Support:</b> Mon – Fri | 9 AM – 6 PM</p>
          <p><b><span><i className="fa-solid fa-envelope"></i></span>Chat With Us</b>
            <p>send us an email and we'll respond
              shortly.
            </p>
            <p>anushaeraka123@gmail.com</p>
          </p>
          {/* Social Media */}
          <div style={styles.social}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/170/864/original/instagram-icon-logo-symbol-free-png.png"
              alt="Instagram"
              style={styles.icon}
            />
            <img
              src="https://freepnglogo.com/images/all_img/1707226109new-twitter-logo-png.png"
              alt="Twitter"
              style={styles.icon}
            />
            <img
              src="https://www.freepnglogos.com/uploads/linkedin-symbol-logo-22.png"
              alt="LinkedIn"
              style={styles.icon}
            />
            <img
              src="https://www.freeiconspng.com/uploads/facebook-logo-3.png"
              alt="Facebook"
              style={styles.icon}
            />
          </div>
        </div>

      </div>
    </div> 
   </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url("https://images.unsplash.com/photo-1558002038-1055907df827")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "40px",
    marginTop:"50px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  },
  formCard: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    backdropFilter: "blur(8px)"
  },
  detailsCard: {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    backdropFilter: "blur(8px)"
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0 15px 0",
    borderRadius: "5px",
    border: "none"
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "8px 0 15px 0",
    borderRadius: "5px",
    border: "none"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00c6ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  social: {
    marginTop: "15px",
    display: "flex",
    gap: "15px"
  },
  icon: {
    height: "25px",
    cursor: "pointer"
  }
};

export default Contact;
