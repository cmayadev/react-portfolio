const Task = (props) => {
  const { id, name, icon, status, active, setTasks } = props;

  const handleClick = (taskId) => {
    setTasks((state) => {
      const newState = structuredClone(state);
      newState.forEach(function (task) {
        if (
          task.status === "open" &&
          task.active === true &&
          task.id !== taskId
        ) {
          task.status = "unfocused";
          task.active = false;
        }
      });

      const task = newState.find((task) => task.id === taskId);
      switch (task.status) {
        case "open":
          if (task.active === false) {
            task.status = "open";
            task.active = true;
          }
          if (task.active === true) {
            task.status = "minimized";
            task.active = false;
          }
          break;
        case "unfocused":
          if (task.active === false) {
            task.status = "open";
            task.active = true;
          }
          break;
        case "minimized":
          if (task.active === true) {
            task.status = "minimized";
            task.active = false;
          }
          if (task.active === false) {
            task.status = "open";
            task.active = true;
          }
          break;
        default:
          break;
      }
      return newState;
    });
  };

  return (
    <label
      className={active ? status + " active" : status}
      onClick={() => handleClick(id)}
    >
      <span>
        <img src={`icons/${icon}.png`} alt={name} />
      </span>
      <span>{name}</span>
    </label>
  );
};

export default Task;
