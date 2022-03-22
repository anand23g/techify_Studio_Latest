/* header files */
import React from "react";

/* css file */
import "../component/css/services.css";
import Footer from "../component/shared/footer";
import Header from "../component/shared/header";

/* img path */
import services_bg from "../img/services_bg.jpg";
import logo from "../img/logo.png";
import why_choose from "../img/why_choose.png";

const contact = () => {
  return (
    <>
    <Header />
      <section id="inner_head">
        <img src={services_bg} alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">        
          <h2>Contact Us</h2>
          </div>
          </div>
        </div>
      </section>

      {/* UI/UX */}
    <section id="contact">
    <div className="container">
      <div className="row">
      <div className="col-md-5">
        <img src={why_choose} alt="img" />
        </div>
        <div className="col-md-7 form_part pl-5">
        <div className="heading pb-4">  
        <span>Get in touch</span>
          <h3>Send us a message</h3>
          </div> 
          <form>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" className="form-control" placeholder="Full name" />
              </div>
              <div className="col-md-6 form-group">
                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              <div className="col-md-12 form-group">
                <input type="email" className="form-control" placeholder="Email address" />
              </div>
              <div className="col-md-12 form-group">
                <textarea className="form-control" placeholder="Your message"></textarea>
              </div>
              <div className="col-md-12 text-right">
               <button type="submit" className="orange_btn">Submit</button>
              </div>
            </div>
          </form>

        </div>
      </div>
        </div>
    </section>


    <Footer />
  
    </>
  );
};

export default contact;
