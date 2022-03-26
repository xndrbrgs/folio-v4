import React, {useEffect} from "react";
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'
import './style.scss'

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
    <div class="about-me" id="about-me" data-scroll-section>
      <div>
        <h1 data-scroll>About Me</h1>
        <p data-scroll className="bolden-p">
          I am a full-stack and creative developer based in Orlando, Florida. I am a Biomedical Sciences graduate who later switched to the amazing world of web development.
        </p>
        <p data-scroll className="smaller-p">
          I specialize in creating integrative and intuitive code that enables a placid user experience.   
        </p>
      </div>
    </div>
  );
}
