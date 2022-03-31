import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.scss";

export default function Hero() {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  
  useEffect(() => {
    gsap.from(
      [line1, line2, line3], 
      {
        duration: 2.3,
        delay: 0.8,
        ease: "power3.out",
        y: 64,
        opacity: 0,
        stagger: {
          amount: 0.5
        }
      }
      )
  }, []);
  return (
    <div
      className="intro-container"
      id="main"
    >
      <div className="wrapper">
        <div className="intro">
          <h3 ref={(hero) => {
          line1 = hero;
        }}>Hi, my name is</h3>
          <h1 className="name-intro" ref={(hero2) => {
          line2 = hero2;
        }}>Alex Borges.</h1>
          <h1 className="name-intro-desc" ref={(hero3) => {
          line3 = hero3;
        }}>I am a full-stack web developer.</h1>
        </div>
      </div>
    </div>
  );
}
