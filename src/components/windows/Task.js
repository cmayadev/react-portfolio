const Task = (props) => {

    const { name, icon, minimized } = props;

    return ( 
        <label className={minimized ? '' : 'opened'}>
            <span><img src={`icons/${icon}.png`} /></span>
            <span>{name}</span>
        </label>
    );
}

export default Task;