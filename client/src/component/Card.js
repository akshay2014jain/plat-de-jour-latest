import React , {Component} from 'react'
import './card.css';
import startImage from './try.jpeg';

export class Card extends Component{

  constructor(props){
    super(props)
    this.state = {
      profileImg: startImage
    }
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    const that = this
    reader.onload = () => {
      console.log('Loading Result')
      if(reader.readyState === 2){
        let image = reader.result.split(",")[1]
        this.setState({profileImg: reader.result })
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: image})
        };

        fetch("/predict", requestOptions)
          .then(response => response.json())
          .then(function(jsonString){
            that.props.setState({image: jsonString.body.category});
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
        <p>Upload the picture </p>
        <p>& let us find the perfect recipe for you</p>
        </div>
      <div className="cardheader-content__people">
        <img src= {profileImg} alt="profile"/>
      </div>
      <input style = {{display:'none'}} type = "file" name = "image-upload" id = "input" accept = "image/*" onChange={this.imageHandler}/>
      <div className="cardheader-content" >
        <label htmlFor="input" className="image-upload">
            <i className="material-icons"> add_photo_alternate </i>
              Choose your food photo 
        </label>
      </div>
      <div>
      </div>
    </div>
    )
  }
}
export default Card;