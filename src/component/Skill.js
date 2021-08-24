import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skill = (props) => {
  return (
    <div>
              
        <CircularProgressbar
        className="skil"
          value={props.value}
          text={`${props.text}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
            trailColor: props.trailColor,
          })}
         
        />
        <div className="skillName">
        <p>{props.skillName}</p>
          {/* {props.desc} */}
        </div>
    
    </div>
  );
};

export default Skill;
