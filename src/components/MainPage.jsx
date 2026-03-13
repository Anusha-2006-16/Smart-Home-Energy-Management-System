import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomeNavbar from './HomeNavbar';
import Home from './Home';
import About from './About';
import Testimonial from './Testimonial';
import Faqs from './Faqs';
import Contact from './Contact';
import Footer from './Footer';

export default function MainPage() {
    const location=useLocation();
    useEffect(()=>{
        const id=location.pathname.replace("/","");
        const element=document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior:"smooth"});
        }
    },[location]);
  return (
   
   <>
  <HomeNavbar />
  <div style={{ marginTop: "70px" }}>
    <section id="home">
      <Home />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="testimonials">
      <Testimonial />
    </section>

    <section id="faqs">
      <Faqs />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </div>
  <Footer />
</>
  )
}
