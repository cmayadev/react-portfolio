import { useState, useCallback } from "react";

import Clock from './windows/Clock';
import Task from './windows/Task';
import Window from './windows/Window';
import DesktopIcon from './windows/DesktopIcon';

import './Desktop.scss';

const Desktop = ({ display, onSetDisplay }) => {

    const [startMenu, setStartMenu] = useState();

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "My Computer",
            icon: "my-pc",
            minimized: false
        },
        {
            id: 2,
            name: "My Documents",
            icon: "documents",
            minimized: false
        },
        {
            id: 3,
            name: "Internet Explorer",
            icon: "ie-html",
            minimized: false
        },
        {
            id: 4,
            name: "Recycle Bin",
            icon: "bin-full",
            minimized: false
        },
    ]);

    const handleClick = taskId => {

        console.log("asdasdasd")
        const task = tasks.find(t => t.id === taskId);
    
        if (task.minimized) {
          setTasks(tasks.map(t => {
            if (t.id === taskId) {
              return { ...t, minimized: false };
            } else {
              return t;
            }
          }));
        } else {
          setTasks(tasks.map(t => {
            if (t.id === taskId) {
              return { ...t, minimized: true };
            } else {
              return t;
            }
          }));
        }
      };

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
                        minimized={window.minimized} />
                ))}

                <div className="desktop-icons">
                    <DesktopIcon label="My Computer" icon="my-pc" />
                    <DesktopIcon label="My Documents" icon="documents" />
                    <DesktopIcon label="Internet Explorer" icon="ie" />
                    <DesktopIcon label="Recycle Bin" icon="bin-full" />
                </div>

                <div id="toolbar">
                    <div className="toolbar-start-menu">
                        <label htmlFor="start-button-input" className="start-button" onClick={handleStartMenu}>Start</label>
                    </div>

                    <div id="start-menu" className={`windows-box-shadow ${startMenu}`}>
                            <div id="windows-start-menu-blue">Windows<span>98</span></div>
                            <ul>
                                <li className="line update">
                                    <label htmlFor="windows-update-input"><img src="https://win98icons.alexmeub.com/icons/png/windows_update_large-4.png" />Windows Update</label>
                                </li>
                                <li className="programs">
                                    <label><img src="https://win98icons.alexmeub.com/icons/png/package-1.png" />Progams</label>
                                    <ul className="windows-box-shadow">
                                        <li><label htmlFor="windows-ie-input"><img src="https://win98icons.alexmeub.com/icons/png/msie2-4.png" />Internet Explorer</label></li>
                                        <li><label htmlFor="windows-notepad-input"><img src="https://win98icons.alexmeub.com/icons/png/notepad-3.png" />Notepad</label></li>
                                        <li onClick={handleVisualButton}><label htmlFor="windows-notepad-input"><img src="icons/visual_code.png" />Visual Studio Code</label></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="windows-documents-input"><img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-1.png" />Documents</label>
                                </li>
                                <li className="line">
                                    <label htmlFor="windows-help-input"><img src="https://win98icons.alexmeub.com/icons/png/help_book_cool-2.png" />Help</label>
                                </li>
                                <li>
                                    <label htmlFor="login-screen-input"><img src="https://win98icons.alexmeub.com/icons/png/key_win-3.png" />Log Off</label>
                                </li>
                                <li>
                                    <label htmlFor="shutdown-screen-input"><img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-4.png" />Shutdown</label>
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
                                    key={task.id}
                                    name={task.name}
                                    icon={task.icon}
                                    minimized={task.minimized}
                                    onClick={() => handleClick(task.id)}
                                />
                            ))}
                        </div>

                    </div>
                
                    <div className="toolbar-right">
                        <button className="toolbar-icon"><img src="icons/volume.png" /></button>
                        <button className="toolbar-icon"><img src="icons/usb.png" /></button>
                        <button className="toolbar-icon"><img src="icons/net.gif" /></button>
                        <Clock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desktop;