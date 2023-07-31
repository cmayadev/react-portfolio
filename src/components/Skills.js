import React from "react";
import Tech from "./Tech.js";

import skills from "../api/skills.json";

const Skills = () => {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Conocimientos</h2>
          <p>Algunos lenguajes, programas y tecnologías que conozco.</p>
        </div>

        <div className="techs">
          <div className="group">
            <h3>Lenguajes</h3>
            <div className="grid">
              {skills.map((skill) =>
                skill.type === "language" ? (
                  <Tech key={skill.title} skill={skill} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="group">
            <h3>Frameworks</h3>
            <div className="grid">
              {skills.map((skill) =>
                skill.type === "framework" ? (
                  <Tech key={skill.title} skill={skill} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="group">
            <h3>Bases de Datos</h3>
            <div className="grid">
              {skills.map((skill) =>
                skill.type === "bd" ? (
                  <Tech key={skill.title} skill={skill} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="group">
            <h3>Herramientas</h3>
            <div className="grid">
              {skills.map((skill) =>
                skill.type === "tool" ? (
                  <Tech key={skill.title} skill={skill} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
