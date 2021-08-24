import React, { useRef, useEffect, useState } from "react";
import useLocoScroll from "./useLocoScroll.js";
import Home from "./Home.jsx";
import About from "./About";
import SkillFile from "./Skills.js";
import Project from "./Project.js";
import Contact from "./Contact";
import { TweenMax, Power3, TimelineLite, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Main = () => {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(2);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <div>
      {preloader ? (
        <div className="loader">
            <div className="wavy">
            <span >W</span>
            <span >E</span>
            <span >L</span>
            <span >C</span>
            <span >O</span>
            <span >M</span>
            <span >E</span>
            </div>
        </div>
      ) : (
        <section className="MAIN" id="MAIN" data-scroll-container>
          <Home />
          <About />
          <SkillFile />
          <Project />
          <Contact />
        </section>
      )}
    </div>
  );
};

export default Main;


