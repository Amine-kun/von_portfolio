import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";

import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

import {client} from '../../client';

const ProjectDetails2Dark = () => {

  const [data, setData] = useState([]);

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

  useEffect(() => {
    let id = window.location.search.substring(3);


    const query = `*[_type == "work" && _id == '${id}']`;

          client.fetch(query).then((data) => {
            setData(data)
          });
    
    
  }, [])


  return (
    <DarkTheme>
      <NavbarFullMenu />
      <div className="wrapper">
      
        <ProjectDetails2Header projectHeaderData={data[0]}/>
        <ProjectIntroduction projectIntroductionData={data[0]} />
        <ProjectGallery data={data[0]}/>
        
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
