import React, {Component} from 'react';
import '../css/aboutus.css'
import Footer from './Footer'; 
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
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="react" icon = {faReact}></FontAwesomeIcon></a>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="python" icon = {faPython}></FontAwesomeIcon></a>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="nodejs" icon = {faNodeJs}></FontAwesomeIcon></a>
                    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="docker" icon = {faDocker}></FontAwesomeIcon></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="github" icon = {faGithub}></FontAwesomeIcon></a>
                    <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="html5" icon = {faHtml5}></FontAwesomeIcon></a>
                </div>
                    <h1 className='gradient__text__aboutus'>Our Team</h1>
                    <div className='temp'>
                        <div>
                            <div className="card">
                            <img className='img' src={Akshay} alt="Akshay" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Akshay Jain</h2>
                                <p  className="titlex">Full Stack Engineer</p>
                                <p className='email'><a href="mailto:akshayj2@uci.edu" target="_blank" rel="noopener noreferrer"><u >akshayj2@uci.edu </u></a></p>
                                <div className='fonts'>
                                <p><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></p>
                                <p><a href="https://github.com/akshay2014jain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></a></p>
                                </div>
                                
                            </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                            <img className='img' src={Anish} alt="Anish" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Anish Punamiya</h2>
                                <p className="titlex">Backend Developer</p>
                                <p className='email'><a href="mailto:apunamiy@uci.edu" target="_blank" rel="noopener noreferrer"><u>apunamiy@uci.edu</u></a></p>
                                <div className='fonts'>
                                <p><a href="https://www.linkedin.com/in/anish-punamiya/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></a></p>
                                <p><a href="https://github.com/AnishPunamiya" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></a></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div >
                            <div className="card">
                            <img className='img' src={Sahil} alt="Sahil" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Sahil Jain</h2>
                                <p className="titlex">ML Engineer</p>
                                <p className='email'><a href="mailto:sahilj2@uci.edu" target="_blank" rel="noopener noreferrer"><u>sahilj2@uci.edu</u></a></p>
                                <div className='fonts'>
                                <p><a href="https://www.linkedin.com/in/thesahiljain/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></a></p>
                                <p><a href="https://github.com/thesahiljain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="card">
                            <img className='img' src={Viraj} alt="Viraj" />
                            <div className="container">
                                <h2 className='gradient__text__aboutus'>Viraj Shah</h2>
                                <p className="titlex">Cloud Engineer</p>
                                <p className='email'><a href="mailto:shahvp@uci.edu" target="_blank" rel="noopener noreferrer"><u >shahvp@uci.edu</u></a></p>
                                <div className='fonts'>
                                <p><a href="https://www.linkedin.com/in/virajshah11/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin" icon = {faLinkedinIn}></FontAwesomeIcon></a></p>
                                <p><a href="https://github.com/virajshah1104" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="githubx" icon = {faGithub}></FontAwesomeIcon></a></p>
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