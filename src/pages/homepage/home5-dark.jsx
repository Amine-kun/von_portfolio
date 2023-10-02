import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Works3 from "../../components/Works3/works3";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import Services3 from "../../components/Services3/services3";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";


const Homepage5 = () => {

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
      <Intro4 />
      <AboutUs3 />
      <Works3 />
      <Services3 />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage5;
