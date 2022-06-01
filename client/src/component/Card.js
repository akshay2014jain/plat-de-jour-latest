import React , {Component} from 'react'
import './card.css';
import { css } from "@emotion/react";
import startImage from '../images/try.jpeg';
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: flex;
  margin: 5rem 8rem 0rem 2rem;
  border-color: red;
`;

export class Card extends Component{

  constructor(props){
    super(props)
    this.state = {
      profileImg: startImage,
      loading: false
    }
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    const that = this
    reader.onload = () => {
      console.log('Loading Result')
      if(reader.readyState === 2){
        that.props.setState({knowButton: true});
        let image = reader.result.split(",")[1]
        that.setState({profileImg: reader.result, loading: true})
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: image})
        };

        fetch("/predict", requestOptions)
          .then(response => response.json())
          .then(function(jsonString){
            that.setState({loading: false})
            that.props.setState({image: jsonString.body.category, confidence: jsonString.body.confidence, activeNow: 'knowFood', knowButton: false});
            console.log(jsonString);
          })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render(){
    const {profileImg} = this.state;
    return (
      <div className="cardheader" id="start">
      <div className="cardheader-content">
      <h1 className="gradient__text">What's Cooking?</h1>
        <p>Upload an Image & </p>
        <p>We'll pick the Ideal Recipe for you!</p>
        </div>
      <div className="cardheader-content__people">
        <img src= {profileImg} alt="profile"/>
      </div>
      <input style = {{display:'none'}} type = "file" name = "image-upload" id = "input" accept = "image/*" onChange={this.imageHandler}/>
      <div className="cardheader-content" >
        {
          this.state.loading === false ? 
            <>
              <label htmlFor="input" className="image-upload">
                <i className="material-icons"> add_photo_alternate </i>
                  Choose your food photo 
              </label>
            </>
            :
            <PacmanLoader color={'#AE67FA'} loading={this.state.loading} css={override} size={25} />
        }        
      </div>
      <div>
      </div>
    </div>
    )
  }
}
export default Card;