import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Toolbar from "./Toolbar";
import "./Header.css";
import File from "./File";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeLi, setActiveLi] = useState("Resume");
  const [lastActiveLi, setLastActiveLi] = useState("Resume");

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const handleActiveLi = () => {
      const navItems = document.querySelectorAll(".nav-item");
      const activeLiElement = Array.from(navItems).find((element) =>
        element.querySelector(":scope .active")
      );
      if (activeLiElement) {
        const newActiveLi = activeLiElement.getAttribute("data-name");
        if (newActiveLi !== lastActiveLi) {
          setActiveLi(newActiveLi);
          setLastActiveLi(newActiveLi);
        }
      }
    };

    const handleScroll = () => {
      changeBackground();
      handleActiveLi();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastActiveLi]);

  return (
    <header>
      <Toolbar />

      <nav
        className={
          navbar || menu
            ? "navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky white"
            : "navbar navbar-expand-lg navbar-custom navbar-light sticky"
        }
      >
        <Link
          href="#"
          to="resume"
          className={`back-top text-replace ${navbar ? "" : "hidden"}`}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Top
        </Link>

        <div className="container">
          <Link
            className="logo"
            href="#"
            to="resume"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src="cmayadev.png" alt="cmayadev-logo" />
          </Link>
          <button
            onClick={() => setMenu(!menu)}
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={menu ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            className={`navbar-collapse offset collapse ${menu ? "show" : ""}`}
            id="navbarCollapse"
          >
            <ul id="navbar-navlist" className="navbar-nav ml-auto">
              <File
                props={{
                  name: "Resume",
                  to: "resume",
                  ext: "js",
                  text: "Inicio",
                }}
              />
              <File
                props={{
                  name: "About",
                  to: "about",
                  ext: "js",
                  text: "Sobre mí",
                }}
              />
              <File
                props={{
                  name: "Skills",
                  to: "skills",
                  ext: "js",
                  text: "Conocimientos",
                }}
              />
              <File
                props={{
                  name: "Experience",
                  to: "experience",
                  ext: "js",
                  text: "Experiencia",
                }}
              />
              <File
                props={{
                  name: "Contact",
                  to: "contact",
                  ext: "js",
                  text: "Contacto",
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
      <div className={`breadcrumbs ${navbar ? "fixed-breadcrumb" : ""}`}>
        <div className="container">
          src &gt; components &gt;{" "}
          <img width="15px" alt={`js-logo`} src={`files/js.svg`} /> {activeLi}
          .js
        </div>
      </div>
    </header>
  );
};

export default Header;
