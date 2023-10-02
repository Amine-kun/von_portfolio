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
    const getWidth = () =>{
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

    let navbar = document.querySelector('.container-fluid');

    const handleWindowResize = () =>{
      let width = getWidth();
    
      if (width.innerWidth > 820) {
        console.log('xd')
        navbar.classList.add("limitter");
      } else {
        console.log('xd2')
        navbar.classList.remove("limitter");
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
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
