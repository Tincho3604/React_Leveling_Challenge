import React from 'react';
import Cards from '../../Components/Cards';
import NavBar from '../../Components/NavBar';
import './style.css';
const Home = () => {
return (
    <div className="mainHomeContainer"> 
        <NavBar/>
        <div className="mainCardHomeContainer">
            {[1,2,3,4,5].map((card, index) => {
                return <Cards key={index} title="Test" />
            })}
        </div>
    </div>
    )
}

export default Home;

