import React from 'react'
import './Skills.css'
import Tech from './Tech.js'

const Skills = () => {
    return ( 
        <section className="section alt" id="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Conocimientos</h2>
                    <p>Algunos lenguajes, programas y tecnologías que conozco.</p>
                </div>

                <div className="grid">

                    <Tech
                        name="HTML"
                    />

                    <Tech
                        name="CSS"
                    />

                    <Tech
                        name="JS"
                    />

                    <Tech
                        name="React"
                    />

                    <Tech   
                        name="Redux"
                    />

                    <Tech
                        name="Vue"
                    />

                    <Tech
                        name="PHP"
                    />     

                    <Tech
                        name="Symfony"
                    />  

                    <Tech
                        name="Laravel"
                    />  

                    <Tech   
                        name="MySQL"
                    />  

                </div>

            </div>
        </section>
    );
}

export default Skills;