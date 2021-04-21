import React,{useState,useEffect} from 'react';
import Field from '../Field/index';
import {fieldsForm, customAlerts} from '../../Constants/constants';
import { useForm } from 'react-hook-form';
import './style.css';

const FormUpdate = () => {
    
    const [types, setTypes] = useState('')


    useEffect(() => {
        //setypes(uniqueItem[0].types)
    }, []);
    
    const {handleSubmit, formState: {errors}, register, reset } = useForm();

     const onSubmit = (data,e) => {
        e.preventDefault();
        console.log('DATOS SUBMIT',data)
        customAlerts("Blog edit successfully!", "You edit this post", "success")
        e.target.reset();
        reset();
    }


return <>

    <div className="mainUpdateFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form Update</h2>
            <div className="updater">
            {fieldsForm?.map((item,index) => {
                            return( 
                                    <Field
                                        type={item.type}
                                        name={item.name}
                                        placeHolder={item.placeHolder}
                                        htmlFor={item.htmlFor}
                                        labelText={item.labelText}
                                        inputType={item.inputType}
                                        errors={errors}
                                        key={index}
                                        registerRef={{...register(item.name, { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i, message: 'Minimum 5 characters' })}}
                                    
                                />
                            )
                        })}
                        
                </div>
                <input type="submit" className="buttonUpdater" value="Update blog"/>
        </form>
    </div>
</>
}


export default  FormUpdate




