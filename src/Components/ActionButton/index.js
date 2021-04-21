import React from 'react';
import './style.css';

const ActionButton = ({textButton, functionButton, argument, colorButton}) => {
return (
    <div className="buttonContainer">
        <button className="operationButton" style={colorButton} onClick={() => console.log("Click")}>{textButton}</button>
    </div>
)
}

export default ActionButton

//functionButton(argument)