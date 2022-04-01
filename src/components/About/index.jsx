import React, {useEffect} from "react";
import gsap from 'gsap';
import SplitText from '../../utils/Split3.min';
import './style.scss';
import Person from '../../images/Person.svg'

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
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    })
  }, [])
  return (
    <div className="about-me" id="about-me" data-scroll-section>
      <div className="about-wrapper">
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
          <img src={Person} className='person-svg'/>
        </div>
      </div>
    </div>
  );
}
