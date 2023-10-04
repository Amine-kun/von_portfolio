/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const Contact = () => {
  
  React.useEffect(() => {

    let navbar = document.querySelector('.container-fluid');
    let container = document.querySelector('.topnav');

    container.classList.add('nav_cus');

    const getWidth = () =>{
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

    const getScroll = () =>{
      return window.pageYOffset;
    }

    const handleWindowResize = () =>{
      let width = getWidth();
    
      if (width.innerWidth > 820) {
        navbar.classList.add("limitter");
      } else {
        navbar.classList.remove("limitter");
      }
    }

    const handleScrolling = () =>{
      let offset = getScroll()
      if(offset >= 100 ){
        container.classList.add("nav_scroll");
      } else {
        container.classList.remove("nav_scroll");
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScrolling)

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScrolling);
      container.classList.remove('nav_cus');
    };
  }, []);

  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53940.6513922368!2d-6.373229!3d32.33090430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1684676575135!5m2!1sen!2sma"
            loading="lazy"
          ></iframe>
        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Contact;
