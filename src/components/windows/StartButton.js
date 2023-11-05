const StartButton = (props) => {
  const { onClick } = props;

  const handleClick = (event) => {
    event.stopPropagation();
    onClick && onClick();
  };

  return (
    <div className="toolbar-start-menu unselectable">
      <label
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
