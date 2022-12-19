import { useState, useCallback } from "react";

import Clock from './windows/Clock';
import Task from './windows/Task';
import Window from './windows/Window';
import DesktopIcon from './windows/DesktopIcon';

import './Desktop.scss';

import useTasksStatus from "../hooks/useTasksStatus";

const Desktop = ({ display, onSetDisplay }) => {

    const [startMenu, setStartMenu] = useState();
    const [tasks, setTasks] = useTasksStatus();

    const handleVisualButton = useCallback(event => {
        onSetDisplay('portfolio')
      }, [onSetDisplay])

    const handleStartMenu = event => {
        if (startMenu === '') {
            setStartMenu('open');
        } else {
            setStartMenu('');
        }
    };

    return ( 
        <>
            <div className="windows">
                
                <div className="overlay">AV-1</div>

                {tasks.map(window => (
                    <Window
                        id={window.id}
                        key={window.id}
                        title={window.name}
                        status={window.status} 
                        active={window.active}
                        setTasks={setTasks}
                    />
                ))}

                <div className="desktop-icons">
                    {tasks.map(icon => (
                        <DesktopIcon id={icon.id} label={icon.name} icon={icon.large} setTasks={setTasks} />
                    ))}
                </div>

                <div id="toolbar">
                    <div className="toolbar-start-menu">
                        <label htmlFor="start-button-input" className="start-button" onClick={handleStartMenu}>Start</label>
                    </div>

                    <div id="start-menu" className={`windows-box-shadow ${startMenu}`}>
                            <div id="windows-start-menu-blue">Windows<span>98</span></div>
                            <ul>
                                <li className="line update">
                                    <label htmlFor="windows-update-input">
                                        <img src="icons/windows-update.png" alt="Windows Update" />Windows Update</label>
                                </li>
                                <li className="programs">
                                    <label><img src="icons/programs.png" alt="Programs" />Progams</label>
                                    <ul className="windows-box-shadow">
                                        <li><label><img src="icons/ie-small.png" alt="Internet Explorer" />Internet Explorer</label></li>
                                        <li><label><img src="icons/notepad.png" alt="Notepad" />Notepad</label></li>
                                        <li onClick={handleVisualButton}><label><img src="icons/visual_code.png" alt="Visual Studio Code" />Visual Studio Code</label></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="windows-documents-input"><img src="icons/documents.png" alt="Documents" />Documents</label>
                                </li>
                                <li className="line">
                                    <label htmlFor="windows-help-input"><img src="icons/help.png" alt="Help" />Help</label>
                                </li>
                                <li>
                                    <label htmlFor="login-screen-input"><img src="icons/key.png" alt="Log Off" />Log Off</label>
                                </li>
                                <li>
                                    <label htmlFor="shutdown-screen-input"><img src="icons/shutdown.png" alt="Shutdown" />Shutdown</label>
                                </li>
                            </ul>
                        </div>
                    
                    <div className="toolbar-left">

                        <div className="toolbar-separator"></div>

                        <button className="toolbar-icon desktop"></button>
                        <button className="toolbar-icon ie"></button>
                        <button className="toolbar-icon outlook"></button>

                        <div className="toolbar-separator"></div>

                        <div className="toolbar-items">
                            {tasks.map(task => (
                                <Task 
                                    id={task.id}
                                    key={task.id}
                                    name={task.name}
                                    active={task.active}
                                    icon={task.icon}
                                    status={task.status}
                                    setTasks={setTasks}
                                />
                            ))}
                        </div>

                    </div>
                
                    <div className="toolbar-right">
                        <button className="toolbar-icon"><img src="icons/volume.png" alt="Volume" /></button>
                        <button className="toolbar-icon"><img src="icons/usb.png" alt="Usb" /></button>
                        <button className="toolbar-icon"><img src="icons/net.gif" alt="Telnet" /></button>
                        <Clock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desktop;