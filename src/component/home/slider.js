import React from "react";
import { Link } from 'react-router-dom';


import banner_bg from "../../img/banner_bg.jpg";
import banner_side_img from "../../img/banner_side_img.png";

const Slider = () => {
    return(
<section id="top_slider"> 
<img className="bg_img" src={banner_bg} alt="bg img" />
  <div className="container">  
      <div className="row">
        <div className="col-sm-6 banner_txt">
          <h1>Re-Define Your Business With Emerging Technologies</h1>
          <span> Revolutionize Your Digital World</span>
          <Link to="/Services" className="orange_btn">Discover Now</Link>
        </div>
        <div className="col-sm-6 banner_img pt-3">
        <img src={banner_side_img} alt="First slide" />
        </div>
      </div>   
  </div>
</section>
    );
};
export default Slider;