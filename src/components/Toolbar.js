const Toolbar = () => {
  return (
    <div className="appName">
      <img src="logo.png" alt="logo" />
      <div className="appTitle">react-porfolio - Maya Studio Code</div>
      <div className="appControls">
        <div className="appMinimize">
          <img src="icons/minimize.png" alt="minimize" />
        </div>
        <div className="appMaximize">
          <img src="icons/maximize.png" alt="maximize" />
        </div>
        <div className="appClose">
          <img src="icons/close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
