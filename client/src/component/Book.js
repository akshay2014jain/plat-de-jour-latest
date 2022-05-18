import React , {Component} from 'react'
import './book.css';
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export class Book extends Component{

  constructor(props){
    super(props)
    this.state = {
      foodItem: this.props.image,
      showRecipe: 'No Show',
      recipe: ''
    }
  }

  getRecipe = (e) => {
    const that = this
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({s: this.state.foodItem}),
    };
    fetch("/getMealDb", requestOptions)
      .then(response => response.json())
      .then(function(jsonString){
        let recipe = JSON.parse(jsonString.body)
        that.setState({recipe: recipe.meals[0], showRecipe: 'Show'})
      })
  };

  render(){
    if(this.state.showRecipe === 'No Show'){
    return (
      <div className="page">
          <div className="container">
            <h1 className="heading"> It's  {this.state.foodItem} </h1>
            <h1 className="heading">  </h1>
            {this.state.showRecipe === "No Show" && <nav>
              <Button onClick={this.getRecipe}>
                Get Recipe
              </Button>
            </nav>}
            <div >
              {this.state.showRecipe !== "No Show" && <div>  </div> }
            </div>
          </div>
        </div> 
    )}
    else{
      return (<R recipe = {this.state.recipe}/>);
    }
  }
}

function R (recipe) {
  console.log(recipe.recipe)
  let name = recipe.recipe["strMeal"];
  let data = recipe.recipe["strInstructions"];
  let image = recipe.recipe["strMealThumb"];
  return (
    <div>
      <img src = {image} width={250} height={250} alt="Something"/>
      <h1>
        {name}
      </h1>
      <br/>
      <div className="container">
        <br/>
          <p>
            <h2><i>Recipe : </i> </h2>
            <br/>
            {data} 
            <br/>
            <br/>
            <h2><i>Ingredients</i></h2>
            <br/>
            {recipe.recipe["strIngredient1"]} 
            {recipe.recipe["strIngredient2"]}
            <br/>
            {recipe.recipe["strIngredient3"]}
            <br/>
            {recipe.recipe["strIngredient4"]}
            <br/>
            {recipe.recipe["strIngredient5"]}
            <br/>
            {recipe.recipe["strIngredient6"]}
            <br/>
            {recipe.recipe["strIngredient7"]}
            <br/>
            {recipe.recipe["strIngredient8"]}
            <br/>
            {recipe.recipe["strIngredient9"]}
            <br/>
            {recipe.recipe["strIngredient10"]}
            <br/>
            {recipe.recipe["strIngredient11"]}
            <br/> 
            { <a href={recipe.recipe["strYoutube"]} >
              Recipe Video
            </a> } <br/>
            { <a href={recipe.recipe["strSource"]}>
              Source Video
            </a> } 
          </p> 
      </div>
    <h1 className="heading"> <i>Dont wanna cook? </i></h1>
    <Button>Restaurants</Button>
    </div>
  )
}

export default Book;