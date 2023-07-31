import React from "react";
import Typewriter from "typewriter-effect";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="resume-content">
          <div className="">
            <p className="greetings">Hello world, soy</p>
            <h1>Cristian Maya</h1>
            <div className="header-sub-text job">
              Desarrollador
              <Typewriter
                options={{
                  strings: [" Frontend", " Backend"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="header-sub-text">
              <p className="font-large">
                Desarrollador Web con experiencia en PHP, MySQL, HTML, CSS y
                JavaScript. Programar es mi hobby y mi profesión, por lo que
                busco seguir aprendiendo y mejorando en este mundillo.
              </p>
            </div>
          </div>
          <div>
            <picture>
              <img
                src="about/portrait.webp"
                alt="Cmaya Portrait"
                height="auto"
                width="auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
