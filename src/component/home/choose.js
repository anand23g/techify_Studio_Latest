import React from "react";
import { Link } from 'react-router-dom';
import member from "../../img/member.png";
import why_choose from "../../img/why_choose.png";
import speed from "../../img/speed.png";
import data from "../../img/data.png";

const ChoosePart = () => {
    return(
  
      <section id="why_choose">
          <div className="container">           
            <div className="row">             
              <div className="col-lg-6 about_txt">
                <div className="heading">
                <span>WHY CHOOSE US?</span>
                  <h2> What Is It?</h2>
                  </div>
                  <p>
                  Our sphere of work revolves around the core pillar of
                    Automation, Intelligence, Cloud, E-commerce development, and
                    cutting- edge digital marketing and beyond. We provide robust and secure business products and
                    also assist in creating a strategy that yields profitable
                    outcomes
                    </p>
                    <br />
                    <p>An order to ensure your vision is brought to life we
                    will commence with a brainstorming session in person or
                    virtually. Once your specifications have been understood we
                    will ensure that you are presented with web pages or app
                    pages which you can approve or change to suit your needs. At
                    every stage we ensure you are given a truly visual
                    experience.
                  </p>
                  <div className="feature_point">
                    <ul>
                      <li><img src={member} alt="img" /> <h6>Solid Team</h6></li>
                      <li><img src={data} alt="img" /> <h6>Data Driven</h6></li>
                      <li><img src={speed} alt="img" /> <h6>Speed & Performance</h6></li>
                      </ul>
              </div>
                </div>
                <div className="col-lg-6 side_img text-center pt-3">
                <img
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  src={why_choose}
                />
              </div>
             </div>            
            </div>
      </section>
    );
};
export default ChoosePart;