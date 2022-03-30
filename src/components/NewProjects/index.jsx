import "./style.scss";
import gsap from "gsap";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

// images

import Chronicler from "./images/chron.PNG";
import Lyfe from "./images/lyfe.png";
import Travel from "./images/travelology.PNG";
import Notetaker from "./images/notetaker.PNG";
import Quiz from "./images/quiz.PNG";

import React from "react";

const link = document.querySelectorAll(".link");
const linkHoverReveal = document.querySelectorAll(".hover-reveal");
const linkImages = document.querySelectorAll(".hidden-img");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% )`;
    linkImages[i].style.transform = "scale(1, 1)";
    linkHoverReveal[i].style.left = e.clientX + "px";
  });

  link[i].addEventListener("mouseleave", (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[
      i
    ].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = "scale(0.8, 0.8)";
  });
}

function Projects() {
  return (
    <div className="projects" data-scroll-section>
      <div className="heading">
        <h3>Projects</h3>
      </div>
      <nav className="navbar-pro">
        <ul>
          <li>
            <div className="link">
              <span>The Chronicler</span>
              <div className="links">
                <p className="descr">
                  The Chronicler allows users to search a database of 10,000
                  recommended book based on title, author, and genre to find a
                  book that they might be interested in reading that they can
                  then add to their personal collection. This app uses
                  JavaScript, MySQL, NodeJS, Express, and Bootstrap.
                </p>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <AiOutlineArrowRight id="icon" />
                    </i>
                  </a>
                </div>
              </div>
              <div className="hover-reveal">
                <img className="hidden-img" src={Chronicler} />
              </div>
            </div>
          </li>
          <li>
            <div className="link">
              <span>Lyfe</span>
              <div className="links">
                <p className="descr">
                Lyfe is a lifestyle tracker, allowing a user to track daily habits to lead towards a better life. The four main components of the Lyfe application are: Exercise, Mindfulness, Nutrition and Water. This four pillars will help you feel better and motivated to conquer every day life.
                </p>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <AiOutlineArrowRight id="icon" />
                    </i>
                  </a>
                </div>
              </div>
              <div className="hover-reveal">
                <img className="hidden-img" src={Lyfe} />
              </div>
            </div>
          </li>
          <li>
            <div className="link">
              <span>Travelology</span>
              <div className="links">
                <p className="descr">
                  Travelology is a tourism-centered site where you are given
                  random cities throughout the US that include their
                  attractions, restaurants, and local parks. This app uses
                  JavaScript, CSS, and third-party APIs.
                </p>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <AiOutlineArrowRight id="icon" />
                    </i>
                  </a>
                </div>
              </div>
              <div className="hover-reveal">
                <img className="hidden-img" src={Travel} />
              </div>
            </div>
          </li>
          <li>
            <div className="link">
              <span>express notetaker</span>
              <div className="links">
                <p className="descr">
                  An in-web note taking application that uses Express.js to
                  construct new JSON files with the given data by a user. This
                  app was constructed using Javascript, CSS, and Node.js.
                </p>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <AiOutlineArrowRight id="icon" />
                    </i>
                  </a>
                </div>
              </div>
              <div className="hover-reveal">
                <img className="hidden-img" src={Notetaker} />
              </div>
            </div>
          </li>
          <li>
            <div className="link">
              <span>js mastery quiz</span>
              <div className="links">
                <p className="descr">
                  The Javascript Quiz Challenge is a timed multiple-choice quiz
                  that covers through an array of topics related to Javascript.
                  Once a user finishes the quiz, they can then store their high
                  scores in the browser. The application features dynamically
                  updated CSS and HTML using JavaScript.
                </p>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://github.com/xndrbrgs">
                    <i className="fab fa-github">
                      <AiOutlineArrowRight id="icon" />
                    </i>
                  </a>
                </div>
              </div>
              <div className="hover-reveal">
                <img className="hidden-img" src={Quiz} />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Projects;
