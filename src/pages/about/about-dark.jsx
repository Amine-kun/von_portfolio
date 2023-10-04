import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import Team from "../../components/Team/team";
import MinimalArea from "../../components/Minimal-Area/minimal-area";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const About = () => {
  
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
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
