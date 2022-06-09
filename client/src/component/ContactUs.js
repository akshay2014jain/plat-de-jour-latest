import React, { useState } from 'react';
import '../css/contactus.css'
import Footer from './Footer';
import styled from "styled-components";
import emailjs from '@emailjs/browser';


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
margin-bottom: 2rem;
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
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email.trim() !== "")
            sendFeedback({to_name: name, to_email: email});
        else
            alert("Kindly fill in the relevant details before submitting the feedback!");
    }
    
    const sendFeedback = (variables) => {
        emailjs.send(
            'service_rp84qs7',
            'template_616r4on',
            variables,
            'aODHx0Vsc_W6hWLf0'
            ).then(res => {
                alert("Thank you for your valuable feedback! We will get in touch");
                sendFormUpdate({to_name: name, to_email: email, message: message, rating1: rating1, rating2: rating2});
            })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    };

    const sendFormUpdate = (variables) => {
        emailjs.send(
            'service_v7zu0xx',
            'template_4ozdfr4',
            variables,
            'uwzBVhypyZE_VPVYy'
        ).then(res => {})
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    const StarRating1 = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= rating1 ? "on" : "off"}
                            onClick={() => setRating1(index)}>
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
        );
    };

    const StarRating2 = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= rating2 ? "on" : "off"}
                            onClick={() => setRating2(index)}>
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
        );
    };

    return (
        <div id="contactus">
            <form className="contactus">
                <div >
                <h1 className="gradient__text">Feedback Form</h1>
                <br/>
                        <p className="gradient__text">Thank you for visiting Plat de Joûr! We would love to hear about your experience
simply fill out this form and hit complete. Thank you for your feedback!.</p>
                    <br/>
                    <div className="contact-section">
                    <h2 className="gradient__text">Name </h2>
                    <div className="inputz">
                    <input
                            type="text"
                            placeholder="* Enter name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            required
                        />
                    </div>
                    </div>

                    <div className="contact-section">
                    <h2 className="gradient__text">Email</h2>
                    <div className="inputx">
                        <input
                            type="email"
                            placeholder="* Enter email"
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
                    <h2 className="gradient__text">Message </h2>
                    <div className="inputy">
                        <textarea 
                            rows="5"
                            cols="30"
                            placeholder="* Please enter your message!"
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
                    <StarRating1 /></div></div>
                    <div className="contact-section" >
                    <div className='stars'>
                    <h3 className="gradient__text"> How was your experience with our food predicition </h3>
                    <StarRating2 /></div></div>
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






