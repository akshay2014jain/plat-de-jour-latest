import React, {Component} from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import AImodel from './Aimodel';

export class Navbar extends Component{

  constructor(props){
    super(props)
    this.state = {
      toggleMenu: true
    }
  }

  render(){
    return (
      <Router>
        <div className="g__navbar">
          <div className="g__navbar-links_logo">
            <Link smooth to="/#home"><img src={Logo} alt="logo"/></Link>
          </div>
          <div className="g__navbar-links_container">
            <p><Link smooth to="/#home">Home</Link></p>
            <p><Link smooth to="/#hiw">How It Works</Link></p>
            <p><Link smooth to="/#start">Try Now</Link></p>
            <p><Link smooth to="/about#preview">About the Team</Link></p>
            <p><Link smooth to="/aimodel">AI Model</Link></p>
            <p><Link smooth to="/contact#contactus">Contact Us</Link></p> 
          </div>
        </div>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< AboutUs />}></Route>
            <Route exact path='/contact' element={< ContactUs />}></Route>
            <Route exact path='/aimodel' element={< AImodel />}></Route>
        </Routes>
      </Router>
    )
  }
}
export default Navbar;