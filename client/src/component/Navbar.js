import React from 'react';
import './Navbar.css';
import './Navbar.css';
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className="g__navbar">
      <div className="g__navbar-links">
        <div className="g__navbar-links_logo">
          <a href="#home"><img src={Logo} alt="logo"/></a>
        </div>
        <div className="g__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#hiw">How it works</a></p>
          <p><a href="#start">Try Now</a></p>
          <p><a href="#att">About the Team</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
        </div>
    )
}
export default Navbar;