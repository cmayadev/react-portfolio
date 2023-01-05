import React from 'react';
import './Contact.css';

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
                                <li>
                                    <a href="https://www.linkedin.com/in/cmayadev/" title="LinkedIn" target="_blank" rel="noreferrer">
                                        <img src="socials/linkedin.svg" alt="LinkedIn" width="30px" height="30px" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/nejima/" title="Instagram" target="_blank" rel="noreferrer">
                                        <img src="socials/instagram.svg" alt="Instagram" width="30px" height="30px" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/cmayadev" title="GitHub" target="_blank" rel="noreferrer">
                                        <img src="socials/github.svg" alt="GitHub" width="30px" height="30px" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/NejimaErland" title="Twitter" target="_blank" rel="noreferrer">
                                        <img src="socials/twitter.svg" alt="Twitter" width="30px" height="30px" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                </div>

            </div>
        </section>
    );
}

export default Contact;