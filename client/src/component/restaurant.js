import React from 'react';
import Article from './Article';
import blog01 from './pizza1.jpeg';
import blog02 from './pizza2.jpeg';
import './restaurant.css';

const Restaurant = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1>Restaurants near you</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="0.2 miles away" text="Blaze Pizza" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="1.6 miles away" text="Ray's Pizza" />
            </div>
    </div>
  </div>
);

export default Restaurant;