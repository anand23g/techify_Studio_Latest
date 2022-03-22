import React from "react";
import { Link } from 'react-router-dom';
import web_market from "../../img/web_market.jpg";
import d_2 from "../../img/d_2.JPG";
import d_3 from "../../img/d_3.JPG";

const BlogPart = () => {
    return(
<section id="blog">
          <div className="container">
          <div className="row">
          <div className="col-12 text-center heading pb-4">
            <span>Blog and News</span>            
            <h2>Our Latest Blog</h2>
          </div>
          </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card ch1">
                  <img className="card-img-top" src={web_market} />
                  <div className="card-body">
                    <h5 className="card-title">Web Marketing</h5>
                    <p className="card-text">
                      As a business owner, you’re always looking for new ways to
                      reach interested leads. Web marketing can help you reach
                      more leads looking for your products and services online
                    </p>
                    <Link to="" style={{ textDecoration: "none" }}  className="primary">
                      Discover Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
              <div className="card ch1">
                  <img className="card-img-top" src={d_2} />
                  <div className="card-body">
                    <h5 className="card-title">
                      We Developed The Best At Cheap Cost
                    </h5>
                    <p className="card-text">
                      We Developed The Best and Fast at your Cheaper then the
                      market . Your experts give there best to create your
                      Product .
                    </p>
                    <Link to="" style={{ textDecoration: "none" }}  className="primary">
                      Discover Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
              <div className="card ch1">
                  <img className="card-img-top" src={d_3} />
                  <div className="card-body">
                    <h5 className="card-title">
                      Work With Tried and True Digital Marketing Experts
                    </h5>
                    <p className="card-text">
                      The digital world is constantly changing. In fact, some
                      say that you need to change your marketing strategy every
                      six months or else you’re done for
                    </p>
                    <Link to="" style={{ textDecoration: "none" }}  className="primary">
                      Discover Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
};
export default BlogPart;