import React from 'react'
import './Skills.css'

const Skills = () => {
    return ( 
        <section className="section alt" id="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Conocimientos</h2>
                    <p>Algunos lenguajes, programas y tecnologías que conozco.</p>
                </div>

                <div className="skill-bars">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>PHP</span>
                        </div>
                        <div className="progress-line php">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>MySQL</span>
                        </div>
                        <div className="progress-line mysql">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Symfony</span>
                        </div>
                        <div className="progress-line symfony">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Laravel</span>
                        </div>
                        <div className="progress-line laravel">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Javascript</span>
                        </div>
                        <div className="progress-line javascript">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Vue</span>
                        </div>
                        <div className="progress-line vue">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;