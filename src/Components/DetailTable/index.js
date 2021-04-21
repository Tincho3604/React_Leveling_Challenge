import React from 'react'
import {titleColumn} from '../../Constants/constants';
import './style.css'
const DetailTable = ({title}) => {
return (
    <>
    <div className="main-container-table">
    <table className="container">
	    <thead>
		    <tr>
			    {titleColumn?.map((title,index) => {
	                return <th key={index}><h1>{title}</h1></th>
		 	   })}
		    </tr>
	    </thead>
	    <tbody>
		    <tr>
                <td>Valor 1</td>
                <td>Valor 1</td>
                <td>Valor 1</td>
                <td>Valor 1</td>
		    </tr>
	    </tbody>
    </table>
</div>
    </>
)
}



export default DetailTable
