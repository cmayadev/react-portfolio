import React from "react";

import "./Job.scss";

const Job = (props) => {
  const { from, to, company, position, description, actually, skills } =
    props.job;

  return (
    <div className="job-container">
      <div className="job-date">
        <span>
          {from} - {actually ? "Actualmente" : to}
        </span>
      </div>
      <div className="job-body">
        <div className="job-header">
          <img src={`logos/${company.toString().toLowerCase()}.jpg`} alt={company} />
          <div className="job-title">
            <div>{company}</div>
            <span className="job-position">{position}</span>
          </div>
        </div>
        <div className="job-description">{description}</div>
        <p className="job-skills">
          {skills &&
            skills.map((skill, i) => (
              <span className={skill.abv} key={skill.name}>
                {skill.name}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default Job;
