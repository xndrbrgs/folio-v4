import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";
import { CSSTransition } from "react-transition-group";

// CSS
import "../styles/index.scss";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer/footer";

// Pages
import Main from "../pages/Main";
import AboutMe from "../pages/AboutMe";

// Routes
const routes = [
  { path: "/", name: "Main", Component: Main },
  { path: "/about-me", name: "AboutMe", Component: AboutMe },
];

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="App">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
