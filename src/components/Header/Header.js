import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }

    return (

        < nav className="navigation" >

            <NavLink className='siteName '
                to="/home">EDUCATION Center</NavLink>


            <NavLink className='nav-bar'
                activeStyle={activeStyle}
                to="/home"
            >Home</NavLink>

            <NavLink className='nav-bar'
                activeStyle={activeStyle}
                to="/about"
            >About</NavLink>

            <NavLink className='nav-bar'
                activeStyle={activeStyle}
                to="/services"
            >Services</NavLink>
        </nav >

    );
};

export default Header;