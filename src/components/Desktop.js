import { useCallback } from "react";

import Clock from './windows/Clock';
import DesktopIcon from './windows/DesktopIcon';

import './Desktop.scss';

const Desktop = ({ display, onSetDisplay }) => {

    const handleVisualButton = useCallback(event => {
        onSetDisplay('portfolio')
      }, [onSetDisplay])

    return ( 
        <>
            <div className="windows">
                
                <div className="overlay">AV-1</div>

                <input type="checkbox" name="start-button-input" id="start-button-input" />

                <div className="desktop-icons">
                    <DesktopIcon label="My Computer" icon="computer_explorer-5" />
                    <DesktopIcon label="My Documents" icon="directory_open_file_mydocs-4" />
                    <DesktopIcon label="Internet Explorer" icon="msie2-2" />
                    <DesktopIcon label="Recycle Bin" icon="recycle_bin_empty-4" />
                </div>

                <div id="toolbar">
                    <div className="toolbar-start-menu">
                        <label for="start-button-input" className="start-button">Start</label>
                    </div>

                    <div id="start-menu" class="windows-box-shadow">
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

                        <button className="toolbar-icon ie"></button>
                        <button className="toolbar-icon outlook"></button>
                        <button className="toolbar-icon desktop"></button>
                        <button className="toolbar-icon channels"></button>

                        <div className="toolbar-separator"></div>

                        <div className="toolbar-items">
                            <label for="windows-ie-input-min" class="ie-tab tab windows-box-shadow">
                                <span><img src="https://win98icons.alexmeub.com/icons/png/html2-4.png" /></span>
                                <span>Internet Explorer</span>
                            </label>
                        </div>

                    </div>
                
                    <div className="toolbar-right">
                        <button className="toolbar-icon volume"></button>
                        <button className="toolbar-icon usb"></button>
                        <Clock />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desktop;