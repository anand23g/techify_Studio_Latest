import React from "react";
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "./component/css/navbar.css";
import logo from "./img/logo.png";
import "./App.css";
import HomePageContainer from "./pages/HomePageContainer";
import ServicePage from "./pages/ServicePage";
import contact from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage"; 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageContainer}></Route>
          <Route exact path="/Services" component={ServicePage}></Route>
          <Route exact path="/Contact" component={contact}></Route>
        <Route exact path="/About" component={AboutPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
