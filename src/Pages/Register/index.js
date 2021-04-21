import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import './style.css';
const Register = () => {
return (
    <>
        <NavBar/>
            <div className="mainRegisterContainer"> 
                <Form title={"Register Form"}/>
            </div>
        <Footer />
    </>
    )
}

export default Register;

