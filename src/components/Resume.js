import React from 'react';
import Typewriter from "typewriter-effect";
import './Resume.css';

const Resume = () => {
    return ( 
        <section className="resume" id="resume">
            <div className="container">
                <div className="row text-left justify-content-start align-items-center">
                    <div className="col-lg-7 col-md-7 align-items-center">
                        <div className="text-left">
                            <h3>Hola, soy</h3>
                            <h1>Cristian Maya</h1>
                            <h5 className="header-sub-text job">
                                Desarrollador 
                                <Typewriter
                                    options={{
                                        strings: [' Frontend', ' Backend'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h5>
                            <div className="header-sub-text">
                                <p className="font-large">
                                    Desarrollador Web con experiencia en PHP, MySQL, HTML, CSS y JavaScript. 
                                    Programar es mi hobby y mi profesión, por lo que busco seguir aprendiendo y mejorando en este mundillo. 
                                </p>
                            </div>
{/*                             <div className="resume-links">
                                <a href={process.env.PUBLIC_URL + '/cv.pdf'} download={process.env.PUBLIC_URL + '/cv.pdf'} className="btn btn-default primary-btn">Descargar cv</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div>
                            <img src="about/portrait.png" alt="Cmaya Portrait" className="img-fluid m-auto position-relative" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;