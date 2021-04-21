import React from 'react';
import Cards from '../../Components/Cards';
import NavBar from '../../Components/NavBar';
import './style.css';
const Home = () => {
return (
    <div className="mainHomeContainer"> 
        <NavBar/>
        <Cards title="Test" />
    </div>
    )
}

export default Home;

