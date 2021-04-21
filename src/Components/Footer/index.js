import React from 'react';
import Instagram from '../../Images/Instagram.png';
import Linkedin from '../../Images/Linkedin.png'
import Github from '../../Images/Github.png'
import {linkedinLink, githubLink, instagramLink} from '../../Constants/constants';
import './style.css';

const Footer = () => {
return (
    <div className="mainFooterContainer">
        <div className="footer">
            <a href={instagramLink}><img src={Instagram} alt="instagram"/></a>
            <a href={linkedinLink} ><img src={Linkedin} alt="linkedin"/></a>
            <a href={githubLink}><img src={Github} alt="github"/></a>
        </div>
    </div>
)
}

export default Footer