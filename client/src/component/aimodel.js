import React, {Component} from 'react';
import Footer from './footer';
import '../css/aimodel.css' ;
import startImage from '../images/try.jpeg';

export default class AImodel extends Component{
    constructor(props){
        super(props)
        this.state = {
          profileImg: startImage
        }
      }


    render(){
        const {profileImg} = this.state;
        return(
            <div id='aimodel' className='aimodel'>
                <h1 className='gradient__text'>Deep Learning Model</h1>
                <p className='gradient__text'> Help us improve our artifical intelligence model to serve you better </p>
                <div className="aimodel__image">
                    <img  src= {profileImg} alt="profile"/>
                </div>
                <Footer/>
            </div>
            
        )
    }
}

