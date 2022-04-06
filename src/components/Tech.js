import React from 'react';
import './Tech.css'

const Tech = ({name}) => {
    return ( 
        <div className="tech-box">
            <img src={'tech/'+name+'.png'} alt={name+'_logo'} />
            <div className="tech-name">{name}</div>
        </div>
    );
}

export default Tech;