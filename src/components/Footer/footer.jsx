import "./style.scss";

import React from "react";

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="cta">
        <h2>Let's Work Together</h2>
        <div className="contact-button">
          <a href="mailto:aborgescolon@gmail.com">Contact Me</a>
        </div>
      </div>
      <div className="bottom">
          <div className="portfolio-info">
              <p>Portfolio 2022</p>
              <p>Designed and Developed by Alex Borges</p>
          </div>
      </div>
        <div className="footer-section">
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
                <a href="https://dribbble.com/xndrbrgs">
                  <i class="fab fa-dribbble" id="icon-size">
                    <FiDribbble id="icon-size" />
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
