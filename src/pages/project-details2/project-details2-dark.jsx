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

import {client} from '../../client';

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  useEffect(() => {
    let id = window.location.search.substring(3);


    const query = `*[_type == "work" && _id == '${id}']`;

          client.fetch(query).then((data) => {
            setData(data)
          });
    
    
  }, [])


  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
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
