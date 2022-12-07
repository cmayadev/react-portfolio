import { useState } from "react";

const useTasksStatus =  () => {

    const initialTasks = [
        {
            id: 1,
            name: "My Computer",
            icon: "my-pc",
            status: '',
            active: false
        },
        {
            id: 2,
            name: "My Documents",
            icon: "documents",
            status: '',
            active: false
        },
        {
            id: 3,
            name: "Internet Explorer",
            icon: "ie-html",
            status: 'open',
            active: true
        },
        {
            id: 4,
            name: "Recycle Bin",
            icon: "bin-full",
            status: 'minimized',
            active: false
        },


    ];

    const [tasks, setTasks] = useState(initialTasks);

    return [tasks, setTasks];
};

export default useTasksStatus;