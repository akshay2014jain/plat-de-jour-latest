import React, {Component} from 'react';
import styled from "styled-components";
import './home.css'
import Card  from './Card';
import Header from './Header';
import Feature from './feature';
import Footer from './footer';
import Result from './Result';

const Button = styled.button`
background-color: #FF4820;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
visibility = "hidden";
font-family : var(--font-family);
`;

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            activeNow: 'home',
            image: '',
            lat: '',
            lon: ''
        }
    }

    componentDidMount(){
        let latitude = 0;
        let longitude = 0;

        let success = position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            this.setState(
                {
                    lat: latitude,
                    lon: longitude
                }
            );
        };

        function error() {
            console.log("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    setActiveNow = (activeStatus) =>{
        this.setState({activeNow: activeStatus});
    }

    render(){
        return(
            <>
                <div className="gradient__bg">
                    <Header/>
                    <Feature/>
                </div>
                <div>
                    <Card setState={state => this.setState(state)}/> 
                    {this.state.activeNow === 'knowFood' && 
                        <div>
                            <nav className="buttontemp">
                                <Button onClick = {() => this.setActiveNow('book') } >
                                    Know Your Food!
                                </Button> 
                            </nav> 
                        </div>
                    }
                    {this.state.activeNow === 'book' && <Result {...this.state}/>}
                </div>
                <Footer/>
            </>
        )
    }
}