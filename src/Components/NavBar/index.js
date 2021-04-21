import React from 'react';
import './style.css';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

const NavBar = () => {
return (
    <>
        <div className="wrapper">
            
            <input type="checkbox" id="check" />
            <label for="check" className="open"><GiIcons.GiHamburgerMenu/></label>
            <nav>
                <label for="check" className="close"><AiIcons.AiOutlineCloseCircle size={30}/></label>
                    <ul>
                        <li><a href="#" className="hyperlinks">Home</a></li>
                        <li><a href="#" class="hyperlinks">Create Post</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;

