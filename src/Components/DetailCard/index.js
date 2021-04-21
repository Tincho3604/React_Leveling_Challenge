import React from 'react';
import './style.css';
import Blog from '../../Images/Blog.png'
import {editButtonStyle, viewDatilsButtonStyle} from '../../Constants/constants';
import ActionButton from '../ActionButton';

const DetailCard = ({title, id}) => {
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
                    <ActionButton textButton={"View Details"} colorButton={viewDatilsButtonStyle}/>
                    <ActionButton textButton={"Delete"}/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default DetailCard;

