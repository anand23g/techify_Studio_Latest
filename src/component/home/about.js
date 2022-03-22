import React from "react";
import { Link } from 'react-router-dom';

import about_side_img from "../../img/about_side_img.png";

const AboutPart = () => {
    return(
  <section id="who_we">
          <div className="container">
            <div className="white_bx"></div>
            <div className="row">
              <div className="col-md-5 order-md-1 order-sm-2 order-2 text-center">
                <img src={about_side_img} alt="img" />
              </div>
              <div className="col-md-7 order-md-2 order-sm-1 order-1 about_text pl-5 pt-5">
                <div className="heading">
                <span>About TECHIFY STUDIO</span>
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
    );
};
export default AboutPart;