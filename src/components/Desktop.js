import { useState, useCallback, useEffect } from "react";

import Clock from "./windows/Clock";
import Task from "./windows/Task";
import Window from "./windows/Window";
import DesktopIcon from "./windows/DesktopIcon";

import "./Desktop.scss";

import useTasksStatus from "../hooks/useTasksStatus";
import { useDisplay } from "../contexts/DisplayContext";
import StartButton from "./windows/StartButton";

const Desktop = () => {
  const [startMenu, setStartMenu] = useState("closed");
  const [tasks, setTasks] = useTasksStatus();
  const { display, setDisplay } = useDisplay();

  useEffect(() => {
    if (display.status === "closed") {
      setTasks((state) => {
        const newState = structuredClone(state);
        newState.forEach(function (task) {
          if (task.id === 6) {
            task.status = "closed";
          }
        });
        return newState;
      });
    }
  }, [display, setTasks]);

  const handleClick = (taskId) => {
    setTasks((state) => {
      const newState = structuredClone(state);
      newState.forEach(function (task) {
        if (task.status === "open" && task.id !== taskId) {
          task.status = "unfocused";
          task.active = false;
        }
      });

      const task = newState.find((original) => original.id === taskId);
      task.status = "open";
      task.active = true;
      task.selected = false;
      return newState;
    });
  };

  const handleDesktop = () => {
    setTasks((state) => {
      const newState = structuredClone(state);
      newState.forEach(function (task) {
        if (task.status === "open") {
          task.status = "minimized";
        }
      });
      return newState;
    });
  };

  const handleVisualButton = useCallback(
    (event) => {
      setDisplay({ mode: "portfolio" });
    },
    [setDisplay]
  );

  const handleStartMenu = useCallback((event) => {
    setStartMenu((prevMenuStatus) =>
      prevMenuStatus === "closed" ? "open" : "closed"
    );
  }, []);

  const handleOutside = useCallback(
    (event) => {
      setTasks((state) => {
        const newState = structuredClone(state);
        newState.forEach(function (task) {
          task.selected = false;
        });
        return newState;
      });
    },
    [setTasks]
  );

  return (
    <>
      <div
        className="windows"
        onClick={() => {
          setStartMenu("closed");
        }}
      >
        <div className="overlay">VGA</div>

        {tasks.map((window) => (
          <Window
            id={window.id}
            key={window.id}
            title={window.name}
            type={window.type}
            status={window.status}
            active={window.active}
            setTasks={setTasks}
          />
        ))}

        <div className="desktop-icons">
          {tasks.map(
            (icon) =>
              icon.desktop === true && (
                <DesktopIcon
                  id={icon.id}
                  key={icon.id}
                  label={icon.name}
                  icon={icon.large}
                  handleVisualButton={handleVisualButton}
                  selected={icon.selected}
                  setTasks={setTasks}
                  onClickOutside={() => {
                    handleOutside();
                  }}
                />
              )
          )}
        </div>

        <div id="toolbar">
          <StartButton
            onClick={(event) => {
              handleStartMenu(event);
            }}
            onClickOutside={() => {
              handleOutside();
            }}
          />

          <div
            id="start-menu"
            className={`windows-box-shadow ${startMenu} unselectable`}
          >
            <div id="windows-start-menu-blue">
              Windows<span>98</span>
            </div>
            <ul>
              <li className="line update" onClick={() => handleClick(4)}>
                <label htmlFor="windows-update-input">
                  <img src="icons/windows-update.png" alt="Windows Update" />
                  Windows Update
                </label>
              </li>
              <li className="programs">
                <label>
                  <img src="icons/programs.png" alt="Programs" />
                  Progams
                </label>
                <ul className="windows-box-shadow">
                  <li onClick={() => handleClick(3)}>
                    <label>
                      <img src="icons/ie-small.png" alt="Internet Explorer" />
                      Internet Explorer
                    </label>
                  </li>
                  <li>
                    <label>
                      <img src="icons/notepad.png" alt="Notepad" />
                      Notepad
                    </label>
                  </li>
                  <li onClick={handleVisualButton}>
                    <label>
                      <img
                        src="icons/visual_code.png"
                        alt="Visual Studio Code"
                      />
                      Visual Studio Code
                    </label>
                  </li>
                </ul>
              </li>
              <li onClick={() => handleClick(2)}>
                <label htmlFor="windows-documents-input">
                  <img src="icons/documents.png" alt="Documents" />
                  Documents
                </label>
              </li>
              <li className="line">
                <label htmlFor="windows-help-input">
                  <img src="icons/help.png" alt="Help" />
                  Help
                </label>
              </li>
              <li>
                <label htmlFor="login-screen-input">
                  <img src="icons/key.png" alt="Log Off" />
                  Log Off
                </label>
              </li>
              <li>
                <label htmlFor="shutdown-screen-input">
                  <img src="icons/shutdown.png" alt="Shutdown" />
                  Shutdown
                </label>
              </li>
            </ul>
          </div>

          <div className="toolbar-left">
            <div className="toolbar-separator"></div>

            <button
              className="toolbar-icon desktop"
              onClick={() => handleDesktop()}
            ></button>
            <button
              className="toolbar-icon ie"
              onClick={() => handleClick(3)}
            ></button>
            <button className="toolbar-icon outlook"></button>

            <div className="toolbar-separator"></div>

            <div className="toolbar-items">
              {tasks.map((task) => (
                <Task
                  id={task.id}
                  key={task.id}
                  name={task.name}
                  active={task.active}
                  icon={task.icon}
                  status={task.status}
                  setTasks={setTasks}
                />
              ))}
            </div>
          </div>

          <div className="toolbar-right">
            <button className="toolbar-icon">
              <img src="icons/volume.png" alt="Volume" />
            </button>
            <button className="toolbar-icon">
              <img src="icons/usb.png" alt="Usb" />
            </button>
            <button className="toolbar-icon">
              <img src="icons/net.gif" alt="Telnet" />
            </button>
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
