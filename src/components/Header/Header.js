import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "indigo",
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
                to="/services"
            >Services</NavLink>

            <NavLink className='nav-bar'
                activeStyle={activeStyle}
                to="/instructor"
            >Instructor</NavLink>

            <NavLink className='nav-bar'
                activeStyle={activeStyle}
                to="/about"
            >About</NavLink>
        </nav >

    );
};

export default Header;