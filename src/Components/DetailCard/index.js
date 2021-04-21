import React from 'react';
import './style.css';
import Blog from '../../Images/Blog.png'
import {editButtonStyle, viewDatilsButtonStyle} from '../../Constants/constants';
import ActionButton from '../ActionButton';

const DetailCard = ({title, id}) => {
return (
    <>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={Blog} />
                    <h3>{`Blog${1}`}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>{title}</p>
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

