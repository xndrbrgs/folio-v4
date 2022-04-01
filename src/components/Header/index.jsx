import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";

// Href Imports

import aboutme from "../About";
import skills from "../Skills";
import projects from "../ProjectGallery";
import contact from "../Contact";

export default function Header() {
  useEffect(() => {
    const split = new SplitText(".nav_links", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitHome = new SplitText(".home-button", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitHB = new SplitText(".mobile-button", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText(".nav_links", {
      type: "lines",
      linesClass: "lineParent",
    });

    const splitParentHome = new SplitText(".home-button", {
      type: "lines",
      linesClass: "lineParent",
    });

    const splitParentHB = new SplitText(".mobile-button", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitHome.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitHB.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });
  return (
    <header>
      <nav className="navbar">
        <div className="wrapper">
          <a className="home-button" href="/">
            Home
          </a>
          <ul className="nav_links">
            <li>
              <a href="about-me">About Me</a>
            </li>
            <li>
              <a href="mailto:aborgescolon@gmail.com">Contact Me</a>
            </li>
            <a className="resume-button" href="https://drive.google.com/file/d/15SLPQ8P9sh60KYYG03rGJPNrSMwOsB-T/view?usp=sharing" target="_blank">
              <button>Resume</button>
            </a>
          </ul>
          <div className="mobile-button">
            <button></button>
          </div>
        </div>
      </nav>
    </header>
  );
}
