import React, {useEffect} from "react";
import gsap from 'gsap';
import SplitText from '../../utils/Split3.min';
import Person from '../../images/person';
import './style.scss';

export default function About() {
  useEffect(() => {
    const split = new SplitText('.about-me', {
      type: 'lines',
      linesClass: 'lineChildren'
    });

    const splitParent = new SplitText('.about-me', {
      type: 'lines',
      linesClass: 'lineParent'
    });

    gsap.to(split.lines, {
      duration: 1.6,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    })
  }, [])
  return (
    <div className="about-me" id="about-me" >
      <div className="wrapper">
        <section className="about-section">
        <h1>Alex Borges</h1>
        <p className="bolden-p">
          I am a full-stack creative developer based in Orlando, Florida. I am a Biomedical Sciences graduate who later switched to the amazing world of web development.
        </p>
        <p className="smaller-p">
          I specialize in creating integrative and intuitive code that enables a placid user experience. 
          My development stack is focused on performace and accessibility, making any user feel delighted with their site interactions.     
        </p>
        <p className="smaller-p">
        Interested in the entire web development spectrum and working on ambitious projects with positive people.     
        </p>
        </section>
        <div className="person">
          <Person />
        </div>
      </div>
    </div>
  );
}
