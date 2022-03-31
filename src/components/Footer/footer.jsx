import "./style.scss";

import React, {useEffect, useRef} from "react";
import gsap from 'gsap';

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";

export default function Footer() {
  let ctaLeft = useRef(null);
  let contactButton = useRef(null); 
  let buttonsDown = useRef(null); 
  let bottomText = useRef(null); 

  useEffect(() => {
    gsap.from(ctaLeft.current,
      {
        x: 100,
        opacity: 0,
        duration: 1.2
      }, []);
    gsap.from(contactButton.current,
      {
        x: -100,
        opacity: 0,
        duration: 1.2
      }, []);
    gsap.from(bottomText.current,
      {
        y: 70,
        opacity: 0,
        duration: 1.2
      }, []);
    gsap.from(buttonsDown.current,
      {
        y: 70,
        opacity: 0,
        duration: 1.8
      }, []);
  })


  return (
    <div className="footer-wrapper">
      <div className="cta">
        <h2 ref={ctaLeft}>Let's Work Together</h2>
        <div ref={contactButton} className="contact-button">
          <a href="mailto:aborgescolon@gmail.com">Contact Me</a>
        </div>
      </div>
      <div ref={bottomText} className="bottom">
          <div className="portfolio-info">
              <p>Portfolio 2022</p>
              <p>Designed and Developed by Alex Borges</p>
          </div>
      </div>
        <div ref={buttonsDown} className="footer-section">
          <div class="leftside-icons">
            <ul class="icons">
              <li>
                <a href="https://github.com/xndrbrgs">
                  <i class="fab fa-github">
                    <BsGithub id="icon-size" />
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alexander-borges-75b153226/">
                  <i class="fab fa-linkedin" id="icon-size">
                    <FaLinkedin id="icon-size" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#git">
                  <i class="far fa-file" id="icon-size">
                    <AiOutlineFile id="icon-size" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
