import React, { useEffect, useState } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import { AiOutlineMenu } from "react-icons/ai";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./style.scss";

// Href Imports

import aboutme from "../About";
import skills from "../Skills";
import projects from "../ProjectGallery";
import contact from "../Contact";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    const split = new SplitText(".nav_links", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitHome = new SplitText(".home-button", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitHB = new SplitText(".mobile-button", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText(".nav_links", {
      type: "lines",
      linesClass: "lineParent",
    });

    const splitParentHome = new SplitText(".home-button", {
      type: "lines",
      linesClass: "lineParent",
    });

    const splitParentHB = new SplitText(".mobile-button", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitHome.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitHB.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  });
  return (
    <header>
      <nav className="navbar" data-scroll-section>
        <div className="wrapper">
          <a className="home-button" href="/">
            Home
          </a>
          <ul className="nav_links">
            <li>
              <a href="about-me">About Me</a>
            </li>
            <li>
              <a href="mailto:aborgescolon@gmail.com">Contact Me</a>
            </li>
            <a
              className="resume-button"
              href="https://drive.google.com/file/d/1iiI5PaRZMWsCfXOW3KxIvFHGh1ka22Xv/view?usp=sharing"
              target="_blank"
            >
              <button>Resume</button>
            </a>
          </ul>
          <div className="mobile-button">
            <button onClick={onOpenModal}>
              <AiOutlineMenu size={25} />
            </button>
          </div>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={open}
              onClose={onCloseModal}
              center
            >
              <div className="modal-links">
              <a className="modal-link" href="about-me">About Me</a>
              <a className="modal-link" href="mailto:aborgescolon@gmail.com">Contact Me</a>
              <a
              className="modal-link"
              href="https://drive.google.com/file/d/1iiI5PaRZMWsCfXOW3KxIvFHGh1ka22Xv/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
              </div>
            </Modal>
        </div>
      </nav>
    </header>
  );
}
