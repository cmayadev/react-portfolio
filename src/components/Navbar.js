import React, { useEffect, useState } from "react";
import File from "./File";

import files from "../api/files.json";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(files[0].to);

  useEffect(() => {
    const handleScroll = () => {
      setNavbar(window.scrollY >= 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = files
      .map((file) => document.getElementById(file.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeFile = files.find((file) => file.to === activeSection) || files[0];

  return (
    <>
      <nav
        className={`navbar navbar-custom navbar-light sticky ${
          menu || navbar ? "fixed-top white" : ""
        }`}
      >
        <div className="navbar-content">
          <a
            href="#resume"
            className={`back-top text-replace ${navbar ? "" : "hidden"}`}
          >
            Top
          </a>

          <a className="logo" href="#resume">
            <picture>
              <img
                src="cmayadev.png"
                alt="cmayadev-logo"
                height="24px"
                width="104px"
              />
            </picture>
          </a>
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
              {files.map((file) => (
                <File
                  key={file.to}
                  active={file.to === activeSection}
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
          {activeFile.name}
          .js
        </div>
      </div>
    </>
  );
};

export default Navbar;
