import React from "react";
import { Link } from 'react-router-dom';
import Interface from "../../img/interface.png";
import marketMonitor from "../../img/market_moni.png";
import seoOpti from "../../img/seo_opti.png";
import webDev from "../../img/web_dev.png";
import DigitalMarket from "../../img/degi_market.png";

const Services = () => {
    return(
  <section id="services">
        <div className="container">
          <div className="row">
          <div className="col-12 text-center heading">
            <span>Our Services</span>            
            <h2>We're The Future Now</h2>
            <p>Custom IT services and solutions built specifically for your business</p>
          </div>
          </div>
          <div className="row pt-5 service_space">
            <div className="col-md-6 service_point py-3">
              <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">
              <img src={Interface} alt="img" />
              </div>
              <div className="point_info">
              <h4>Interface Design</h4>
              <p>We can develop and create bespoke solutions that communicate to your customer in the most effective way
               ensuring a fantastic user experience</p>
              </div>
            </div>
            </div>
            <div className="col-md-6 service_point py-3">
            <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">            
              <img src={seoOpti} alt="img" />
              </div>
              <div className="point_info">
              <h4>SEO & SMM Services</h4>
              <p>Social media plays the part of spreading information
                        about products or services at an unbelievable speed in
                        the virtual world</p>
              </div>
            </div>
            </div>

            <div className="col-md-6 service_point py-3">
            <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">              
              <img src={seoOpti} alt="img" />
              </div>
              <div className="point_info">
              <h4>Seo Optimizer</h4>
              <p>SEO Services SEO is the most prevalent means for
                        effective digital marketing.</p>
              </div>
            </div>
            </div>

            <div className="col-md-6 service_point py-3">
            <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">
              <img src={DigitalMarket} alt="img" />
              </div>
              <div className="point_info">
              <h4>Digital Marketing</h4>
              <p>Digital Marketing makes it possible for small and medium
                        sized businesses to compete against the big enterprises
                        and attract their own share of the targeted audience.</p>
              </div>
            </div>
            </div>

            <div className="col-md-6 service_point py-3">
            <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">
              <img src={marketMonitor} alt="img" />              
            </div>
              <div className="point_info">
              <h4>Market Monitor</h4>
              <p>By monitoring multiple sources, we keep a sharp eye on
                        market trends and competitor activity, delivering rapid
                        response market insight for informed and timely action.</p>
              </div>
              </div>
            </div>
            <div className="col-md-6 service_point py-3">
            <div className="outer_bx d-flex align-items-center">
              <div className="icon_part">
              <img src={webDev} alt="img" />
              </div>
              <div className="point_info">
              <h4>App & Web Development</h4>
              <p>The world has shrunk into mobile & Desktop and so has
                        your business.</p>
              </div>
            </div>
            </div>

          </div>
        </div>    
      </section>
    );
};
export default Services;