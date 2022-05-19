import React from 'react';
import './Navbar.css';
import './Navbar.css';
import logo from '../../src/logo.png'

const Navbar = () => {
    return (
        <div className="g__navbar">
      <div className="g__navbar-links">
        <div className="g__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="g__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#hiw">How it works</a></p>
          <p><a href="#start">Try Now</a></p>
          <p><a href="#att">About the Team</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
            <div className="g__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
        </div>
    )
}
export default Navbar;