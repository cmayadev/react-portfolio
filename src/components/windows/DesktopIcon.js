

const DesktopIcon = (props) => {

    const { id, label, icon, setTasks } = props;

    const handleOpen = (taskId) => {
        setTasks(state => {
            const newState = structuredClone(state);
            newState.map(function(task) {
                if(task.status === 'open' && task.id !== taskId) {
                    task.active = false;
                    return;
                }
            });
            const task = newState.find((original) => original.id === taskId);
            task.status = "open";
            task.active = true;
            return newState;
        })
    };

    return ( 
        <div className="desktop-icon my-computer">
            <img src={`icons/${icon}.png`} title={label} alt={label} onClick={() => handleOpen(id)}/> {label}
        </div>
    );
}

export default DesktopIcon;