import './App.css';
import './index.css';
import {Component} from "react";
import {Helmet} from "react-helmet";
import Navbar from './component/Navbar';

export default class App extends Component{

  componentDidMount(){

    fetch("/getData")
      .then(response => response.json())
      .then(response => console.log(response.body))
  }

  render(){
    return (
      <div className="App">
        <Helmet>
          <meta charSet = "utf-8" />
          <title> Plat De Joûr </title>
        </Helmet>
        <Navbar />
      </div>
    );
  }
}