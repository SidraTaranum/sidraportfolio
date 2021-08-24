import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from './Project_card';
import gocery from './project_img/groceryApp.png'
import covaxin from './project_img/covaxin.png'
import food1 from './project_img/food1.png'
import food2 from './project_img/food2.png'
import ngo1 from './project_img/ngo1.png'
import ngo2 from './project_img/ngo2.png'
import music1 from './project_img/music1.png'
import music2 from './project_img/music2.png'
import music3 from './project_img/music3.png'
import chat from './project_img/chat.png'
const Project = () => {
  return (
    <div  className="project-section" data-scroll-section>
      <h1 className="text-center">Projects</h1>
      <div className="project" >
        {/* <div className="scene"> */}
              <Card 
              src={gocery} 
              title1="Grocery List App"
              title2="REACT"
              title3="NODE/EXPRESS"
              title4="MONGODB"
              data-aos="fade-up"
              />
              <Card 
              src={food2}       
              title1="Food Order"
              title2="REACT"
              title3="NODE/EXPRESS"
              title4="MONGODB"

              />
              <Card 
                src={music1}
              title1="Weather app"
              title2="JavaScript"
              title3="HTML"
              title4="CSS"

              />
              <Card 
                src={chat}
              title1="Analog Clock"
              title2="NODE"
              title3="SOCKET.IO"
              title4="HTML/CSS"

              />
             <Card 
                src={covaxin}
              title1="To-do List"
              title2="HTML"
              title3="CSS"
              title4="Bootstrap/jQuery"

              />
              <Card 
                src={ngo2}
              title1="Covid-19 Design"
              title2="HTML"
              title3="CSS"
              title4="Bootstrap/jQuery"
               
              />
              
        </div>
      {/* </div> */}
    </div>
  );
};
export default Project;
