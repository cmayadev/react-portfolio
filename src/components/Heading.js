import React from 'react';

const Heading = (props) => {

    const { id, level, size, status, children } = props;
    const Tag = level;
    
    return ( 
        <Tag id={id} className=''>
            {children}
        </Tag>
    );
}

Heading.defaultProps = {  
    level: "h1",
    size: "medium"
}  

export default Heading;