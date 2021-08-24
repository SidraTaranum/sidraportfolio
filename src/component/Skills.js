import React from "react";
import Skill from "./Skill";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Index = () => {
 
  return (
    <div  data-scroll-section>
      <section className=" skill_section ">
        <h1
          className="text-center "
          style={{ position: "relative", top: "10px" }}
        >
          Skill
        </h1>
        <div className="container  skill_content">
        <div className="row skill mt-2">
          <div className="col-2 div1 mt-3">
            <Skill
            className="skill_icon skill_sub_content"
              value="70"
              text="70"
              textColor="red"
              pathColor="#511281"
              trailColor="#d8ebe4"
              skillName="React"
              desc="Hands on experience"
            />
            <Skill
            className="skill_icon skill_sub_content"
              value="60"
              text="60"
              textColor="red"
              pathColor="#064420"
              trailColor="#d8ebe4"
              skillName="NodeJS"
              desc="Hands on experience"
            />
         <Skill
            className="skill_icon skill_sub_content"
              value="65"
              text="65"
              textColor="red"
              pathColor="#81b214"
              trailColor="#d8ebe4"
              skillName="MongoDB"
              desc="Hands on experience"
            />
            
            <Skill
            className="skill_icon skill_sub_content"
              value="60"
              text="60"
              textColor="red"
              pathColor="#ff5200"
              trailColor="#d8ebe4"
              skillName="Express"
              desc="Hands on experience"
            />
         
          </div>
          <div className="col-2 div2 mt-3">
          <Skill
            className="skill_icon skill_sub_content" 
              value="75"
              text="75"
              textColor="red"
              pathColor="#f7fd04"
              trailColor="#d8ebe4"
              skillName="JavaSCript/JQuery"
              desc="Hands on experience"
            />
            <Skill
            className="skill_icon skill_sub_content"
              value="10"
              text="10"
              textColor="red"
              pathColor="#b67162"
              trailColor="#d8ebe4"
              skillName="SQL"
              desc="Hands on experience"
            />
            <Skill
            className="skill_icon skill_sub_content"
              value="80"
              text="80"
              textColor="red"
              pathColor="#e84545"
              trailColor="#d8ebe4"
              skillName="HTML/CSS"
              desc="Hands on experience"
            />
            <Skill
            className="skill_icon skill_sub_content"
              value="80"
              text="80"
              textColor="red"
              pathColor="#0a81ab"
              trailColor="#d8ebe4"
              skillName="GIT/GITHUB/POSTMAN"
              desc="Hands on experience"
            />
         
          </div>
        </div>
       </div>
      </section>
    </div>
  );
};

export default Index;
