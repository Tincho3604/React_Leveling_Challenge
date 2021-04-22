import React,{useState,useEffect} from 'react';
import Field from '../Field/index';
import {fieldsForm, customAlerts} from '../../Constants/constants';
import { useForm } from 'react-hook-form';
import './style.css';
import {editPost} from '../../Redux/actions/postsActions';
import swal from 'sweetalert';
import {useDispatch} from 'react-redux';

const FormUpdate = () => {
    const dispatch =  useDispatch()

    const [id, setId] = useState({});
    const [userId, setUserId] = useState({});
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        setId(JSON.parse(localStorage.getItem("currentPost")).id)
        setUserId(JSON.parse(localStorage.getItem("currentPost")).userId);
    }, []);

    const {handleSubmit, formState: {errors}, register, reset } = useForm({
        defaultValues: {
            title: JSON.parse(localStorage.getItem("currentPost")).title,
            body: JSON.parse(localStorage.getItem("currentPost")).body,
        }
    });


    const onSubmit = async (data,e) => {
        e.preventDefault();
        let newArray = {...data, id, userId};
        dispatch(editPost(newArray,id))
        localStorage.setItem('currentPost', JSON.stringify(newArray))
        e.target.reset();
        reset();

        swal({
            title: "Are you sure you want to delete this post?",
            text: `You are going to edit post No° ${id}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((edit) => {
            if (edit) {
                customAlerts("Form success complete!", "You add a new post", "success").then((res) => {

                })
            } else {
                swal("Your record was not edit");
            }
        });  
    }  
    

return <>
    <div className="mainUpdateFormContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Form Update</h2>
                <div className="updater">
                    {fieldsForm?.map((item,index) => {
                            return ( 
                                    <Field
                                        type={item.type}
                                        name={item.name}
                                        placeHolder={item.placeHolder}
                                        htmlFor={item.htmlFor}
                                        labelText={item.labelText}
                                        inputType={item.inputType}
                                        errors={errors}
                                        key={index}
                                        registerRef={{...register(item.name, { required: true, maxLength: 1000, pattern: /^[A-Za-z0-9\s]+$/g, message: 'Minimum 5 characters' })}}
                                    />
                                )
                            })}
                </div>
                <input type="submit" className="buttonUpdater" value="Update Post" />
        </form>
    </div>
</>
}


export default  FormUpdate




