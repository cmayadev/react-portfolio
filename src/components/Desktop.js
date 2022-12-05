import { useState, useCallback } from "react";

import Clock from './windows/Clock';
import Task from './windows/Task';
import Window from './windows/Window';
import DesktopIcon from './windows/DesktopIcon';

import './Desktop.scss';

const Desktop = ({ display, onSetDisplay }) => {

    const [startMenu, setStartMenu] = useState();

    const handleVisualButton = useCallback(event => {
        onSetDisplay('portfolio')
      }, [onSetDisplay])

    const handleStartMenu = event => {
        if (startMenu == '') {
            setStartMenu('open');
        } else {
            setStartMenu('');
        }
      };

    return ( 
        <>
            <div className="windows">
                
                <div className="overlay">AV-1</div>

                <Window title="Recycle Bin" />

                <div className="desktop-icons">
                    <DesktopIcon label="My Computer" icon="my-pc" />
                    <DesktopIcon label="My Documents" icon="documents" />
                    <DesktopIcon label="Internet Explorer" icon="ie" />
                    <DesktopIcon label="Recycle Bin" icon="bin-full" />
                </div>

                <div id="toolbar">
                    <div className="toolbar-start-menu">
                        <label for="start-button-input" className="start-button" onClick={handleStartMenu}>Start</label>
                    </div>

                    <div id="start-menu" class={`windows-box-shadow ${startMenu}`}>
                            <div id="windows-start-menu-blue">Windows<span>98</span></div>
                            <ul>
                                <li class="line update">
                                    <label for="windows-update-input"><img src="https://win98icons.alexmeub.com/icons/png/windows_update_large-4.png" />Windows Update</label>
                                </li>
                                <li class="programs">
                                    <label><img src="https://win98icons.alexmeub.com/icons/png/package-1.png" />Progams</label>
                                    <ul class="windows-box-shadow">
                                        <li><label for="windows-ie-input"><img src="https://win98icons.alexmeub.com/icons/png/msie2-4.png" />Internet Explorer</label></li>
                                        <li><label for="windows-notepad-input"><img src="https://win98icons.alexmeub.com/icons/png/notepad-3.png" />Notepad</label></li>
                                        <li onClick={handleVisualButton}><label for="windows-notepad-input"><img src="icons/visual_code.png" />Visual Studio Code</label></li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="windows-documents-input"><img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-1.png" />Documents</label>
                                </li>
                                <li class="line">
                                    <label for="windows-help-input"><img src="https://win98icons.alexmeub.com/icons/png/help_book_cool-2.png" />Help</label>
                                </li>
                                <li>
                                    <label for="login-screen-input"><img src="https://win98icons.alexmeub.com/icons/png/key_win-3.png" />Log Off</label>
                                </li>
                                <li>
                                    <label for="shutdown-screen-input"><img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-4.png" />Shutdown</label>
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
                            <Task name="My Computer" icon="my-pc" />
                            <Task name="My Documents" icon="documents" />
                            <Task name="Internet Explorer" icon="ie-html" />
                            <Task name="Recycle Bin" icon="bin-full" />
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