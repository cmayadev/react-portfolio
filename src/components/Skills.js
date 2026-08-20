import React from "react";
import Tech from "./Tech.js";

import skills from "../api/skills.json";

const SKILL_GROUPS = [
  { title: "Lenguajes", type: "language" },
  { title: "Frameworks", type: "framework" },
  { title: "Bases de Datos", type: "bd" },
  { title: "Herramientas", type: "tool" },
];

const Skills = () => {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Conocimientos</h2>
          <p>Algunos lenguajes, programas y tecnologías que conozco.</p>
        </div>

        <div className="techs">
          {SKILL_GROUPS.map(({ title, type }) => (
            <div className="group" key={type}>
              <h3>{title}</h3>
              <div className="grid">
                {skills
                  .filter((skill) => skill.type === type)
                  .map((skill) => (
                    <Tech key={skill.title} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
