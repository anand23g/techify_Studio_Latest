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


import react from "../img/react.png";
import angular from "../img/angular.png";
import vuejs from "../img/vuejs.png";
import android from "../img/android.png";
import php from "../img/php.png";
import ios from "../img/ios.png";
import nodejs from "../img/nodejs.png";
import hybrid from "../img/hybrid.png";
import python from "../img/python.png";
import django from "../img/django.png";
import flask from "../img/flask.png";
import cordova from "../img/cordova.png";
import ionic from "../img/ionic.png";
import xamarin from "../img/xamarin.png";
import flutter from "../img/flutter.png";
import seo from "../img/seo-digital.png";
import smm from "../img/smm.png";
import sem from "../img/sem.png";

const ServicePage = () => {
  return (
    <>
    <Header />
      <section id="inner_head">
        <img src={services_bg} alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">        
          <h2>SERVICES</h2>
          </div>
          </div>
        </div>
      </section>

      {/* UI/UX */}
    <section id="design_service">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="heading">      
          <h2>UI / UX Design</h2>
          </div> 
          <p>
                The design lays the foundation for any digital product, We
                design user-friendly elements that aim to improve conversion and
                business engagement. Our UI/UX skills do not end with mobile
                design, web design, or any digital platforms. As a UX Design
                Company, we develop products and services which offer excellent
                usability whilst fully embracing the personality of your brand.
              </p>
              <br />
        </div>
      </div>
          <div className="row">
            <div className="col-xl-7 col-lg-12">             
              <h5>Popular UI/UX Design Frameworks That We Recommend.</h5>
              <ul className="service_info pt-2">
                <li className="d-flex align-items-center">
                  <img src={bootstrap} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Bootstrap</h5>
                    <p>Introduced for responsive design on a large scale along with a dynamic and mobile-friendly layout user friendly and popularly Used .</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={material} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Materialize</h5>
                    <p>Extremely light-weight framework and comes with ready to use classes and component for advanced design models.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={semantic} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Semantic UI</h5>
                    <p>Front-end framework that uses human-friendly HTML. Build beautiful, responsive layouts with its 3000+ Theming
                  Variables.</p>
                  </div>
                </li>
              </ul>
          </div>
          <div className="col-xl-5 col-lg-12 service_img pt-4">
            <img src={design} alt="img" />
          </div>
          </div>
        </div>
    </section>


    <section id="framework">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="heading text-center">      
          <h2>Front-End Frameworks</h2>
          </div>  
        </div>
      </div>
          <div className="row">            
          <div className="col-md-4 service_box pt-4 text-center">
            <div className="outline_bx">
            <img src={react} alt="img" />
            <h4>React Js</h4>
            <p>An ideal framework for those who anticipate high traffic and
                  need a stable platform with good UI to handle it.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={angular} alt="img" />
            <h4>Angular Js</h4>
            <p>Angular is perfect! Besides, you can also use this framework
                  to develop multi-page as well as progressive web apps.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={vuejs} alt="img" />
            <h4>Vue Js</h4>
            <p>Vue is a progressive JavaScript framework for blazing-fast
                  virtual DOM with minimal optimization efforts.</p>
          </div>
          </div>
          </div>
        </div>
    </section>


    <section id="mobile_app">
    <div className="container">
      <div className="row">      
        <div className="col-md-12">
        <div className="heading">      
          <h2>MOBILE & WEB APPLICATIONS</h2>
          </div> 
          <p>
                The world has shrunk into mobile and so is your business. We are
                your accelerator to design and develop brilliant mobile apps by
                harnessing the latest cutting – edge tools. We develop and
                customize web solutions that speak about your business
                effectively and inspire your target customers to take action.
                Starting from the ground-up installation, you get a scalable and
                reliable product for your business face.
              </p>
              <br />
              <h5>Popular UI/UX Design Frameworks That We Recommend.</h5>
        </div>             
      </div>
              <div className="row">
              <div className="col-lg-6 col-md-12">     
              <ul className="service_info pt-2">
                <li className="d-flex align-items-center">
                  <img src={android} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Android</h5>
                    <p>We are specialized in application development starting from
                  the analysis of business Strategy to design Application that
                  will align business requirements.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={ios} alt="img" />
                  <div className="service_point ml-4">
                    <h5>IOS</h5>
                    <p>We provide iOS development to help build your dynamic and
                  scalable business app. We ensure to provide feature-rich,
                  interactive, and secure applications.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={hybrid} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Hybrid</h5>
                    <p>We provide a pool of skilled experts for your ad-hoc or
                  ongoing business project to help you develop Hybrid apps For
                  Android and iOS.</p>
                  </div>
                </li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-12">     
              <ul className="service_info pt-2">
                <li className="d-flex align-items-center">
                  <img src={php} alt="img" />
                  <div className="service_point ml-4">
                    <h5>PHP</h5>
                    <p>We provide experienced PHP developers to create a business
                  product that helps you win markets. Our team has built
                  extensible products across diverse industries.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={nodejs} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Node</h5>
                    <p>NodeJS is the latest future proof technology, to create
                  secure and real-time web applications for your business. The
                  Node application we develop is scalable and fast.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={python} alt="img" />
                  <div className="service_point ml-4">
                    <h5>Python</h5>
                    <p>We provide result-oriented resources for Custom application
                  development. We provide High-end performances with our
                  proven strategic methods.</p>
                  </div>
                </li>
              </ul>
              </div>
          
          </div>
        </div>
    </section>

     
    <section id="framework">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="heading text-center">      
          <h2>Frameworks We Recommend</h2>
          </div>  
        </div>
      </div>
          <div className="row">            
          <div className="col-md-4 service_box pt-4 text-center">
            <div className="outline_bx">
            <img src={django} alt="img" />
            <h4>Django</h4>
            <p>Django offers a comprehensive package of all the tools you
                  need to build your application.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={flask} alt="img" />
            <h4>Flask</h4>
            <p>Flask is the glue that brings together a plethora of
                  extensions and libraries to be integrated into your project.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={cordova} alt="img" />
            <h4>Cordova</h4>
            <p>It helps you to develop mobile apps using HTML, CSS,
                  JavaScript, and targets multiple platforms through a single
                  code base.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
            <div className="outline_bx">
            <img src={ionic} alt="img" />
            <h4>Ionic</h4>
            <p>Ionic provides tools and services for developing hybrid
                  mobile, desktop, and Progressive Web Apps based on modern
                  web development technologies.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={xamarin} alt="img" />
            <h4>Xamarin</h4>
            <p>Xamarin is an effective way to start building your iOS
                  mobile application. It’s a reliable framework that provides
                  flexible native development.</p>
          </div>
          </div>
          <div className="col-md-4 service_box pt-4 text-center">
          <div className="outline_bx">
            <img src={flutter} alt="img" />
            <h4>Flutter</h4>
            <p>Flutter is used for making cross-platform applications. It’s
                  a Google-based software development package that draws
                  developers.</p>
          </div>
          </div>
          </div>
        </div>
    </section>


      {/* digital marketing */}
      <section id="design_service">
    <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="heading">      
          <h2>Digital marketing</h2>
          </div> 
          <p>
          Searching has changed and we recognize that ranking is not the
              aim, sale is. Thus we go beyond conventional digital marketing
              methodologies and enable you to build and dominate with your brand
              name. We have helped startups of almost all sizes and business
              models to expand. By working closely with these brands, we have
              developed our service to offer first-line expertise through the
              understanding of market analysis.
              </p>
              <br />
        </div>
      </div>
          <div className="row">          
            <div className="col-xl-7 col-lg-12"> 
              <ul className="service_info pt-2">
                <li className="d-flex align-items-center">
                  <img src={seo} alt="img" />
                  <div className="service_point ml-4">
                    <h5>SEO</h5>
                    <p>We provide on-page and off-page SEO support to businesses that
                  improve search engine ranking of your brand. Getting the right
                  recognition, and exposure for your product in multiple search
                  engines is what we do.</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={smm} alt="img" />
                  <div className="service_point ml-4">
                    <h5>SMM</h5>
                    <p>A strong social media presence can allow you to steer consumer
                  attitudes in your desired path. We are here in order to take
                  care of anything from the Social Media experts at Techify
                  Studio .</p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img src={sem} alt="img" />
                  <div className="service_point ml-4">
                    <h5>SEM</h5>
                    <p>Marketing for search engines is a form of internet marketing
                  that involves the promotion of websites, mainly through paid
                  advertising, by enhancing their visibility on search engine
                  results pages ( SERPs).</p>
                  </div>
                </li>
              </ul>
          </div>    
          <div className="col-xl-5 col-lg-12 service_img pt-5">
            <img src={digital_market} alt="img" />
          </div>     
          </div>
        </div>
    </section>

     <Footer />
     
    </>
  );
};

export default ServicePage;
