import React from 'react';
import './Terminal.css'

const getYear = () => {
    return new Date().getFullYear();
}

const Terminal = () => {
    return ( 
        <section className="section last">
            <div className="container">
                <div className="terminal-tabs">
                    <span className="">TERMINAL</span>
                    <span className="">OUTPUT</span>
                    <span className="">DEBUG CONSOLE</span>
                </div>
                <div className="terminal-content">
                    <div>
                        <span>Cmaya Portfolio</span>
                        <span>Copyright © {getYear()} Cristian Maya. Programado con ReactJS.</span>
                    </div>
                    <p>Diseño inspirado en Visual Studio Code.</p>
                    <p>PS C:\react-portfolio></p>
                </div>
            </div>
        </section>
    );
}

export default Terminal;