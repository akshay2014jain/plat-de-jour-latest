import React, {Component} from 'react';
import Article from './Article';
import './restaurants.css';

export class Restaurants extends Component{

  render(){
    const restaurants = this.props.restaurants
    
    return(
      <div id="blog">
        <div className="g__blog-heading">
          <h1>Restaurants near you</h1>
        <div className="g__blog-container">
        {
        restaurants !== null && 
        restaurants.map((restaurant) => (
          <div className="g__blog-container_groupA">
            <Article details={restaurant}/>
          </div>
        ))
        }
      </div>
      </div>
      </div>
    )
  }
}

export default Restaurants