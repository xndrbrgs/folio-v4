import React from "react";
import "./style.scss";

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-section" data-scroll-section>
      <a>
        <div>
          <p>Built by Alexander Borges</p>
          <p>2022</p>
        </div>
      </a>
      <div class="leftside-icons">
        <ul class="icons">
          <li>
            <a href="https://github.com/xndrbrgs">
              <i class="fab fa-github">
                <BsGithub id="icon-size"/>
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
                <AiOutlineFile id="icon-size"/>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
