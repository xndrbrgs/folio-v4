import "./style.scss";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cn from "classnames";

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import useOnScreen from "../../hooks/useOnScreen";

export default function Footer() {
  let ctaLeft = useRef(null);
  let contactButton = useRef(null);
  let buttonsDown = useRef(null);
  let bottomText = useRef(null);

  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(true);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.from(
        ctaLeft.current,
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
        },
        []
      );
      gsap.from(
        contactButton.current,
        {
          x: -100,
          opacity: 0,
          duration: 1.2,
        },
        []
      );
      gsap.from(
        bottomText.current,
        {
          y: 70,
          opacity: 0,
          duration: 1.2,
        },
        []
      );
      gsap.from(
        buttonsDown.current,
        {
          y: 70,
          opacity: 0,
          duration: 1.8,
        },
        []
      );
    }
  }, [reveal]);
  return (
    <div
      className={cn("footer-wrapper", { "is-reveal": reveal })}
      data-scroll-section
    >
      <div ref={ref} className={cn("scroll", { "is-reveal": reveal })} data-scroll>
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
                <a href="https://github.com/xndrbrgs" target="_blank">
                  <i class="fab fa-github">
                    <BsGithub id="icon-size" />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexander-borges-75b153226/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" id="icon-size">
                    <FaLinkedin id="icon-size" />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1iiI5PaRZMWsCfXOW3KxIvFHGh1ka22Xv/view?usp=sharing"
                  target="_blank"
                >
                  <i class="far fa-file" id="icon-size">
                    <AiOutlineFile id="icon-size" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
