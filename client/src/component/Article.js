import React, {Component} from 'react';
import './article.css';


export class Article extends Component{
  render(){
    const restaurant_data = this.props.details
    return(
      
      <div className="g__blog-container_article">
    <div className="g__blog-container_article-content">
      <div>
      <h3>{restaurant_data.name}</h3>
        <p>{restaurant_data.formatted_address}</p>
      </div>
    </div>
    <p className='order_online'><u><a href={"https://www.google.com/maps/search/"+restaurant_data.name} target="_blank" rel="noopener noreferrer">Order Online</a></u></p>
  </div>

    )
  }
}

export default Article;