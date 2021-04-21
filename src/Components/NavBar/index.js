import React from 'react';
import './style.css';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import {SidebarData} from '../../Constants/constants';


const NavBar = () => {
return (
    <>
        <div className="wrapper">
            <input type="checkbox" id="check" />
            <label for="check" className="open"><GiIcons.GiHamburgerMenu/></label>
            <nav>
                <label for="check" className="close"><AiIcons.AiOutlineCloseCircle size={30}/></label>
                    <ul>
                    {SidebarData?.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => item.func ? item.func() : ''}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
              );
            })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;

