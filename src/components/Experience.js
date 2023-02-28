import React from 'react';
import './Experience.css';

import Job from './Job';

import jobs from "../api/jobs.json";

const Experience = () => {
    return ( 
        <section className="section" id="experience">
            <div className="container">
                <div className="section-title">
                    <h2>Experiencia</h2>
                    <p>Empresas en las que he trabajado relacionadas con el desarrollo.</p>
                </div>
                <div className="experience-list">

                    <div className="timeline">
                        {
                            jobs.map((job) =>
                                <Job key={job.company} job={job} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;