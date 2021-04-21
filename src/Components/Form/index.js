import React from 'react';
import Field from '../../Components/Field';
import './style.css';
import { useForm } from 'react-hook-form';
import {fieldsForm, customAlerts} from '../../Constants/constants';

const Form = ({title}) => {
    
    const {handleSubmit, formState: {errors}, register, reset } = useForm();
    
    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log('DATOS SUBMIT',data)
        customAlerts("Form success complete!", "You add a new post", "success")
        e.target.reset();
        reset();
    }
    return (    
    <div className="mainFormContainer">
        <div className="imgContainer">  
            </div> 
            <div className="form-registrer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-container">
                        <h1>{title}</h1>
                        {fieldsForm?.map((item,index) => {
                            return( 
                                <Field
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    placeHolder={item.placeHolder}
                                    htmlFor={item.htmlFor}
                                    labelText={item.labelText}
                                    inputType={item.inputType}
                                    required={item.required}
                                    errors={errors}
                                    key={index}
                                    idSelect={'selectForm'}
                                    classSelect={'inputs'}
                                    classInput={'inputs'}
                                    inputStyle={'eachInput'}
                                    registerRef={{...register(item.name, { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i, message: 'Minimum 5 characters' })}}
                                />
                                
                            )
                        })}
                    <input type="submit" className="submitButton" value="Register operation"/>
                </div>
            </form>
        </div>
    </div>
    )
}


export default Form
