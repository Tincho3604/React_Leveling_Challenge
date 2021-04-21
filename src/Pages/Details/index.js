import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import DetailTable from '../../Components/DetailTable';
const Details = () => {
return (
    <>
        <NavBar/>
            <div> 
                <DetailTable />
            </div>
        <Footer />
    </>
    )
}

export default Details;

