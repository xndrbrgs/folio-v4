import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";

export default function Hero() {
  useEffect(() => {
    const split = new SplitText(".intro", {
      type: "lines",
      linesclassName: "lineChildren",
    });

    const splitParent = new SplitText(".intro", {
      type: "lines",
      linesclassName: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: "power2",
    });
  }, []);
  return (
    <div className="intro-container" id="main" data-scroll-section>
      <div className="wrapper">
        <div className="intro">
          <h3>Hi, my name is</h3>
          <h1 className="name-intro">Alex Borges.</h1>
          <h1 className="name-intro-desc">I am a full-stack web developer.</h1>
        </div>
      </div>
    </div>
  );
}
