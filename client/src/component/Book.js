import React , {Component} from 'react'
import './book.css';
import styled from "styled-components";
import Restaurants from './Restaurants'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Button2 = styled.button`
width:auto;
height:10%;
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border: 0;
border-radius: 8px;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 2.5;
outline: transparent;
margin-top:5%;
margin-bottom:5%;
padding: 0 10rem;
text-align: center;
text-decoration: none;
transition: box-shadow .2s ease-in-out;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
`;

export class Book extends Component{

  constructor(props){
    super(props)
    this.state = {
      instructions: true
    }
  }

  render(){
    const recipedata ={
      name: this.props.recipe["strMeal"],
      image : this.props.recipe["strMealThumb"],
      instructions : this.props.recipe["strInstructions"],
      Ingredient1: this.props.recipe["strIngredient1"],
      Ingredient2: this.props.recipe["strIngredient2"],
      Ingredient3: this.props.recipe["strIngredient3"],
      Ingredient4: this.props.recipe["strIngredient4"],
      Ingredient5: this.props.recipe["strIngredient5"],
      Ingredient6: this.props.recipe["strIngredient6"],
      Ingredient7: this.props.recipe["strIngredient7"],
      Ingredient8: this.props.recipe["strIngredient8"],
      Ingredient9: this.props.recipe["strIngredient9"],
      Ingredient10: this.props.recipe["strIngredient10"],
      Ingredient11: this.props.recipe["strIngredient11"],
      Ingredient12: this.props.recipe["strIngredient12"],
      Ingredient13: this.props.recipe["strIngredient13"],
      Ingredient14: this.props.recipe["strIngredient14"],
      Ingredient15: this.props.recipe["strIngredient15"],
      Ingredient16: this.props.recipe["strIngredient16"],
      Ingredient17: this.props.recipe["strIngredient17"],
      Ingredient18: this.props.recipe["strIngredient18"],
      Ingredient19: this.props.recipe["strIngredient19"],
      Ingredient20: this.props.recipe["strIngredient20"],
      Measure1: this.props.recipe["strMeasure1"],
      Measure2: this.props.recipe["strMeasure2"],
      Measure3: this.props.recipe["strMeasure3"],
      Measure4: this.props.recipe["strMeasure4"],
      Measure5: this.props.recipe["strMeasure5"],
      Measure6: this.props.recipe["strMeasure6"],
      Measure7: this.props.recipe["strMeasure7"],
      Measure8: this.props.recipe["strMeasure8"],
      Measure9: this.props.recipe["strMeasure9"],
      Measure10: this.props.recipe["strMeasure10"],
      Measure11: this.props.recipe["strMeasure11"],
      Measure12: this.props.recipe["strMeasure12"],
      Measure13: this.props.recipe["strMeasure13"],
      Measure14: this.props.recipe["strMeasure14"],
      Measure15: this.props.recipe["strMeasure15"],
      Measure16: this.props.recipe["strMeasure16"],
      Measure17: this.props.recipe["strMeasure17"],
      Measure18: this.props.recipe["strMeasure18"],
      Measure19: this.props.recipe["strMeasure19"],
      Measure20: this.props.recipe["strMeasure20"],
      youtube : this.props.recipe["strYoutube"],
      source : this.props.recipe["strSource"]
    }
    return (
      <div>
        <div className="bookheader">
        <div className="bookheader-content">
        <img className="image-upload2" src = {recipedata.image} alt="recipe"/>
          <h2>{recipedata.name}</h2></div>
          <div className="bookheader-content">
            <Button2 onClick = {()=> this.setState({instructions: true})}> Constituents </Button2>
            <Button2 onClick = {()=> this.setState({instructions: false})}> Instructions</Button2>
          </div>
        </div>
        {this.state.instructions &&(<div className="bookheader-content">
      <table>
            <tr>
              <th> Ingredients </th>
              <th> Quantity </th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient1} </th>
              <th>{recipedata.Measure1}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient2} </th>
              <th>{recipedata.Measure2}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient3} </th>
              <th>{recipedata.Measure3}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient4} </th>
              <th>{recipedata.Measure4}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient5} </th>
              <th>{recipedata.Measure5}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient6} </th>
              <th>{recipedata.Measure6}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient7} </th>
              <th>{recipedata.Measure7}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient8} </th>
              <th>{recipedata.Measure8}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient9} </th>
              <th>{recipedata.Measure9}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient10} </th>
              <th>{recipedata.Measure10}</th>
            </tr>
            <tr>
              <th> {recipedata.Ingredient11} </th>
              <th>{recipedata.Measure11}</th>
            </tr>
            </table>
        </div>)}
        {!this.state.instructions && (<div className="bookheader-content">
          
          <p>{recipedata.instructions}</p></div>)}
      <FontAwesomeIcon className="youtube" icon = {faYoutube} href={recipedata.youtube}></FontAwesomeIcon>
      <FontAwesomeIcon className ="google" icon = {faGoogle} href = {recipedata.source}></FontAwesomeIcon>
      <div className="bookheader_missing">
      </div>
      <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

export default Book;