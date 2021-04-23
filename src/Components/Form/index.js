import React,{useState, useEffect} from 'react';
import Field from '../../Components/Field';
import './style.css';
import { useForm, } from 'react-hook-form';
import {fieldsForm, customAlerts} from '../../Constants/constants';
import { useSelector,useDispatch} from 'react-redux';
import {createPost, getAllPosts} from '../../Redux/actions/postsActions';

const Form = ({title}) => {

    const postsList = useSelector(store => store?.PostsReducer.posts) 

    const [id, setId] = useState(postsList[postsList.length-1]?.id+1)
    const [userId, setUserId] = useState(11)

    const dispatch =  useDispatch()
    const {handleSubmit, formState: {errors}, register, reset } = useForm();
    
    const onSubmit = (data,e) => {
        e.preventDefault();
        setId(id+1);
        let newArray = {...data, id, userId};
        dispatch(createPost(newArray))
        customAlerts("Form success complete!", "You add a new post", "success")
        e.target.reset();
        reset();
    }


    useEffect(() => {
        dispatch(getAllPosts());
    },[]);


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
                                    registerRef={{...register(item.name, { required: true, maxLength: 20, pattern: /^[A-Za-z0-9\s]+$/g, message: 'Minimum 5 characters' })}}
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
