import React from 'react';
import './Navbar.css';
import Logo from '../images/logo.png'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

const Navbar = () => {
    return (
      <Router>
        <div>
          <div className="g__navbar-links_logo">
            <a href="/#home"><img src={Logo} alt="logo"/></a>
          </div>
          <div className="g__navbar-links_container">
            <p><a href="/#home">Home</a></p>
            <p><a href="/#hiw">How It Works</a></p>
            <p><a href="/#start">Try Now</a></p>
            <p><a href="/about">About the Team</a></p>
            <p><a href="/contact">Contact Us</a></p> 
          </div>
        </div>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< AboutUs />}></Route>
        </Routes>
      </Router>
    )
}
export default Navbar;