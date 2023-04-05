import { useRef, useState } from 'react';
import Draggable from "react-draggable";

import ContentIcon from './ContentIcon';

import './Window.scss';

const Window = (props) => {

    const { id, title, type, status, active, setTasks } = props;

    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleClick = (taskId) => {
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
            task.status = 'open';
            task.active = true;
            return newState;
        })
    };

    const handleStatus = (taskId, status) => {
        setTasks(state => {
            const newState = structuredClone(state);
            newState.map(function(task) {
                if(task.status === 'open' && task.id !== taskId) {
                    task.active = true;
                    return;
                }
            });
            const task = newState.find((original) => original.id === taskId);
            task.status = status;
            return newState;
        })

        if (status === '') {
            setPosition({ x: 0, y: 0 });
        }

    };

    return ( 
        <Draggable nodeRef={nodeRef} position={position} onStop={(e, data) => setPosition({ x: data.lastX, y: data.lastY })} onStart={() => handleClick(id)}>
            <div ref={nodeRef} className={active ? 'window ' + status + ' active' : 'window ' + status} onClick={() => handleClick(id)}>
                <div className="window-toolbar">   
                    <div className="window-title">{title}</div>   
                    <div className="window-buttons">
                        <div className="window-button window-close" onClick={(e) => { e.stopPropagation(); handleStatus(id, ''); }}></div>
                        { type !== 'alert' && <div className="window-button window-minimize" onClick={() => handleStatus(id, 'minimized')}></div> }
                    </div>        
                </div>
                { !type &&
                    <div className="options line">
                        <div className="item">File</div>
                        <div className="item">Edit</div>
                        <div className="item">Views</div>
                        <div className="item">Go</div>
                        <div className="item">Favourites</div>
                        <div className="item">Help</div>
                    </div>
                }
                <div className={`window-wrapper ${type === 'update' ? 'update' : 'white'}`}>
                    
                    {(() => {
                        switch (title) {
                        case 'My Computer':
                            return <>
                                <ContentIcon name="3½ Floppy (A:)" icon="floppy" />
                                <ContentIcon name="WIN98 (C:)" icon="hard_disk" />
                                <ContentIcon name="MY DATA (D:)" icon="hard_disk" />
                                <ContentIcon name="(E:)" icon="cd_drive" />
                            </>
                        case 'My Documents':
                            return <>
                                <ContentIcon name="links.txt" icon="file" />
                                <ContentIcon name="passwords.txt" icon="file" />
                                <ContentIcon name="React for Dummies.txt" icon="file" selected={true} />
                            </>
                        case 'won':
                            return 
                        case 'Recycle Bin':
                            return <>
                                <ContentIcon name="Dreamweaver.exe" icon="dreamweaver" />
                                <ContentIcon name="main.css" icon="file" />
                                <ContentIcon name="main.old.css" icon="file" />
                                <ContentIcon name="php.ini" icon="ini" />
                            </>
                        case 'Windows Update':
                            return <>
                                <div className="update-wrapper">
                                    <img className="update-img" src="icons/update.gif" alt="Windows Update" />
                                    <div className="title">Intall progress</div>
                                    <div id="install-bar">
                                        
                                    </div>
                                    <div className="window-actions">
                                        <button className="window-action-button">Cancel</button>
                                    </div>
                                </div>
                            </>
                        default:
                            return null
                        }
                    })()}

                    { type === 'alert' &&
                        <>
                            <div className="window-content">
                                Are you sure you want to empty the recycle bin?
                            </div>
                            <div className="window-actions">
                                <button className="window-action-button">No</button>
                                <button className="window-action-button">Yes</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </Draggable>
    );
}

export default Window;