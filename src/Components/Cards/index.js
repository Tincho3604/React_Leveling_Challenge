import React from 'react'
import ActionButton from '../ActionButton';
import './style.css';
import {editButtonStyle, viewDatilsButtonStyle} from '../../Constants/constants';


const Cards = ({title}) => {

return(
    <div className="mainCardContainer">
        <h2>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>
        <div className="mainButtonsContainer">
            <ActionButton textButton={"Edit"} colorButton={editButtonStyle}/>
            <ActionButton textButton={"View Details"} colorButton={viewDatilsButtonStyle}/>
            <ActionButton textButton={"Delete"}/>
        </div>
    </div>
)
}

export default Cards