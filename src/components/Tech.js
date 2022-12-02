import React from 'react';
import './Tech.scss'

const Tech = (props) => {

    const { title, icon } = props.skill;

    return ( 
        <div>
            <div className="tech-box">
                <img src={icon} alt={title+'_logo'} />
            </div>
            <div className="tech-name">{title}</div>
        </div>
    );
}

export default Tech;