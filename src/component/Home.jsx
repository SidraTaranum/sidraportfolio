import React, { useEffect } from "react";
import { gsap, split } from "gsap";
import SplitText from ".././utilities/Split3.min.js";
import Typical from "react-typical";
import pic from "./mypic.png";
// import pic from "./my.jpeg";
import { NavLink} from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const split = new SplitText(".header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(".header-text", {
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
  }, []);

  return (
    <section className="Home" data-scroll-section>
      <div className="header_title  ">
        <h2 className="mt-3 header-text" id="">
          Hey 🙋‍♀️ , I'm Sidra 
        </h2>
        <h1>
          <Typical
            steps={[
              "  Web Developer 💻",
              1000,
              "  MERN 💻",
              1000,
              "  React || NODE 💻",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <NavLink to="/contact">
        <button className="btn btn-outline-light mx-lg-4 m-3 header-text">
          Hire Me
        </button></NavLink>
        <a href="https://drive.google.com/file/d/1F_Fayj6kdcayetE3oXcL55ILQO1Q8DNk/view">
          <button className="btn btn-outline-light m-3 header-text">
            Download Resume
          </button>
        </a>
      </div>
      <div className="header_img">
        <img
          className="img-fluid header_dp"
          data-scroll
          src={pic}
          alt="profile"
        />
      </div>
      <div className="Social-icon">
        <a href="https://www.linkedin.com/in/sidra-taranum-337802204/">
          <div className="Icon">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </a>
        <a href="https://github.com/SidraTaranum">
          <div className="Icon">
            <i className="fab fa-github"></i>
          </div>
        </a>
        {/*<a href="https://www.instagram.com/_just_developer/">
          <div className="Icon">
            <i className="fab fa-instagram"></i>
          </div>
        </a>*/}
        {/* <a href="https://mywa.link/sidra taranum">
          <div className="Icon">
            <i class="fab fa-whatsapp"></i>
          </div>
        </a> */}
      </div>
    </section>
  );
};

export default Home;

// let t1 = new TimelineLite({ delay: 0.3 });
// useEffect(() => {
//   t1.from(
//     ".rgt",
//     { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
//     "Start"
//   );
//   t1.staggerFrom(
//     ".Text",
//     1,
//     { y: 30, opacity: 0, ease: Power3.easeOut },
//     0.15,
//     "Start"
//   )
//     .from(".btn-danger", {
//       y: 20,
//       opacity: 0,
//       ease: Power3.easeOut,
//       delay: 0.2,
//     })
//     .from(".btn-info", {
//       y: 20,
//       opacity: 0,
//       ease: Power3.easeOut,
//       delay: 0.2,
//     })
//     .from(
//       "NavLink",
//       { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
//       0.2,
//       "Start"
//     );
//   gsap.from(
//     ".about_content",
//     { y: -400, opacity: 0, ease: 'easeIn' , duration: 3,delay: 0.4 ,
//        scrollTrigger : {
//        trigger:".sub_content",
//        start:" top 10%",
//        end:" bottom 60%",
//        markers:true,
//        toggleActions:"restart complete reverse reset ",
//          }
//       },

//   );

// }, []);
