import React from 'react'
import './Skills.css'
import Tech from './Tech.js'

import skills from "../api/skills.json";

const Skills = () => {

    return ( 
        <section className="section alt" id="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Conocimientos</h2>
                    <p>Algunos lenguajes, programas y tecnologías que conozco.</p>
                </div>

                <div className="techs">
                    <div className="group">
                        <h6>Lenguajes</h6>
                        <div className="grid">
                            { skills.map((skill) => skill.type === "language" ? <Tech skill={skill} /> : '') }
                        </div>
                    </div>
                    <div className="group">
                        <h6>Frameworks</h6>
                        <div className="grid">
                            { skills.map((skill) => skill.type === "framework" ? <Tech skill={skill} /> : '') }
                        </div>
                    </div>      
                    <div className="group">
                        <h6>Bases de Datos</h6>
                        <div className="grid">
                            { skills.map((skill) => skill.type === "bd" ? <Tech skill={skill} /> : '') }
                        </div>
                    </div> 
                    <div className="group">
                        <h6>Herramientas</h6>
                        <div className="grid">
                            { skills.map((skill) => skill.type === "tool" ? <Tech skill={skill} /> : '') }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;