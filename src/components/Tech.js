import React from "react";

const Tech = (props) => {
  const { title, icon } = props.skill;

  return (
    <div>
      <div className="tech-box">
        <img src={icon} alt={title + "_logo"} height="48px" width="48px" />
      </div>
      <div className="tech-name">{title}</div>
    </div>
  );
};

export default Tech;
