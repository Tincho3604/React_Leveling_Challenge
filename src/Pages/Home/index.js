import React,{useEffect} from 'react';
import DetailCard from '../../Components/DetailCard';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { useSelector,useDispatch} from 'react-redux';
import './style.css';
import {getAllPosts} from '../../Redux/actions/postsActions';

const Home = () => {
    
    const postsList= useSelector(store => store.PostsReducer.posts) 
    const dispatch =  useDispatch()

    console.log(postsList)
    useEffect(() => { 
        getAllPosts()
    },[]);


return (
    <>
<NavBar/>
    <div className="mainHomeContainer"> 
        <h1>List of Blogs</h1>
        <div className="mainCardHomeContainer">
            {[1,2,3,4,5].map((card, index) => {
                return <DetailCard key={index} title={"Titulo test"} />
            })}
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Home;

