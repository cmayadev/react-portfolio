import { useDisplay } from "../contexts/DisplayContext";

const Toolbar = () => {
  const { setDisplay } = useDisplay();

  return (
    <div className="appName">
      <div className="app-options">
        <img src="logo.png" alt="dev-logo" height="26px" width="26px" />
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="appTitle">react-porfolio - Maya Studio Code</div>
      <div className="appControls">
        <div
          className="appMinimize"
          onClick={() => {
            setDisplay({ mode: "desktop", status: "minimized" });
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M14 8v1H3V8h11z" />
          </svg>
        </div>
        <div className="appMaximize">
          <img src="icons/maximize.png" alt="maximize" />
        </div>
        <div
          className="appClose"
          onClick={() => {
            setDisplay({ mode: "desktop", status: "closed" });
          }}
        >
          <img src="icons/close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
