import React,{useState, useEffect} from 'react';
import './style.css';
import Blog from '../../Images/Blog.png';
import { Link } from 'react-router-dom';
import {editButtonStyle, viewDatilsButtonStyle, customAlerts} from '../../Constants/constants';
import ActionButton from '../ActionButton';


const DetailCard = ({title, id, userId, body}) => {
    const [obj, setObj] = useState({
        title: title,
        id: id, 
        userId: userId, 
        body: body
    });
const saveCurrentPost = (value) => {
    localStorage.setItem('currentPost', JSON.stringify(value))
    customAlerts(`You select the post N° ${id}`, "You can edit it now", "success")
    
}
return (
    <>
    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={Blog} alt="img blog"/>
                    <p>{`Post N°${id}`}</p>
                    <p>{title}</p>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <ActionButton textButton={"Edit"} colorButton={editButtonStyle}/>
                    <ActionButton textButton={"View Details"} 
                        colorButton={viewDatilsButtonStyle} 
                        argument={obj} 
                        functionButton={saveCurrentPost}
                        path={'/details'}
                    />
                    <ActionButton textButton={"Delete"}/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default DetailCard;

