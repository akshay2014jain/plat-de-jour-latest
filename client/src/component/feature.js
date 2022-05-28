import React from 'react';
import './feature.css';
import Feat from './feat.js';

const featuredata = [
    {
        title: 'Step 1',
        text: 'Take a photo of the dish for which you want the recipe.'
    },{
        title: 'Step 2',
        text: 'Upload the image on Plat De Joûr.'
    },{
        title: 'Step 3',
        text: 'Wait for our advanced Machine Learning model to reveal the food item\'s identity.'
    },{
        title: 'Step 4',
        text: 'Get the Recipe and start Preparing.'
    },{
      title : 'Step 5',
      text: "Missing Ingredients? Get it delivered! "
  },
    {
        title : 'Step 6',
        text: "Don't feel like Cooking? Order Online!"
    },{
      title : 'Step 7',
      text: 'The last & most important step: Enjoyy!'
  }
]

const Features = () => (
    <div className="g__features section__padding" id="hiw">
      <div className="g__features-heading">
        <h1 className="gradient__text">The Future of Food is 'Now'. Step into the Future today. Make it Happen.</h1>
        <p><a href="/#start">Get Started</a></p>
      </div>
      <div className="g__features-container">
        {featuredata.map((item, index) => (
          <Feat title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
  
  export default Features;