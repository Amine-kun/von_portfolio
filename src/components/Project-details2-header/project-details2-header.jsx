import React from "react";
import Link from "next/link";
import {urlFor} from '../../client';

const ProjectDetails2Header = ({ projectHeaderData }) => {
  console.log(projectHeaderData)
  return (
    <>
    {projectHeaderData
     ? <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{position:'relative'}}
      data-overlay-dark="4"
       >
       <img src={urlFor(projectHeaderData?.bg)} className="img_over" alt="details"/>
       <div className="overlay_over"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{projectHeaderData?.sub}</h6>
              <h2>{projectHeaderData?.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <span >
                  <a>{projectHeaderData?.client}</a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{projectHeaderData?.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {projectHeaderData?.categories?.map((cat, index) => (
                    <a>
                      {cat}
                      {projectHeaderData.categories.length != index + 1
                        ? " ,"
                        : ""}
                    </a>
                ))}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {projectHeaderData?.tags}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    :<p>...</p>}  
    </>
  );
};

export default ProjectDetails2Header;
