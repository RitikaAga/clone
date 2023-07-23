import React from "react";
import EDYODA from "../../Asset/EDYODA.png"
import Down from "../../Asset/Down.png"
import Search from "../../Asset/Search .png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li>
                <img className="logo" src={EDYODA} alt="EDYODA"/>  </li>
                <li> courses</li> <img  className="arrow" src={Down} alt="Down Arrow"n/>
                <li>Programs</li>
                <img className="arrow" src={Down} alt="Down Arrow" n /> 
           <li><img className="search" src={Search} alt="Search icon" /></li>
                <li class="login">Log in</li>
            </ul>
            <button className="btn">Join now</button>

        </div>
    )
}
export default Navbar