import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1><img src="./Images/1.png" alt="" /></h1>
            <Link to="/">Portfolio</Link>   
            <Link to="/home">Home</Link>   
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar
