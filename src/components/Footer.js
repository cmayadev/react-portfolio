import React from 'react';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

library.add(faLinkedinIn); 
library.add(faTwitter); 
library.add(faInstagram); 
library.add(faGithub); 

const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return ( 
        <footer>
            <section className="footer-area">
                    <div className="footer-content">
                        <div className="rrss">
                            <ul className="react-reveal list_style">
                                <li className="branch">
                                    <img src="icons/fork.png" alt="branch" /> master*
                                </li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <span>© {getYear()} cmayadev</span>
                        </div>
                    </div>
            </section>
        </footer>
    );
}

export default Footer;