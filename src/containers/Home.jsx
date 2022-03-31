import React, { useState } from 'react'
import { useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LocomotiveScroll from "locomotive-scroll";
import '../styles/index.scss'

// Components 
import {CustomCursor} from '../CustomCursor'
import Header from '../components/Header'
import Footer from '../components/Footer/footer'

// Pages 
import Main from '../pages/Main'
import AboutMe from '../pages/AboutMe'

// Routes 
const routes = [
	{ path: '/', name: 'Main', Component: Main },
	{ path: '/about-me', name: 'AboutMe', Component: AboutMe }
];

const Home = () => {

  return (
    <>
	<div>
      <CustomCursor />
			<Header />
			<div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component />
					</Route>
				))}
			</div>
			<Footer />
	</div>
    </>
  );
};
export default Home;