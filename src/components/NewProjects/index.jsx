import "./style.scss";
import gsap from "gsap";

// images

import Chronicler from "./images/chronicler.PNG";
import Lyfe from "./images/lyfe.png";
import Travel from "./images/travelology.PNG";
import Notetaker from "./images/notetaker.PNG";
import Quiz from "./images/quiz.PNG";

import React from "react";

function Projects() {
  const link = document.querySelectorAll(".link");
  const linkHoverReveal = document.querySelectorAll(".hover-reveal");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[
        i
      ].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
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
  return (
    <div className="projects">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <ul>
        <li>
          <div className="link">
            <span>The Chronicler</span>
            <div className="hover-reveal">
              <img className="hidden-img" src={Chronicler} />
            </div>
          </div>
          <div className="link">
            <span>Lyfe</span>
            <div className="hover-reveal">
              <img className="hidden-img" src={Lyfe} />
            </div>
          </div>
          <div className="link">
            <span>Travelology</span>
            <div className="hover-reveal">
              <img className="hidden-img" src={Travel} />
            </div>
          </div>
          <div className="link">
            <span>Notetaker</span>
            <div className="hover-reveal">
              <img className="hidden-img" src={Notetaker} />
            </div>
          </div>
          <div className="link">
            <span>JS Mastery Quiz</span>
            <div className="hover-reveal">
              <img className="hidden-img" src={Quiz} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
