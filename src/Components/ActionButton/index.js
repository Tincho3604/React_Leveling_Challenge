import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ActionButton = ({textButton, functionButton, argument, colorButton, path}) => {
return (
    <>
    <Link to={path} className="Linkbutton" style={{border:'none', background:'none'}}>
        <div className="buttonContainer" >
            <button className="operationButton" style={colorButton} onClick={() => functionButton(argument)}>{textButton}</button>
        </div>
    </Link>
    </>
)
}

export default ActionButton

//functionButton(argument)