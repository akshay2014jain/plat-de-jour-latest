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
      <div className="result__cta">

      {!this.state.showBook && (<div className="result__cta-content">
        <p>Our AI Model told us </p>
        <h3>It's our favorite dish {this.state.foodImage}.</h3>
      </div>)}
      {!this.state.showBook && (<div className="result__cta-btn">
        <button onClick = {() => this.getContent()} type="button">Get Recipe</button>
      </div>)}
      {this.state.showBook && <Book {...this.state}/>}
      </div>
    );
  }
}