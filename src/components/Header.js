import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {

    const [navbar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(0);

    const changeBackground = () => {
        if(window.scrollY >= 40) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
    
            setScroll(scroll);
        }
    
        window.addEventListener('scroll', () => {
            changeBackground();
            progressBarHandler();
        });
    
        return () => window.removeEventListener("scroll", progressBarHandler);

    });

    return ( 

        <nav className={navbar || menu ? 'navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky white' : 'navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky'}>
            
            <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>

            <Link
                href="#"
                to="resume"
                className={`back-top text-replace ${navbar ? '' : 'hidden'}`}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Top
            </Link>
            
            <div className="container">
                <Link className="logo" href="#" to="resume">
                    <img src="cmayadev.png" alt="cmayadev-logo" />
                </Link>
                <button onClick={() => setMenu(!menu)} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={menu ? 'true' : 'false'} aria-label="Toggle navigation"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <div className={`navbar-collapse offset collapse ${menu ? 'show' : ''}`} id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                href="#resume"
                                to="resume"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#about"
                                to="about"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Sobre mí
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#skills"
                                to="skills"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Conocimientos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#experience"
                                to="experience"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Experiencia
                            </Link>                        
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#contact"
                                to="contact"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Contacto
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;