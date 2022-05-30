import React from 'react';
import {Component} from "react";
import './result.css';
import Book from './Book';

export default class Result extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      showBook: false,
      foodImage: this.props.image,
      confidence: this.props.confidence,
      recipe: '',
      restaurants: null,
      onLoad: false
    }
  }

  componentDidMount(){
    this.getRecipe();
    this.getRestaurants();
  }

  getRecipe = (e) => {
    const that = this
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({s: that.state.foodImage}),
    };
    setTimeout(() => fetch("/getMealDb", requestOptions)
      .then(response => response.json())
      .then(function(jsonString){
        let recipe = JSON.parse(jsonString.body)
        that.setState({recipe: recipe.meals[0]})
      }), 250);
  };

  getRestaurants = (e) => {

    const that = this
    console.log(that.props)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({latitude: this.props.lat, longitude: this.props.lon, foodImage: that.state.foodImage}),
    };

    setTimeout(() => fetch("/getRestaurants", requestOptions)
      .then(response => response.json())
      .then(function(jsonString){
        let json = JSON.parse(jsonString.body)
        that.setState({restaurants: json.results})
      }), 500);
  };

  setshowBook(showParam){
    this.setState({showBook: showParam});
  }

  getContent(){
    this.setshowBook(true)
  }

  render(){
    return(
      <div className="result__cta" id="results">
      {!this.state.showBook && (<div className="result__cta-content">
        <h3>Our AI Model informed us, It's our favorite dish - {this.state.foodImage}, Confidence Score - {this.state.confidence}</h3>
      </div>)}
      {!this.state.showBook && (<div className="result__cta-btn">
        <a href="/#results"><button onClick = {() => this.getContent()} className={this.state.confidence <= 0.2 ? 'disabledRecipe' : 'enabledRecipe'} disabled={this.state.confidence <= 0.2 ? true : false} type="button">Get Recipe</button></a>
      </div>)}
      {this.state.showBook && <Book {...this.state}/>}
      </div>
    );
  }
}