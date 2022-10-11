import React from 'react';
import './Tech.css'

const Tech = (props) => {

    const { title, icon } = props.skill;

    return ( 
        <div className="tech-box">
            <img src={icon} alt={title+'_logo'} />
            <div className="tech-name">{title}</div>
        </div>
    );
}

export default Tech;