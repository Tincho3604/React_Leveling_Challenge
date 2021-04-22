import React,{useState} from 'react'
import DetailCard from '../../Components/DetailCard';
import './style.css';

const Filter = ({JsonObj}) => {
const [searchItem, setSearchItem] = useState();
return(
    <div className="filterContainer">
        <input 
        type="text"
        className="filterInput"
        placeholder="Search..."
        onChange={(event) => {
            setSearchItem(event.target.value)
        }}
        />
        <div className="mainCardFilterContainer">
        {JsonObj?.filter((val) => {
            if(searchItem === ""){
                return ""
            }else if(val?.title?.toLowerCase().includes(searchItem?.toLowerCase())){
                return val
        }
    }).map((val, key) => {
                
                    return (
                        <DetailCard    
                        key={key} 
                        title={val.title} 
                        id={val.id} 
                        userId={val.userId} 
                        body={val.body}/>
                    );
            
    
        })}
        </div>
    </div>
)
}

export default Filter