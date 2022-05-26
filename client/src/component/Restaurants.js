import React, {Component} from 'react';
import Article from './Article';
import './restaurants.css';

export class Restaurants extends Component{

  render(){
    const restaurants = this.props.restaurants
    
    return(
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1>Restaurants near you</h1>
        </div>
        <div className="gpt3__blog-container">
        {
        restaurants !== null && 
        restaurants.map((restaurant) => (
          
          <div className="gpt3__blog-container_groupA">
            <Article details={restaurant}/>
          </div>
        ))
        }
      </div>
      </div>
    )
  }
}

export default Restaurants