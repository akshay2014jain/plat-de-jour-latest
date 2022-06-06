import React, {Component} from 'react';
import './aboutus.css'
import Footer from './footer'; 
import Akshay from '../images/akshay.jpeg'
import Anish from '../images/anish.jpeg'
import Sahil from '../images/sahil.jpg'
import Viraj from '../images/viraj.jpg'
import { faReact, faPython, faNodeJs , faDocker, faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class AboutUs extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div className='gradient__bg' id="aboutus">
            <div className='aboutus' id="aboutus">
                <div className="about-section">
                    <h1 className='gradient__text__aboutus'>About Plat De Jour</h1>
                    <p className='para'>Plat De Jour is an AI-powered food image recognition tool that takes an image as input and provides a recipe along with the ingredients and a list of restaurants that serve the food item. Our image-to-recipe generation system is built upon state-of-the-art deep learning techniques and aims to promote AI in the food and healthcare industry.</p>
                    </div>
                    
                <div className='about-section'>
                    <h1 className='gradient__text__aboutus'>Tech Stack</h1>
                    <FontAwesomeIcon className="react" icon = {faReact}></FontAwesomeIcon>
                    <FontAwesomeIcon className="python" icon = {faPython}></FontAwesomeIcon>
                    <FontAwesomeIcon className="nodejs" icon = {faNodeJs}></FontAwesomeIcon>
                    <FontAwesomeIcon className="docker" icon = {faDocker}></FontAwesomeIcon>
                    <FontAwesomeIcon className="github" icon = {faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon className="html5" icon = {faHtml5}></FontAwesomeIcon>
                    {/* <div className='about-section_para'>
                    <p className='para'>React</p>
                    <p className='para'>React</p>
                    <p className='para'>React</p>
                    <p className='para'>React</p>
                    <p className='para'>React</p>
                    </div> */}
                </div>
                    <h1 className='gradient__text__aboutus'>Our Team</h1>
                    <div className='temp'>
                        <div>
                            <div className="card">
                            <img className='img' src={Akshay} alt="Jane" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Akshay Jain</h2>
                                <p  className="titlex">Full Stack Engineer</p>
                                <p className='email'><u >akshayj2@uci.edu </u> </p>
                                <div className='fonts'>
                                <p><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></p>
                                <p><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></p>
                                </div>
                                
                            </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                            <img className='img' src={Anish} alt="Jane" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Anish Punamiya</h2>
                                <p className="titlex">Backend Developer</p>
                                
                                <p className='email'><u>apunamiy@uci.edu </u> </p>
                                <div className='fonts'>
                                <p><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></p>
                                <p><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div >
                            <div className="card">
                            <img className='img' src={Sahil} alt="Jane" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Sahil Jain</h2>
                                <p className="titlex">ML Engineer</p>
                                <p className='email'> <u>sahilj2@uci.edu </u></p>
                                <div className='fonts'>
                                <p><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></p>
                                <p><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="card">
                            <img className='img' src={Viraj} alt="Jane" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Viraj Shah</h2>
                                <p className="titlex">Cloud Engineer</p>
                                <p className='email'> <u >shahvp@uci.edu</u></p>
                                <div className='fonts'>
                                <p><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></p>
                                <p><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></p>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
               
            </div>
            <Footer/>
            </div>
        )
    }
}