import React, { useState } from 'react';
import './contactus.css'
import Footer from './Footer';
import styled from "styled-components";


const Button2 = styled.button`
width:10%;
height:10%;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border: 0;
border-radius: 8px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 2.5;
outline: transparent;
margin-top:5%;
margin-bottom:5%;
padding: 0rem 0rem;
text-align: center;
text-decoration: none;
transition: box-shadow .2s ease-in-out;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
`;


const ContactUs = () => {
    
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [pnumber, setPNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Name: ${fname}, Email: ${email}, Message: ${message}`);
        alert("Thank you for your valuable feedback! We will get in touch");
    }

    const StarRating = () => {
        const [rating, setRating] = useState(0);
        return (
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}>
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        );
      };

    return (
        <div className="contactus">
            <form >
                <div >
                <h1 className="gradient__text">Feedback Form</h1>
                <br/>
                        <p className="gradient__text">Thank you for visiting Plat de Joûr! We would love to hear about your experience
simply fill out this form and hit complete. Thank you for your feedback!.</p>
                    <br/>
                    <div className="contact-section">
                    <h2 className="gradient__text">First Name </h2>
                    <div className="inputz">
                    <input
                            type="text"
                            placeholder="First name"
                            name="fname"
                            value={fname}
                            onChange={(e) => {
                                setFname(e.target.value)
                            }}
                            required
                        />
                    </div>
                    </div>

                    <div className="contact-section">
                    <h2 className="gradient__text">Last Name </h2>
                    <div className="inputz">
                    <input
                            type="text"
                            placeholder="Last name"
                            name="lname"
                            value={lname}
                            onChange={(e) => {
                                setLname(e.target.value)
                            }}
                            required
                        />
                    </div>  
                    </div>
                    
                    <div className="contact-section">
                    <h2 className="gradient__text">Phone Number </h2>
                    <div className="inputw">
                    <input
                            type=""
                            placeholder="Phone Number"
                            name="pnumber"
                            value={pnumber}
                            onChange={(e) => {
                                setPNumber(e.target.value)
                            }}
                            required
                        />
                    </div>
                    </div>

                    <div className="contact-section">
                    <h2 className="gradient__text">Your Email </h2>
                    <div className="inputx">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                        </div>
                    </div>
                    <div className="contact-section">
                    <h3 className="gradient__text"> Do you want one of our executive to get in touch </h3>
                        </div>
                    <div className="contact-section">
                    <h3 className="yesno">Yes </h3>
                    <input type="radio" value="Male" name="gender" /> 
                    <h3 className="yesno">No </h3>
                    <input type="radio" value="Female" name="gender" /> 
                    
                    
                    </div>
                    
                    <div className="contact-section">
                    <h2 className="gradient__text">Your Message </h2>
                    <div className="inputy">
                        <textarea 
                            rows="12"
                            cols="40"
                            placeholder="Your message"
                            name="message"
                            className="message-box"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            required
                        />
                        </div>
                    </div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your experience with our interface</h3>
                    <StarRating /></div></div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your experience with our food predicition </h3>
                    <StarRating /></div></div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your experience with our recipe predicition </h3>
                    <StarRating /></div></div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your experience with our restaurants predicition </h3>
                    <StarRating /></div></div>
                    <div className="contact-section">
                        <Button2
                            className=""
                            type="submit"
                            onClick={handleSubmit}
                        >Submit                            
                        </Button2>
                    </div>
                </div>
                
            </form>
            <Footer />
        </div>
    )
};

export default ContactUs;






