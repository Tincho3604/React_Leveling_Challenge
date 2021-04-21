import React from 'react';
import Cards from '../../Components/Cards';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './style.css';
const Home = () => {
return (
    <>
<NavBar/>
    <div className="mainHomeContainer"> 
        <h1>List of Blogs</h1>
        <div className="mainCardHomeContainer">
            {[1,2,3,4,5].map((card, index) => {
                return <Cards key={index} title="Test" />
            })}
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Home;

