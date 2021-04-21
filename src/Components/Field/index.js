import React from 'react';
import './style.css'


const Field = ({
    name, 
    id, 
    placeHolder, 
    htmlFor, 
    labelText, 
    inputType, 
    icon, 
    type, 
    optionText, 
    refForm, 
    errors,
    idSelect,
    classSelect,
    classInput,
    disabled,
    inputStyle
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
                            ref={refForm}
                            disabled={disabled}

                        />
                    </div>
                </div>
                    {name === "concept" ? errors?.concept && <span className="errorMessage">{errors?.concept?.message}</span>: ''}
                    {name === "date" ? errors?.date && <span className="errorMessage">{errors?.date?.message}</span>: ''}
                    {name === "amount" ? errors?.amount && <span className="errorMessage">{errors?.amount?.message}</span>: ''}
                    {name === "username" ? errors?.username && <span className="errorMessage">{errors?.username?.message}</span>: ''}
                    {name === "email" ? errors?.email && <span className="errorMessage">{errors?.email?.message}</span>: ''}
                    {name === "password" ? errors?.password && <span className="errorMessage">{errors?.password?.message}</span>: ''}
            </div>
        )
}

export default Field