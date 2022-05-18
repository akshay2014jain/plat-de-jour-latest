import './App.css';

import Card  from './component/Card';
import Book from './component/Book';
import {Component} from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  visibility = "hidden";
  font-family : cursive;
`;

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      active: 'card',
      image: ''
    }
  }

  setActive(){
    this.setState({active: 'book'});
  }

  render(){
    return (
      <div className="App">
        <Helmet>
          <meta charSet = "utf-8" />
          <title> Plat De Joûr</title>
        </Helmet>
        <h1 className="heading1">
        <img className="photo" src= { require('./logo.png')} alt="Plat de Jour" />
          Plat De Joûr 
          </h1>
        <div>
          {this.state.active === 'card' && <Card setState={state => this.setState(state)} /> }
          {this.state.active === "card" && <div>
          {<nav className="buttontemp">
            <Button onClick = {() => this.setActive()} >
              Know Your Food!
            </Button> 
          </nav>}
        </div>}
        {this.state.active === "book" && <Book {...this.state}/>}
        </div>
      </div>
    );
  }
}