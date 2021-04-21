import React,{useEffect, useState} from 'react'
import {titleColumn} from '../../Constants/constants';
import './style.css';


const DetailTable = ({title}) => {
	const [currentPost, setCurrentPost] = useState({})

    useEffect(() => {
       setCurrentPost((JSON.parse(localStorage.getItem("currentPost"))))
    }, []);
return (
    <>
    <div className="main-container-table">
		<h1>{`Details of Post N° ${currentPost?.id}`}</h1>
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
                <td>{currentPost?.id}</td>
                <td>{currentPost?.userId}</td>
                <td>{currentPost?.title}</td>
                <td>{currentPost?.body}</td>
		    </tr>
	    </tbody>
    </table>
</div>
    </>
)
}



export default DetailTable
