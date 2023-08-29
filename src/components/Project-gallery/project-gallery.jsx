
import React from "react";
import {urlFor} from '../../client'

const ProjectGallery = ({data}) => {
  return (
   <>
    {data
      ?  <section className="projdtal">
            <div className="popup-img">
              <div className="row">
                
                {data?.images.map((img,i)=>(

                  <a className="col-md-3 popimg" key={i}>
                    <img alt={i} src={urlFor(img)} />
                  </a>

                  ))}
                
              </div>
            </div>
          </section>
      : <p>...</p>}
   </>
  );
};

export default ProjectGallery;
