import React, {Component} from 'react';
import Article from './Article';
import Maps from './Maps';
import '../css/restaurants.css';

export class Restaurants extends Component{

  constructor(props){
    super(props)
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    }
  }

  render(){
    const restaurants = this.props.restaurants
    
    return(
      <div id="blog">
        <div className="g__blog-heading">
          <h1>Restaurants near you : </h1>
          {/* {
            restaurants !== null && 
              <Maps restaurants={restaurants} {...this.state}/>
          } */}
        <div className="g__blog-container">
        {
        restaurants !== null && 
        restaurants.map((restaurant) => (
          <div key={restaurant.place_id} className="g__blog-container_groupA">
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