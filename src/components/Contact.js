import React from "react";
import Social from "./Social";
import rrss from "../api/rrss.json";

const Contact = () => {
  return (
    <section className="section alt" id="contact">
      <div className="container">
        <div className="contact-div">
          <div className="contact-area">
            <div className="section-title">
              <h2>Contacto</h2>
              <p>Ponte en contacto conmigo en:</p>
            </div>
            <div>
              <a href="mailto:cmayadev@gmail.com">
                <span>cmayadev@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="rrss-area">
            <div className="section-title">
              <h2>RRSS</h2>
            </div>
            <div>
              <ul>
                {rrss.map((social) => (
                  <Social key={social.title} social={social} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
