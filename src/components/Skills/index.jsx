import React, {useRef, useEffect} from "react";
import "./style.scss";
import gsap from 'gsap';

// SVG Imports - Front

import js from "./images/logo-javascript.svg";
import css from "./images/css-3.svg";
import html from "./images/html-1.svg";
import reactsvg from "./images/react-2.svg";
import sasssvg from "./images/sass-1.svg";

// SVG Imports - Tools

import gitsvg from './images/git-icon.svg'
import heroku from './images/heroku-1.svg'
import webpacksvg from './images/webpack-icon.svg'

// SVG Imports - Back

import nodesvg from './images/nodejs.svg'
import expsvg from './images/express-109.svg'
import mongosvg from './images/mongodb-icon-1.svg'
import mysqlsvg from './images/mysql-6.svg'
import graphqlsvg from './images/graphql.svg'

export default function Skills() {
  let skillsName = useRef(null);
  let skillsList = useRef(null);

  useEffect(() => {
    gsap.from(skillsName.current, 
      {
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        y: 64,
        opacity: 0,
        stagger: {
          amount: 0.5
        }
      }, []);
    gsap.from(skillsList.current, 
      {
        duration: 2.3,
        delay: 0.8,
        ease: "power3.out",
        y: 64,
        opacity: 0,
        stagger: {
          amount: 0.5
        }
      }, []);
  })

  return (
    <div className="skills" id="skills" data-scroll-section >
      <div>
        <h1 ref={skillsName} data-scroll>Skills</h1>
        <div ref={skillsList} className="skills-tree" data-scroll>
          <div className="skill">
            <div className="skill-title">
              <h2>HTML & CSS</h2>
              <p>Interactive Experiences and Responsive Layouts</p>
            </div>
            <div className="skill-pictures">
              <div className="skill-svg">
                <img src={html} alt="js" />
                <img src={css} alt="js" />
                <img src={sasssvg} alt="js" />
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">
              <h2>JavaScript</h2>
              <p>Frontend Development and Single-Page Apps</p>
            </div>
            <div className="skill-pictures">
              <div className="skill-svg">
                <img src={js} alt="js" />
                <img src={reactsvg} alt="js" />
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">
              <h2>Tools</h2>
              <p>Design Systems and Smart Interfaces</p>
            </div>
            <div className="skill-pictures">
              <div className="skill-svg">
                <img src={gitsvg} alt="js" />
                <img src={heroku} alt="js" />
                <img src={webpacksvg} alt="js" />
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-title">
              <h2>Backend</h2>
              <p>Content Management Systems</p>
            </div>
            <div className="skill-pictures">
              <div className="skill-svg">
                <img src={nodesvg} alt="js" />
                <img src={expsvg} alt="js" />
                <img src={mysqlsvg} alt="js" />
                <img src={graphqlsvg} alt="js" />
                <img src={mongosvg} alt="js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
