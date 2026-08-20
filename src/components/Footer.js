import React from "react";

const TablerIcon = ({ className, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    {children}
  </svg>
);

const Footer = () => {
  return (
    <footer>
      <section className="footer-area">
        <div className="footer-content">
          <div className="footer-icons">
            <div className="exceed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="0.1"
                width="42"
                height="30"
                viewBox="0 0 16 14"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.904 9.57L8.928 5.596l3.976-3.976-.619-.62L8 5.286v.619l4.285 4.285.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5 3 5.619z"
                />
              </svg>
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-git-merge">
                <circle cx="7" cy="18" r="2" />
                <circle cx="7" cy="6" r="2" />
                <circle cx="17" cy="12" r="2" />
                <line x1="7" y1="8" x2="7" y2="16" />
                <path d="M7 8a4 4 0 0 0 4 4h4" />
              </TablerIcon>{" "}
              master*
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-refresh">
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </TablerIcon>
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-git-branch">
                <circle cx="7" cy="18" r="2" />
                <circle cx="7" cy="6" r="2" />
                <circle cx="17" cy="6" r="2" />
                <line x1="7" y1="8" x2="7" y2="16" />
                <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
                <polyline points="14 14 17 11 20 14" />
              </TablerIcon>
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-circle-x">
                <circle cx="12" cy="12" r="9" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </TablerIcon>{" "}
              0 &nbsp;
              <TablerIcon className="icon icon-tabler icon-tabler-alert-triangle">
                <path d="M12 9v2m0 4v.01" />
                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
              </TablerIcon>{" "}
              0
            </div>
            <div>
              <TablerIcon className="icon icon-tabler icon-tabler-folder">
                <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
              </TablerIcon>{" "}
              react-portfolio
            </div>
          </div>
          <div className="footer-icons">
            <div>
              <TablerIcon className="icon icon-tabler icon-tabler-git-commit">
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="3" x2="12" y2="9" />
                <line x1="12" y1="15" x2="12" y2="21" />
              </TablerIcon>{" "}
              cmayadev
            </div>
            <div className="exceed">UTF-8</div>
            <div className="exceed">CRLF</div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-braces">
                <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
                <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
              </TablerIcon>{" "}
              JavaScript
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-checks">
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
              </TablerIcon>{" "}
              Prettier
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-user">
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </TablerIcon>
            </div>
            <div className="exceed">
              <TablerIcon className="icon icon-tabler icon-tabler-bell">
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </TablerIcon>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
