import React from "react";

const Tech = (props) => {
  const { title, icon } = props.skill;

  return (
    <div className="tech-card">
      <img
        className=" h-10 w-10 text-zinc-600 dark:text-zinc-300"
        src={icon}
        alt={title + "_logo"}
        height="48px"
        width="48px"
      />
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
    </div>
  );
};

export default Tech;
