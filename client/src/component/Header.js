import React from 'react';
import './Header.css';
import food from './food.png';

const Header = () => (
    <div className="g__header section__padding" id="home">
      <div className="g__header-content">
      <h1 className="gradient__text">Discover the best food and drinks with one click</h1>
        <p>When your day sucked and all you wanna do is get into sweatpants and cook something that reminds you of your childhood (trust us—we've all been there!), we have got your back</p>
        </div>
    <div className="g__header-content__people">
        <img src={food} />
      </div>
    </div>
  );
  
//   export default Header;

// const Header = () => (
//     <div className="g__header section__padding" id="home">
//       <div className="g__header-content">
//         <h1 className="gradient__text">Discover the best food and drinks with one click</h1>
//         <p>When your day sucked and all you wanna do is get into sweatpants and cook something that reminds you of your childhood (trust—we've all been there!), we have got your back.</p>
//         <div className="g__header-image">
//       <img src={food} />
//         </div>
//       </div>
//     </div>
//   );

  export default Header;