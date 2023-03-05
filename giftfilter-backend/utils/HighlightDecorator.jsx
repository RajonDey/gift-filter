import React from 'react';

const HighlightDecorator = (props) => {
    return <span style={{backgroundColor: '#E23E57', padding: '5px', color:'white', borderRadius:'5px'}}>{props.children}</span>
};

export default HighlightDecorator;