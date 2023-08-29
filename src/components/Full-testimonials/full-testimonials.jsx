/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        
                        <h6 className="author-name color-font">
                          Ahmed Ali
                        </h6>
                        <span className="author-details">
                          Founder, Manzili Hotel
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I'm absolutely pleased with Von Tech's service, they walk you through the entire process untill your are satisfied with your product, definitely recommend it.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        
                        <h6 className="author-name color-font">
                          Ahmed Ali
                        </h6>
                        <span className="author-details">
                          Founder, Manzili Hotel
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I'm absolutely pleased with Von Tech's service, they walk you through the entire process untill your are satisfied with your product, definitely recommend it.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                       
                        <h6 className="author-name color-font">
                          Ahmed Ali
                        </h6>
                        <span className="author-details">
                          Founder, NextCars
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    This is my second business with this agency, No issues so far, looking forward for more future businesses.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <h6 className="author-name color-font">
                          Amine tagh
                        </h6>
                        <span className="author-details">
                          Co-founder, Co-working space
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Did not thought there will be a solution to my problem, untill i got recommended to Von Tech, Happy with the service.
                  </p>
                </div>
               
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
