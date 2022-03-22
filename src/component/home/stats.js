import React from "react";
import { Link } from 'react-router-dom';
import i_1 from "../../img/i_1.png";
import i_2 from "../../img/i_2.png";
import i_3 from "../../img/i_3.png";
import i_4 from "../../img/i_4.png";

const Stats = () => {
    return(
      <section id="stats">
      <div className="container">
        <div className="row">
      <div className="single-counterup col-md-3 col-sm-3 col-6 text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="counterup-content">
          <i>
            <img src={i_1} />
          </i>
          <span className="counter">30 +</span>
          <h5>Total Projects</h5>
        </div>
      </div>
      <div className="single-counterup col-md-3 col-sm-3 col-6 text-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="counterup-content">
          <i>
            <img src={i_2} />
          </i>
            <span class="counter">100%</span>
          <h5>Project Completed</h5>
        </div>
      </div>
      <div className="single-counterup col-md-3 col-sm-3 col-6 text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="counterup-content">
          <i>
            <img src={i_3} />
          </i>           
            <span className="counter">50+</span>                        
          <h5>Satisfied Customer</h5>
        </div>
      </div>
      <div className="single-counterup col-md-3 col-sm-3 col-6 text-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="counterup-content">
          <i>
            <img src={i_4} />
          </i>            
            <span className="counter">50+</span>
          <h5>Team Members</h5>
        </div>
      </div>
      </div>
      </div>
    </section>
    );
};
export default Stats;