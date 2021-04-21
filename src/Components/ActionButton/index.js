import React from 'react';
import './style.css';

const ActionButton = ({textButton, functionButton, argument, colorButton}) => {
return (
    <>
        <button className="operationButton" style={colorButton} onClick={() => functionButton(argument)}>{textButton}</button>
    </>
)
}

export default ActionButton