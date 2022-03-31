import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import "./style.scss";

export default function Hero() {
  let heroAnimation = useRef(null);
  let h3Anim = useRef(null);
  let h1Anim = useRef(null);

  useEffect(() => {
    gsap.from(heroAnimation, {
      y: 100,
      opacity: 0,
    });
    gsap.to(heroAnimation, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power2,
    });
    gsap.from(h3Anim, {
      y: 100,
      opacity: 0,
    });
    gsap.to(h3Anim, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power2,
    });
    gsap.from(h1Anim, {
      y: 100,
      opacity: 0,
    });
    gsap.to(h1Anim, {
      duration: 2.5,
      y: 0,
      opacity: 1,
      stagger: 0.6,
      ease: Power2,
    });
  }, []);
  return (
    <div
      className="intro-container"
      id="main"
    >
      <div className="wrapper">
        <div className="intro"
        ref={(hero) => {
          heroAnimation = hero;
        }}>
          <h3 ref={(h3anim) => {
          h3Anim = h3anim;
        }}>Hi, my name is</h3>
          <h1 className="name-intro" ref={(h1anim) => {
          h1Anim = h1anim;
        }}>Alex Borges.</h1>
          <h1 className="name-intro-desc" ref={(h1anim) => {
          h1Anim = h1anim;
        }}>I am a full-stack web developer.</h1>
        </div>
      </div>
    </div>
  );
}
