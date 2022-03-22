/* header files */
import React from "react";
import "../component/css/services.css";
import Footer from "../component/shared/footer";
import Header from "../component/shared/header";

/* img path */
import design from "../img/design.png";
import app_dev from "../img/app_dev.png";
import digital_market from "../img/digital_market.png";
import services_bg from "../img/services_bg.jpg";
import bootstrap from "../img/bootstrap.png";
import material from "../img/material.png";
import semantic from "../img/semantic.png";
import logo from "../img/logo.png";

import about_side_img from "../img/about_side_img.png";

const AboutPage = () => {
  return (
    <>
    <Header />
      <section id="inner_head">
        <img src={services_bg} alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">        
          <h2>About Us</h2>
          </div>
          </div>
        </div>
      </section>
      <section id="who_we" className="about_page">
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-md-1 order-sm-2 order-2 text-center">
                <img src={about_side_img} alt="img" />
              </div>
              <div className="col-md-7 order-md-2 order-sm-1 order-1 about_text pl-5 pt-5">
                <div className="heading">
                  <h2>Who We Are</h2>
                  </div>
                  <p>
                    A team of creatives, here to help you Digitally transform
                    your business with the help of innovative and
                    technology-driven ideas. We help you build a comprehensive
                    digital product to Scale and digitize your business
                    globally.</p>
                    <br />
                    <p> Our team is able to assist you with ground level
                    validation, product planning, designing, product deployment
                    and digital publication.
                    </p>
                    <br />
                    <p>We will ensure your ideas and vision become a reality and
                    can achieve local as well as global success.{" "}
                  </p>
                </div>
              </div>
            
              <div className="row pt-5">
              <div className="col-md-5 order-md-2 order-sm-2 order-2 text-center">
                <img src={about_side_img} alt="img" />
              </div>
              <div className="col-md-7 order-md-1 order-sm-1 order-1 about_text pl-5 pt-5">
                <div className="heading">
                  <h2>Who We Are</h2>
                  </div>
                  <p>
                    A team of creatives, here to help you Digitally transform
                    your business with the help of innovative and
                    technology-driven ideas. We help you build a comprehensive
                    digital product to Scale and digitize your business
                    globally.</p>
                    <br />
                    <p> Our team is able to assist you with ground level
                    validation, product planning, designing, product deployment
                    and digital publication.
                    </p>
                    <br />
                    <p>We will ensure your ideas and vision become a reality and
                    can achieve local as well as global success.{" "}
                  </p>
                </div>
              </div>
              <div className="row pt-5">
              <div className="col-md-5 order-md-1 order-sm-2 order-2 text-center">
                <img src={about_side_img} alt="img" />
              </div>
              <div className="col-md-7 order-md-2 order-sm-1 order-1 about_text pl-5 pt-5">
                <div className="heading">
                  <h2>Who We Are</h2>
                  </div>
                  <p>
                    A team of creatives, here to help you Digitally transform
                    your business with the help of innovative and
                    technology-driven ideas. We help you build a comprehensive
                    digital product to Scale and digitize your business
                    globally.</p>
                    <br />
                    <p> Our team is able to assist you with ground level
                    validation, product planning, designing, product deployment
                    and digital publication.
                    </p>
                    <br />
                    <p>We will ensure your ideas and vision become a reality and
                    can achieve local as well as global success.{" "}
                  </p>
                </div>
              </div>
            </div>
      </section>


     <Footer />
     
    </>
  );
};

export default AboutPage;
