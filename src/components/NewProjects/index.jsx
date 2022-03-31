import "./style.scss";
import gsap from "gsap";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useRef, useEffect } from "react";

// images

import Chronicler from "./images/chron.PNG";
import Lyfe from "./images/lyfe.png";
import Travel from "./images/travelology.PNG";
import Notetaker from "./images/notetaker.PNG";
import Quiz from "./images/quiz.PNG";

function Projects() {
  let projectsTitle = useRef(null);
  let project1 = useRef(null);
  let project2 = useRef(null);
  let project3 = useRef(null);
  let project4 = useRef(null);
  let project5 = useRef(null);

  useEffect(() => {
    gsap.from(projectsTitle.current, {
      duration: 0.8,
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
    });
    gsap.from(
      [
        project1.current,
        project2.current,
        project3.current,
        project4.current,
        project5.current,
      ],
      {
        duration: 2.3,
        delay: 0.8,
        ease: "power3.out",
        y: 64,
        opacity: 0,
        stagger: {
          amount: 2,
        },
      }
    );
  }, []);

  return (
    <div className="projects">
      <div ref={projectsTitle} className="heading">
        <h3>Projects</h3>
      </div>
      <nav className="navbar-pro">
        <ul>
          <li>
            <div ref={project1} className="link">
              <span>The Chronicler</span>
              <div className="links">
                <div className="info">
                  <p className="descr">
                    The Chronicler allows users to search a database of 10,000
                    recommended book based on title, author, and genre to find a
                    book that they might be interested in reading that they can
                    then add to their personal collection. This app uses
                    JavaScript, MySQL, NodeJS, Express, and Bootstrap.
                  </p>
                  <p className="note">
                    App hosted on free Heroku server. Please allow 10-15s to
                    spin up.
                  </p>
                </div>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs/the_chronicler">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://thechronicler.herokuapp.com/">
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
            <div ref={project2} className="link">
              <span>Lyfe</span>
              <div className="links">
                <div className="info">
                  <p className="descr">
                    Lyfe is a lifestyle tracker, allowing a user to track daily
                    habits to lead towards a better life. The four main
                    components of the Lyfe application are: Exercise,
                    Mindfulness, Nutrition and Water. This four pillars will
                    help you feel better and motivated to conquer every day
                    life. This app uses React, GraphQL, Express, and SCSS.
                  </p>
                  <p className="note">
                    App hosted on free Heroku server. Please allow 10-15s to
                    spin up.
                  </p>
                </div>
                <div className="buttons">
                  <a href="https://github.com/labrecquemegan/lyfe">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://lyfe22.herokuapp.com/">
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
            <div ref={project3} className="link">
              <span>Travelology</span>
              <div className="links">
                <div className="info">
                  <p className="descr">
                    Travelology is a tourism-centered site where you are given
                    random cities throughout the US that include their
                    attractions, restaurants, and local parks. This app uses
                    JavaScript, CSS, and third-party APIs.
                  </p>
                </div>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs/travelology">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="xndrbrgs.github.io/travelology/">
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
            <div ref={project4} className="link">
              <span>express notetaker</span>
              <div className="links">
                <div className="info">
                  <p className="descr">
                    An in-web note taking application that uses Express.js to
                    construct new JSON files with the given data by a user. This
                    app was constructed using Javascript, CSS, and Node.js.
                  </p>
                  <p className="note">
                    App hosted on free Heroku server. Please allow 10-15s to
                    spin up.
                  </p>
                </div>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs/note_taker_application">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="notetaker-express-ab.herokuapp.com/">
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
            <div ref={project5} className="link">
              <span>js mastery quiz</span>
              <div className="links">
                <div className="info">
                  <p className="descr">
                    The Javascript Quiz Challenge is a timed multiple-choice
                    quiz that covers through an array of topics related to
                    Javascript. Once a user finishes the quiz, they can then
                    store their high scores in the browser. The application
                    features dynamically updated CSS and HTML using JavaScript.
                  </p>
                </div>
                <div className="buttons">
                  <a href="https://github.com/xndrbrgs/webAPI_code_quiz">
                    <i className="fab fa-github">
                      <BsGithub id="icon" />
                    </i>
                  </a>
                  <a href="https://xndrbrgs.github.io/webAPI_code_quiz/">
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
