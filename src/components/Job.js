import React from 'react'

import './Job.scss';

const Job = (props) => {

    const { from, to, company, position, description, actually, skills } = props.job;
    
    return ( 
        <div className="job-container">
            <div className="job-date">
                <span>{from} - {actually ? 'Actualmente' : to}</span>
            </div>
            <div className="job-body">
                <span className="job-title">{position}</span>
                <span className="job-company">{company}</span>
                <p className="job-description">{description}</p>
                <p className='job-skills'>
                    {
                        skills && skills.map((skill, i) => <span>{skill}</span>)
                    }
                </p>
            </div>
        </div>
    );
}

export default Job;