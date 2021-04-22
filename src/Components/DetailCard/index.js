import React,{useState, useEffect} from 'react';
import './style.css';
import Blog from '../../Images/Blog.png';
import {editButtonStyle, viewDatilsButtonStyle, customAlerts} from '../../Constants/constants';
import ActionButton from '../ActionButton';


const DetailCard = ({title, id, userId, body, complete}) => {
    const [obj, setObj] = useState({
        title: '',
        id: '', 
        userId: '', 
        body: ''
    });
    
    
    useEffect(() => { 
        setObj({
            title:title,
            id:id,
            userId:userId,
            body:body
        })
    },[]);

    const saveCurrentPost = (value) => {
    localStorage.setItem('currentPost', JSON.stringify(value))
    customAlerts(`You select the post N° ${id}`, "You can see the details", "success")
}

const editCurrentPost = (value) => {
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
                    <ActionButton textButton={"Edit"} 
                    colorButton={editButtonStyle} 
                    argument={obj} 
                    functionButton={editCurrentPost}
                    path={'/Edit'}
                    />
                    
                    <ActionButton textButton={"View Details"} 
                        colorButton={viewDatilsButtonStyle} 
                        argument={obj} 
                        functionButton={saveCurrentPost}
                        path={'/details'}
                    />
                    <ActionButton textButton={"Delete"}
                    argument={id}
                    functionButton={complete}
                    />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default DetailCard;

