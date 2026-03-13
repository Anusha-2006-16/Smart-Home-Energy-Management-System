import React from "react";
import "./css/testimonial.css"

export default function Testimonial() {
  return (
    <section className="testimonial-section">
    
      {/* Top Section */}
      <div className="testimonial-intro">
        <h1 style={{color:"black"}}>Our Clients</h1>
        <p>
          We value our customers and their trust. Here’s what some of our users
          have to say about our services.
        </p>
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/310084133/original/ad6f7022d7fc61d98683f22ac33ba315ad24b7d3/design-modern-logo-and-brand-identity.png"
          alt="Company Logo"
        />
      </div>

      {/* Heading Section */}
      <div className="testimonial-heading">
        <h3>What Our Users Have Said About Us</h3>
        <h1>Testimonials</h1>
      </div>

      {/* Cards Section */}
      <div className="testimonial-cards">

        <div className="testimonial-card">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            aliquid cum neque eius! Debitis animi maxime nostrum rerum non!"
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, et. Id, soluta ratione perferendis recusandae
             similique accusantium consequatur voluptatem error.
          </p>
          <h4>Karthik</h4>
          <span>Software Engineer</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            aliquid cum neque eius! Debitis animi maxime nostrum rerum non!"
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            aliquid cum neque eius! Debitis animi maxime nostrum rerum non!"
          </p>
          <h4>Rahul</h4>
          <span>Artist</span>
        </div>

        <div className="testimonial-card">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            aliquid cum neque eius! Debitis animi maxime nostrum rerum non!"
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            aliquid cum neque eius! Debitis animi maxime nostrum rerum non!"
          </p>
          <h4>James</h4>
          <span>Web Developer</span>
        </div>

      </div> 
    </section>
  );
}