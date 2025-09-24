import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false); // hamburger toggle

    return (
        <nav className="navbar">
            {/* Logo */}
            <h1>
                <img src="./Images/1.png" alt="Logo" />
            </h1>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <div className={`bar ${open ? "change1" : ""}`}></div>
                <div className={`bar ${open ? "change2" : ""}`}></div>
                <div className={`bar ${open ? "change3" : ""}`}></div>
            </div>

            {/* Links */}
            <div className={`nav-links ${open ? "active" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}>Portfolio</Link>
                <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
                <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
