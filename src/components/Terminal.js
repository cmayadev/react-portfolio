import React from "react";
import Typewriter from "typewriter-effect";

const Terminal = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="terminal-tabs">
          <span className="">TERMINAL</span>
          <span className="">OUTPUT</span>
          <span className="">DEBUG CONSOLE</span>
        </div>
        <div className="terminal-content">
          <p className="text-status-success">Compiled successfully!</p>

          <p>
            You can now view <span className="fw-bold">react-portfolio</span> in
            the browser.
          </p>

          <div className="terminal-cols">
            <div className="terminal-group">
              <div>
                <span className="fw-bold">Local</span>:
              </div>
              <div>
                <a href="/">https://www.cmaya.dev</a>
              </div>
            </div>
            <div className="terminal-group">
              <div>
                <span className="fw-bold">On Your Network:</span>
              </div>
              <div>
                <a href="/">http://localhost:3000</a>
              </div>
            </div>
          </div>

          <p>
            Note that this project is build with React. <br /> Design by{" "}
            <span className="text-status-info">Cristian Maya</span> inspired by{" "}
            <span className="text-status-info">Visual Studio Code</span>.
          </p>

          <div>
            PS <span className="path">C:\var\www\react-portfolio</span>
            {`>`}
            <Typewriter
              options={{
                cursor: "█",
                strings: [""],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
