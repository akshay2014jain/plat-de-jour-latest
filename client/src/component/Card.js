import React , {Component} from 'react'
import menu from '../menu.png'
import './card.css';

export class Card extends Component{

  constructor(props){
    super(props)
    this.state = {
      profileImg: menu
    }
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    const that = this
    reader.onload = () => {
      console.log('Loading Result')
      if(reader.readyState === 2){
        let img = e.target.files[0];
        this.setState({profileImg: reader.result })
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: img.name})
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
      <div className="page">
        <div className="container">
          <h1 className="heading"> What's for Dinner?  </h1>
            <h2 className="heading" > Upload your food picture </h2>
          <div className="img-holder" >
            <img src={profileImg} alt ="" id="img" className="img"/>
          </div>
          <input type = "file" name = "image-upload" id = "input" accept = "image/*" onChange={this.imageHandler}/>
          <div className="label" >
            <label htmlFor="input" className="image-upload">
              <i className="material-icons"> add_photo_alternate </i>
              Choose your food photo
            </label>
          </div>
      </div>
    </div>
    )
  }
}
export default Card;