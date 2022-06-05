import React from 'react';
import '../css/feat.css';

const Feat = ({ title, text }) => (
  <div className="g__features-container__feature">
    <div className="g__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="g__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feat;