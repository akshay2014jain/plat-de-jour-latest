import React from 'react';
import './feature.css';
import Feat from './feat.js';

const featuredata = [
    {
        title: 'Step 1',
        text: 'Take a picture of the food you want the recipe'
    },{
        title: 'Step 2',
        text: 'Upload the picture of the food on Plat De Joûr portal'
    },{
        title: 'Step 3',
        text: 'Wait for our advance machine learning model to let you know what the food item is'
    },{
        title: 'Step 4',
        text: 'Get the recipe & start preapring'
    },{
        title : 'Step 5',
        text: 'The last & most important step is : Enjoyyy'
    }
]

const Features = () => (
    <div className="g__features section__padding" id="hiw">
      <div className="g__features-heading">
        <h1 className="gradient__text">The Future of Food is now and You Just Need to Realize It. Step into Future Today. Make it Happen.</h1>
        <p>Get Started</p>
      </div>
      <div className="g__features-container">
        {featuredata.map((item, index) => (
          <Feat title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
  
  export default Features;