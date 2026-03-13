import React from "react";
import "./css/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* Column 1 */}
        <div className="smartHome">
          <h1>SmartHome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit eveniet tempore architecto eligendi vitae
            perferendis laborum mollitia.
          </p>

          <form>
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Column 2 */}
        <div className="permaLinks">
          <h2>Permalinks</h2>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQs</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Column 3 */}
        <div className="primacy">
          <h2>Primacy</h2>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Condition</a>
          <a href="#">Refund Policy</a>
        </div>

        {/* Column 4 */}
        <div className="contactUs">
          <h2>Contact Us</h2>
          <p>+03452678818</p>
          <p>smarthome@gmail.com</p>

          <div className="socialIcons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr style={{marginTop:"-350px"}}/>

      {/* Copyright */}
      <p className="copyright">
        © {new Date().getFullYear()} SmartHome. All Rights Reserved.
      </p>


      <div>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms Of Use</a>
        <a href="/about">About Us</a>
        <a href="/faqs">FAQ's</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;