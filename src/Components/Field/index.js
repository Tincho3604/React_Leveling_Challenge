import React from 'react';
import './style.css'
import {checkfields} from '../../Constants/constants';
const Field = ({
    name, 
    id, 
    placeHolder, 
    htmlFor, 
    labelText, 
    icon, 
    type, 
    errors,
    classInput,
    disabled,
    inputStyle,
    registerRef,
    required
}) => {

        return(
            <div className={classInput}>
                <label htmlFor={htmlFor} id="form-label">{labelText}</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        <div className="iconContainer">
                            {icon}
                        </div>
                        <input 
                            className={inputStyle}
                            type={type} 
                            name={name} 
                            id={id} 
                            placeholder={placeHolder} 
                            disabled={disabled}
                            {...registerRef}
                        />
                    </div>
                </div>
                {name === "title" ? errors?.title && <span className="errorMessage">{"Invalid title format"}</span>: ''}
                {name === "body" ? errors?.body && <span className="errorMessage">{"Invalid body format"}</span>: ''}
                {checkfields(errors?.title?.message)}
            </div>
        )
}

export default Field



