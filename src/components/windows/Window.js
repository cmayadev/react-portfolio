import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import ContentIcon from "./ContentIcon";

import "./Window.scss";
import { randomPhrase } from "../../utils";

const Window = (props) => {
  const { id, title, type, status, active, setTasks } = props;
  const [quote, setQuote] = useState(randomPhrase());

  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (id === 3 && status === "open") {
      setQuote(randomPhrase());
    }
  }, [status]);

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
      return newState;
    });
  };

  const handleStatus = (taskId, status) => {
    setTasks((state) => {
      const newState = structuredClone(state);
      newState.forEach(function (task) {
        if (task.status === "open" && task.id !== taskId) {
          task.active = true;
        }
      });
      const task = newState.find((original) => original.id === taskId);
      task.status = status;
      return newState;
    });

    if (status === "") {
      setPosition({ x: 0, y: 0 });
    }
  };

  const renderDivs = () => {
    const result = [];
    for (let i = 0; i < 26; i++) {
      result.push(<div key={i}></div>);
    }
    return result;
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onStop={(e, data) => setPosition({ x: data.lastX, y: data.lastY })}
      onStart={() => handleClick(id)}
    >
      <div
        ref={nodeRef}
        className={active ? "window " + status + " active" : "window " + status}
        onClick={() => handleClick(id)}
      >
        <div className="window-toolbar">
          <div className="window-title">{title}</div>
          <div className="window-buttons">
            <div
              className="window-button window-close"
              onClick={(e) => {
                e.stopPropagation();
                handleStatus(id, "");
              }}
            ></div>
            {type !== "alert" && (
              <div
                className="window-button window-minimize"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatus(id, "minimized");
                }}
              ></div>
            )}
          </div>
        </div>
        {!type && (
          <div className="options line">
            <div className="item">File</div>
            <div className="item">Edit</div>
            <div className="item">Views</div>
            <div className="item">Go</div>
            <div className="item">Favourites</div>
            <div className="item">Help</div>
          </div>
        )}
        {title === "Internet Explorer" && (
          <div className="options address">
            <div>Address</div>
            <input
              type="text"
              className="inverse-windows-box-shadow"
              value="https://cmaya.dev/"
              disabled
            ></input>
          </div>
        )}
        <div
          className={`window-wrapper ${type === "update" ? "update" : "white"}`}
        >
          {(() => {
            switch (title) {
              case "My Computer":
                return (
                  <>
                    <ContentIcon name="3½ Floppy (A:)" icon="floppy" />
                    <ContentIcon name="WIN98 (C:)" icon="hard_disk" />
                    <ContentIcon name="MY DATA (D:)" icon="hard_disk" />
                    <ContentIcon name="(E:)" icon="cd_drive" />
                  </>
                );
              case "My Documents":
                return (
                  <>
                    <ContentIcon name="links.txt" icon="file" />
                    <ContentIcon name="passwords.txt" icon="file" />
                    <ContentIcon name="React for Dummies.txt" icon="file" />
                  </>
                );
              case "won":
                return;
              case "Internet Explorer":
                return (
                  <div style={{ fontFamily: "Times New Roman", width: "100%" }}>
                    <p style={{ fontSize: "12px", marginBottom: "8px" }}>
                      Content-Type: text/html Date: Thu, 01 Jan 1970 00:00:00
                      Connection: close
                    </p>
                    <p
                      style={{
                        marginBottom: "8px",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      400 Bad Request
                    </p>
                    <p style={{ marginBottom: "8px" }}>{quote}</p>
                    <hr />
                  </div>
                );
              case "Recycle Bin":
                return (
                  <>
                    <ContentIcon name="Dreamweaver.exe" icon="dreamweaver" />
                    <ContentIcon name="main.css" icon="file" />
                    <ContentIcon name="main.old.css" icon="file" />
                    <ContentIcon name="php.ini" icon="ini" />
                  </>
                );
              case "Windows Update":
                return (
                  <>
                    <div className="update-wrapper">
                      <img
                        className="update-img"
                        src="icons/update.gif"
                        alt="Windows Update"
                      />
                      <div className="title">Install progress</div>
                      <div id="install-bar">{renderDivs()}</div>
                      <div className="window-actions">
                        <button
                          className="window-action-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatus(id, "");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                );
              default:
                return null;
            }
          })()}

          {type === "alert" && (
            <>
              <div className="window-content">
                Are you sure you want to empty the recycle bin?
              </div>
              <div className="window-actions">
                <button className="window-action-button">No</button>
                <button className="window-action-button">Yes</button>
              </div>
            </>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
