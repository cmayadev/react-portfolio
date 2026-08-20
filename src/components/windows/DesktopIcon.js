import { updateTasks } from "../../utils";

import "./DesktopIcon.scss";

const DesktopIcon = (props) => {
  const { id, label, icon, handleVisualButton, selected, setTasks } = props;

  const style = { "--icon-image": `url('/icons/${icon}.png')` };

  const handleClick = (taskId) => {
    updateTasks(setTasks, (tasks) => {
      tasks.forEach((task) => {
        if (task.selected && task.id !== taskId) {
          task.selected = false;
        }
      });
      const task = tasks.find((original) => original.id === taskId);
      task.selected = true;
    });
  };

  const handleDoubleClick = (taskId) => {
    if (icon === "visual_code") {
      handleVisualButton();
    } else {
      updateTasks(setTasks, (tasks) => {
        tasks.forEach((task) => {
          if (task.status === "open" && task.id !== taskId) {
            task.status = "unfocused";
            task.active = false;
          }
        });

        const task = tasks.find((original) => original.id === taskId);
        task.status = "open";
        task.active = true;
        task.selected = false;
      });
    }
  };

  return (
    <div
      className={`${
        selected ? "desktop-icon selected" : "desktop-icon"
      } unselectable`}
      onClick={() => handleClick(id)}
      onDoubleClick={() => handleDoubleClick(id)}
    >
      <div className="icon-wrapper">
        <img src={`icons/${icon}.png`} title={label} alt={label} />
        <div className={"selection-effect " + icon} style={style}></div>
      </div>
      <div className="title">{label}</div>
    </div>
  );
};

export default DesktopIcon;
