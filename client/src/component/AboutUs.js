import React, {Component} from 'react';
import './aboutus.css'
import Footer from './footer'; 
import Akshay from '../images/akshay.jpeg'
import Anish from '../images/anish.jpeg'
import Sahil from '../images/sahil.jpg'
import Viraj from '../images/viraj.jpg'

export default class AboutUs extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <>
            <div className='aboutus' id="aboutus">
                <div className="about-section">
                    <h1>About Plat De Jour</h1>
                    <p>Plat De Jour is an AI-powered food image recognition tool that takes an image as input and provides a recipe along with the ingredients and a list of restaurants that serve the food item. Our image-to-recipe generation system is built upon state-of-the-art deep learning techniques and aims to promote AI in the food and healthcare industry.</p>
                    </div>
                    <h1>Our Team</h1>
                    <div className='temp'>
                        <div>
                            <div className="card">
                            <img className='img' src={Akshay} alt="Jane" />
                            <div className="container">
                                <h2>Akshay Jain</h2>
                                <p className="title">Full Stack Engineer</p>
                                <p className='email'><u>akshayj2@uci.edu </u></p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                            <img className='img' src={Anish} alt="Jane" />
                            <div className="container">
                                <h2>Anish Punamiya</h2>
                                <p className="title">Backend Developer</p>
                                
                                <p className='email'><u>apunamiy@uci.edu </u> </p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>

                        <div >
                            <div className="card">
                            <img className='img' src={Sahil} alt="Jane" />
                            <div className="container">
                                <h2>Sahil Jain</h2>
                                <p className="title">ML Engineer</p>
                                <p className='email'> <u>sahilj2@uci.edu </u></p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="card">
                            <img className='img' src={Viraj} alt="Jane" />
                            <div className="container">
                                <h2>Viraj Shah</h2>
                                <p className="title">Cloud Engineer</p>
                                <p className='email'> <u>shahvp@uci.edu</u></p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>
                </div>
               
            </div>
            <Footer/>
            </>
        )
    }
}