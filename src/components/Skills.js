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

                <div className="grid">

                    { skills.map((skill) => <Tech skill={skill} />) }

                </div>

            </div>
        </section>
    );
}

export default Skills;