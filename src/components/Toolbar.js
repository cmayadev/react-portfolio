const Toolbar = () => {
    return ( 
        <div className="appName">
            <div className="appTitle">react-porfolio - Maya Studio Code</div>
                <div className="appControls">
                    <div className="appMinimize"><img src="icons/minimize.png" /></div>
                    <div className="appMaximize"><img src="icons/maximize.png" /></div>
                    <div className="appClose"><img src="icons/close.svg" /></div>
                </div>
        </div>
    );
}

export default Toolbar;