import React from "react";
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "../css/navbar.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <>
        <nav class="navbar">
          <div className="container-fluid">
          <div class="logo">
            <a href="/">
            <img src={logo}  />
            </a>
          </div>
          <div class="content">
            <ul class="menu-list">
              <div class="icon cancel-btn">
                <i class="fas fa-times"></i>
              </div>
              <li>
                <a
                  onClick={() => window.location.replace("/")}
                  className="padding1 active"
                  href="#!"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => window.location.replace("/Services")}
                  className="padding1"
                  href="#!"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => window.location.replace("/About")}
                  className="padding1"
                  href="#!"
                >
                  About
                </a>
              </li>
              
              <li>
                <a className="stroke_btn" href="Contact">
                  Start A Project
                </a>
              </li>
            </ul>
            <div class="icon menu-btn">
              <i class="fas fa-bars"></i>
            </div>
          </div>
          </div>
        </nav>
    </>
  );
}

export default Header;
