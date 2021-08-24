import React from "react";

const Project_card = (props) => {
  return (
    <div>
      
        <div className="card" style={{ width: "14rem" }}>
      <a href={props.href}>
          <img
            className="card-img-top"
            src={props.src}
            alt="Card_img"
            width="100px"
          />
          </a>
          <div className="card-body text-center">
            <h4 className="card-title text-decoration-underline">
              {props.title1}
            </h4>
            <h6 className="card-title lead"> {props.title2}</h6>
            <h6 className="card-title lead"> {props.title3}</h6>
            <h6 className="card-title lead"> {props.title4}</h6>
          </div>
        </div>
      
    </div>
  );
};

export default Project_card;
