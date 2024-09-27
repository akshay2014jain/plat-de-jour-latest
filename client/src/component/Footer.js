import React, {Component} from 'react';
import Logo from '../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/footer.css';
import Uci from '../images/uci_white.png';

export default class Footer extends Component{
  render(){
    return(
      <div className="g__footer section__padding" id="contact">
      <div className="g__footer-heading">
        <h1 className="gradient__text">Step into the Future of Healthy Eating & Homecooking</h1>
      </div>
  
      <div className="g__footer-links">
        <div className="g__footer-links_logo">
          <Link smooth to="/#home"><img src={Logo} alt="company_logo" /></Link>
          <p>MCS Capstone Project<br/><br/>University of California, Irvine</p>
        </div>
        <div className="g__footer-links_div">
          <h4>Links</h4>
          <Link smooth to="/#start"><p>Try Now</p></Link>
          <Link smooth to="/#hiw"><p>How It Works</p></Link>
          <Link smooth to="/aimodel#background_ai"><p>AI Model</p></Link>
        </div>
        <div className="g__footer-links_div">
          <h4>About</h4>
          <Link smooth to="/about#preview"><p>The Team </p></Link>
          <a href="https://youtu.be/rQKF4p9Q0lc" target="_blank" rel="noopener noreferrer"><p>Product Demo</p></a>
          <Link smooth to="/contact#contactus"><p>Contact Us</p></Link>
        </div>
        <div className="g__footer-links_div">
          <h4>Get in touch</h4>
          <p>109 Cornell Irvine 92612</p>
          <a href="https://mcs.ics.uci.edu/capstone-2022/" target="_blank" rel="noopener noreferrer"><p>UCI MCS Capstone Showcase</p></a>
          <a href="mailto:platdejour21@gmail.com" target="_blank" rel="noopener noreferrer"><p>platdejour21@uci.edu</p></a>
        </div>
      </div>
  
      <div className="g__footer-copyright">
        <img src={Uci} className="uci_logo" alt="UCI MCS" />
        <p>@2022 All rights reserved.</p>
      </div>
    </div>
    )
  }
}