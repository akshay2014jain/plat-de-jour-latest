import React, {Component} from 'react';
import './article.css';


export class Article extends Component{
  render(){
    const restaurant_data = this.props.details
    return(
      <div className="g__blog-container_article">
    <div className="g__blog-container_article-image">
    </div>
    <div className="g__blog-container_article-content">
      <div>
      <h3>{restaurant_data.name}</h3>
        <p>{restaurant_data.formatted_address}</p>
        
      </div>
      <p>Order Now</p>
    </div>
  </div>
    )
  }
}

export default Article;