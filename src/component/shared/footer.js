import React from "react";
import { Link } from 'react-router-dom';

import logo from "../../img/logo.png";

const Footer = () => {
    return (
      <>
<footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 pr-5 logo_part">
              <img src={logo} />
              <p>We will ensure your ideas and vision become a reality and can achieve local as well as global success.</p>
              <div class="social_icon mt-4">
                <a class="fb-ic">
                  <i class="fab fa-facebook-f fa-lg white-text mr-3 fa-2x">                    
                  </i>
                </a>

                <a class="gplus-ic">
                  <i class="fab fa-google-plus-g fa-lg white-text mr-3 fa-2x">                   
                  </i>
                </a>

                <a class="li-ic">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-3 fa-2x">                 
                  </i>
                </a>

                <a class="ins-ic">
                  <i class="fab fa-instagram fa-lg white-text mr-3 fa-2x">                    
                  </i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-5 col-sm-5 pl-5 footer_link">
              <h6>Our Services</h6>
              <ul class="list-unstyled">
                <li><a href="#!">Web Design</a></li>
                <li><a href="#!">Development</a></li>
                <li><a href="#!">Graphic Design</a></li>
                <li><a href="#!">Branding</a></li>
                <li><a href="#!">Creative Solution</a></li>  
              </ul>
            </div>

            <div class="col-lg-4 col-md-7 col-sm-7 footer_link">
              <h6>Contact Info </h6>
              <ul class="list-unstyled">
                <li> C/2 - 105 Sainath Colony , Kolar Road , Bhopal</li>
                <li>deepaksinghparmar1999@gmail.com</li>               
                <li> +91 9893781955 , +91 1547778458</li>
              </ul>
            </div>
          </div>
          <div className="row">
          <div class="footer-copyright col-12 text-center">
          <p> © 2021 Copyright <a href="#!"> TechifyStudio.com </a></p>
        </div>
        </div>
        </div>
       
      </footer>
   </>
    );
};   
export default Footer;
