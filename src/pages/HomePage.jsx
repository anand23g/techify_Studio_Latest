/* HEADER FILES */
import React from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "../component/shared/footer";
import Header from "../component/shared/header";
import Slider from "../component/home/slider";
import AboutPart from "../component/home/about";
import Services from "../component/home/services";
import BlogPart from "../component/home/blogpart";
import ChoosePart from "../component/home/choose";
import Stats from "../component/home/stats";
/* CSS FILES */
import "../component/css/home.css";
import "../component/css/navbar.css";

/* IMG PATH  */
import interfac from "../img/interface.png";
import web_market from "../img/web_market.jpg";
import d_2 from "../img/d_2.JPG";
import d_3 from "../img/d_3.JPG";
import per from "../img/per.JPG";
import i_1 from "../img/i_1.png";
import i_2 from "../img/i_2.png";
import i_3 from "../img/i_3.png";
import i_4 from "../img/i_4.png";
import banner_img from "../img/banner-img-1.png";
import back from "../img/back.jpg";
import logo from "../img/logo.png";
import member from "../img/member.png";


/* MAIN */
const Home = () => {
  return (
    <>
     <Header />
     <Slider />
     <AboutPart />
     <Services />
     <BlogPart />
     <Stats />
     <ChoosePart />
     <Footer />
    </>
  );
};

export default Home;
