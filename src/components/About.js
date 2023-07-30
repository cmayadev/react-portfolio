import React from "react";
import Card from "./Card";

import { getAge } from "../services/dates";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about">
          <div className="about-cards">
            <Card
              title="BackEnd"
              desc="Experiencias digitales en segundo plano."
              icon="backend"
            />
            <Card
              title="FrontEnd"
              desc="El puente entre ideas y experiencias digitales."
              icon="frontend"
            />
            <Card
              title="Diseño"
              desc="Dando forma a páginas intuitivas y funcionales."
              icon="design"
            />
          </div>
          <div className="about-text">
            <div className="section-title">
              <h2>Sobre mí</h2>
              <div className="about-me mt-4">
                <p>
                  Hola! Soy Cristian Maya, desarrollador web de{" "}
                  {getAge("1988/11/09")} años.
                </p>
                <p>
                  Desde muy pequeño siempre me ha apasionado la informática.
                </p>
                <p>
                  Hace unos {getAge("2007/01/01")} años aprox. empecé a tantear
                  el mundo del desarrollo web, y actualmente llevo alrededor de{" "}
                  {getAge("2016/01/01")} años dedicándome a ello
                  profesionalmente.
                </p>
                <p>
                  Intento aprender y mejorar día tras día. Me gusta trabajar en
                  equipo y desarrollar proyectos con mis compañeros aprendiendo
                  con y de ellos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
