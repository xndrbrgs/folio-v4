import React, { useState } from 'react'
import { useEffect } from "react";
import { useRef } from "react";

import '../styles/index.scss'

import {CustomCursor} from '../CustomCursor'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectGallery from '../components/ProjectGallery'
import Skills from '../components/Skills'
import Footer from '../components/Footer/footer'
import Contact from '../components/Contact'
import Projects from '../components/NewProjects'

const Home = () => {
  return (
    <>
          <CustomCursor />
          <Header />
          <Hero />
          <Projects />
          {/* <About /> */}
          <Skills />
          <Footer />
    </>
  );
};
export default Home;