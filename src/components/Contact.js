import React from "react";
import Social from "./Social";
import rrss from "../api/rrss.json";
import Business from "./Business";

const Contact = () => {
  return (
    <section className="section alt" id="contact">
      <div className="container">
        <div className="contact-div">
          <div className="rrss-area">
            <div className="section-title">
              <h2>Contacto</h2>
              <p>
                Ponte en contacto conmigo por correo electrónico o sígueme en
                las redes sociales.
              </p>
            </div>
            <div className="contact-container">
              <div className="rrss-grid">
                {rrss.map((social) => (
                  <Social key={social.title} social={social} />
                ))}
              </div>
              <div className="email-area">
                <Business />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
