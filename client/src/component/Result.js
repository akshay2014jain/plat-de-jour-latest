import React from 'react';
import {Component} from "react";
import './result.css';
import Book from './Book';

export default class Result extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      showBook: 'false',
      foodImage: this.props.image
    }
  }

  setshowBook(showParam){
    this.setState({showBook: showParam});
  }

  render(){
    return(
      <div className="result__cta">

      {this.state.showBook ==='false' && (<div className="result__cta-content">
        <p>Our AI Model told us </p>
        <h3>It's our favorite dish {this.state.foodImage}.</h3>
      </div>)}
      {this.state.showBook ==='false' && (<div className="result__cta-btn">
        <button onClick = {() => this.setshowBook('true')} type="button">Get Recipe</button>
      </div>)}
      {this.state.showBook ==='true' && <Book {...this.state}/>}
      </div>
    );
  }
}