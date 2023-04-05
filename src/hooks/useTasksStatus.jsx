import { useState } from "react";

const useTasksStatus = () => {
  const initialTasks = [
    {
      id: 1,
      name: "My Computer",
      icon: "my-pc",
      large: "my-pc",
      status: "",
      active: false,
      selected: false,
      desktop: true,
    },
    {
      id: 2,
      name: "My Documents",
      icon: "documents",
      large: "documents",
      status: "",
      active: false,
      selected: false,
      desktop: true,
    },
    {
      id: 3,
      name: "Internet Explorer",
      icon: "ie-html",
      large: "ie",
      status: "open",
      active: true,
      selected: false,
      desktop: true,
    },
    {
      id: 4,
      name: "Windows Update",
      type: "update",
      icon: "windows-update",
      large: "windows-update",
      status: "",
      active: false,
      selected: false,
      desktop: true,
    },
    {
      id: 5,
      name: "Recycle Bin",
      icon: "bin-full",
      large: "bin-full",
      status: "",
      active: false,
      selected: false,
      desktop: true,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  return [tasks, setTasks];
};

export default useTasksStatus;
