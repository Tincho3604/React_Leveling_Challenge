import React,{useEffect, useState} from 'react';
import DetailCard from '../../Components/DetailCard';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import ModalError from '../../Components/ModalError';
import { useSelector,useDispatch} from 'react-redux';
import './style.css';
import {getAllPosts, deletePost} from '../../Redux/actions/postsActions';
import {customAlerts} from '../../Constants/constants'


const Home = () => {
    
    const postsList = useSelector(store => store.PostsReducer.posts)
    const dispatch =  useDispatch()
    const [postState, setPostState] = useState(postsList)

    useEffect(() => { 
        dispatch(getAllPosts());
        setPostState(postsList)
    },[]);

const deleteCurrentPost = (e) => {
    dispatch(deletePost())
    customAlerts(`You delete the post N° ${e} successfully`, "", "success")
    setPostState(postState?.filter((item) => item.id !== e))
}

if(postState.length === 0){
    return (
    <>
        <NavBar/>
        <ModalError text="Post Not Founds"/>
    </>
    )
}else{
    return (
    <>
    <NavBar/>
        <div className="mainHomeContainer"> 
            <h1>List of Posts</h1>
            <div className="mainCardHomeContainer">

                {postState?.slice(90,postState.length).map((card, index) => {
                    return <DetailCard 
                                key={index} 
                                title={card.title} 
                                id={card.id} 
                                userId={card.userId} 
                                body={card.body}
                                complete={deleteCurrentPost}
                        />
                    })}
                </div>
            </div>
                <Footer />
            </>
        )
    }
}

export default Home;

