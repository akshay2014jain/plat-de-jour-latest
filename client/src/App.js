import './App.css';
import './index.css';
import Card  from './component/Card';
import {Component} from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import Navbar from './component/Navbar';
import Header from './component/Header';
import Feature from './component/feature';
import Footer from './component/footer';
import Result from './component/Result';

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

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      activeNow: 'home',
      image: ''
    }
  }

  componentDidMount(){
    fetch("/getData")
      .then(response => response.json())
      .then(response => console.log(response.body))
  }

  setActiveNow(activeStatus){
    this.setState({activeNow: activeStatus});
  }

  render(){
    return (
      <div className="App">
        <Helmet>
          <meta charSet = "utf-8" />
          <title> Plat De Joûr </title>
        </Helmet>
        <div className="gradient__bg">
          <Navbar/>
          {this.state.activeNow !== 'book' && <Header/>}
          {this.state.activeNow !== 'book' && <Feature/>}
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
      </div>
    );
  }
}