import React from 'react';
import Logo from '../logo.png';
import './footer.css';

const Footer = () => (
  <div className="g__footer section__padding" id="contact">
    <div className="g__footer-heading">
      <h1 className="gradient__text">Step in to the future of healthy eating & homecooking</h1>
    </div>

    <div className="g__footer-links">
      <div className="g__footer-links_logo">
        <img src={Logo} alt="company_logo" />
        <p>109 Cornell Irvine 92612 <br /> All Rights Reserved</p>
      </div>
      <div className="g__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="g__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="g__footer-links_div">
        <h4>Get in touch</h4>
        <p>109 Cornell Irvine 92612</p>
        <p>011-1234567</p>
        <p>platdejour@uci.edu</p>
      </div>
    </div>

    <div className="g__footer-copyright">
      <p>@2021 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;