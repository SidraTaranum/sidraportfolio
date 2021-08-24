import React, { useEffect, useRef, useState } from "react";
import { gsap, split } from "gsap";
import SplitText from ".././utilities/Split3.min.js";
// import pic from "./mypic.png";
// import pic from "./my.jpeg";
import pic from "./Sidra.png";


const About = () => {
  const ref = useRef();

  // const reveal = useOnScreen(ref);
  useEffect(() => {
    const split = new SplitText("#about-content", {
      type: "lines",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: -20,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <div className="main_container" data-scroll-section>
      <div className="container about-section">
        <div className="cards">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content" id="about-content">
            <h2>MERN</h2>
            <h5>Learning Path in FullStack Webdevelopment || 2020-21</h5>
            <i class="fas fa-laptop-code" style={{position:'relative',top:'70px'}}></i>
                    </div>
        </div>
        <div className="cards">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src={pic} alt=""  className="img-fluid about_img" />
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/sidra-taranum-337802204/"> <i className="fab fa-linkedin-in"></i></a> 
          <a href="https://github.com/SidraTaranum"><i className="fab fa-github"></i></a>
           
          
            
          
          </div>
        </div>
        <div className="cards">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content" ref={ref} id="about-content">
            <div className="content" id="about-content">
              <h2>B.Tech</h2>
              <h5>Graduation</h5>
              <p className="lead">Kakatiya University </p>
              <p className="lead">2018-22</p>
              <i class="fas fa-graduation-cap"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
