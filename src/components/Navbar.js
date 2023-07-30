import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import File from "./File";

import files from "../api/files.json";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeLi, setActiveLi] = useState("Resume");
  const [lastActiveLi, setLastActiveLi] = useState("Resume");

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

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-custom navbar-light sticky ${
          menu || navbar ? "fixed-top white" : ""
        }`}
      >
        <div className="navbar-content">
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

          <Link
            className="logo"
            href="#"
            to="resume"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <picture>
              <img
                src="cmayadev.png"
                alt="cmayadev-logo"
                height="24px"
                width="104px"
              />
            </picture>
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
              {files.map((file, index) => (
                <File
                  key={index}
                  props={{
                    name: file.name,
                    to: file.to,
                    ext: file.ext,
                    text: file.text,
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className={`breadcrumbs ${navbar ? "fixed-breadcrumb" : ""}`}>
        <div className="container">
          src &gt; components &gt;{" "}
          <img
            height="15px"
            width="15px"
            alt={`js-logo`}
            src={`files/js.svg`}
          />{" "}
          {activeLi}
          .js
        </div>
      </div>
    </>
  );
};

export default Navbar;
