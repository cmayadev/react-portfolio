const Task = (props) => {

    const { name, icon } = props;

    return ( 
        <label for="windows-ie-input-min" class="ie-tab tab windows-box-shadow">
            <span><img src={`icons/${icon}.png`} /></span>
            <span>{name}</span>
        </label>
    );
}

export default Task;