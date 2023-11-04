import { useEffect, useRef } from "react";

const StartButton = (props) => {
  const ref = useRef(null);
  const { onClick } = props;

  const handleClick = (event) => {
    event.stopPropagation();
    onClick && onClick();
  };

  return (
    <div className="toolbar-start-menu">
      <label
        ref={ref}
        htmlFor="start-button-input"
        className="start-button"
        onClick={handleClick}
      >
        Start
      </label>
    </div>
  );
};

export default StartButton;
