import React from 'react';

const HighlightDecorator = () => {
    return <span style={{backgroundColor: 'red', padding: '20px'}}>{props.children}</span>
};

export default HighlightDecorator;