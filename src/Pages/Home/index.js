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

    useEffect(() => { 
        dispatch(getAllPosts());
    },[]);


return (
    <>
<NavBar/>
    <div className="mainHomeContainer"> 
        <h1>List of Blogs</h1>
        <div className="mainCardHomeContainer">
            {postsList?.map((card, index) => {
                return <DetailCard key={index} title={card.title} id={card.id}/>
            })}
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Home;

