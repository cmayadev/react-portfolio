import React from 'react';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

library.add(faLinkedinIn); 
library.add(faTwitter); 
library.add(faInstagram); 
library.add(faGithub); 

const Footer = () => {
    return ( 
        <footer>
            <section className="footer-area">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-sm-4">
                            <ul className="react-reveal list_style">
                                <li>
                                    <a href="https://www.linkedin.com/in/cmayadev/" title="LinkedIn" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/NejimaErland" title="Twitter" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/nejima/" title="Instagram" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/cmayadev" title="GitHub" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-8 text-right">
                            <h6>Programado y diseñado por Cristian Maya</h6>
                            <p>© 2021 cmayadev</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;