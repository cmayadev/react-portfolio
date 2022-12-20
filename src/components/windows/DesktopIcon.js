import { useEffect, useRef } from 'react';

import './DesktopIcon.scss';

const DesktopIcon = (props) => {

    const ref = useRef(null);

    const { id, label, icon, selected, setTasks, onClickOutside  } = props;

    const style = { "--icon-image": `url('/icons/${icon}.png')` };

    const handleClick = (taskId) => {
        setTasks(state => {
            const newState = structuredClone(state);
            newState.map(function(task) {
                if(task.selected && task.id !== taskId) {
                    task.selected = false;
                    return;
                }
            });
            const task = newState.find((original) => original.id === taskId);
            task.selected = true;
            return newState;
        })
    };

    const handleOpen = (taskId) => {
        
        setTasks(state => {
            const newState = structuredClone(state);
            newState.map(function(task) {
                if(task.status === 'open' && task.id !== taskId) {
                    task.status = 'unfocused';
                    task.active = false;
                    return;
                }
            });
            const task = newState.find((original) => original.id === taskId);
            task.status = "open";
            task.active = true;
            task.selected = false;
            return newState;
        })
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ onClickOutside ]);

    return ( 
        <div className={selected ? 'desktop-icon selected' : 'desktop-icon'} ref={ref} onClick={() => handleClick(id)} onDoubleClick={() => handleOpen(id)} >
            <div className='icon-wrapper'>
                <img src={`icons/${icon}.png`} title={label} alt={label} />
                <div className={'selection-effect ' + icon} style={style}></div>
            </div>
            <div className="title">{label}</div>
        </div>
    );
}

export default DesktopIcon;