import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="g__blog-container_article">
    <div className="g__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="g__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Order Now</p>
    </div>
  </div>
);

export default Article;