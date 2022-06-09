import React, {Component} from 'react';
import '../css/aimodel.css' ;
import Accuracy from '../images/accuracy.jpg';
import Loss from '../images/loss.jpg';
import Model from '../images/model.png';
import Precision from '../images/precision.jpg';
import Recall from '../images/recall.jpg';
import AI from '../images/ai.png';
import Food from '../images/food.jpeg';
import Working from '../images/deep_learning.gif';
import Result from '../images/illustration.png';
import Results from '../images/result.png';
import { HashLink as Link } from 'react-router-hash-link';

export default class AImodel extends Component{
    
    render(){
        return(
            <div className="main">
            <div className='contentlist__aimodel'>
                <Link smooth to="/aimodel#background_ai"><u className='underline'><p>Background</p></u></Link>
                <Link smooth to="/aimodel#howitworks"><u className='underline'><p>How it works</p></u></Link>
                <Link smooth to="/aimodel#dataset"><u className='underline'><p>The Dataset</p></u></Link>
                <Link smooth to="/aimodel#themodel"><u className='underline'><p>The Model</p></u></Link>
                <Link smooth to="/aimodel#performance"><u className='underline'><p>Performance</p></u></Link>
                <Link smooth to="/aimodel#results"><u className='underline'><p>Results</p></u></Link>
                
            </div>
            <div className='blog__aimodel' id='aimodel'>
            <div id='background_ai' className='aimodel'>
                <h1 >The AI-powered Food Recognition Engine</h1>
            </div>
            <div className="background_ai">
                <h2>Background</h2>
                <p > The core component of <Link smooth to="/#home"><u>Plat-de-Joûr</u></Link> is its powerful food-recognition engine. As humans, we can easily identify several types of objects in our surroundings, which include food items. However, making a computer program to distinguish between the cuisine present in images is not a straightforward task. Unlike regular numerical data, it would take an advanced approach to achieve this objective compared to conventional computer algorithms. <Link smooth to="/#home"><u>Plat-de-Joûr</u></Link> uses state-of-the-art artificial intelligence techniques - known as machine learning or deep learning - to perform automatic classification of food items in an image clicked or uploaded by our customers.  After leveraging the most advanced machine learning algorithms and performing rigorous testing, our one-stop food application is able to recognize a variety of different cuisines with high accuracy. </p>
                <img src= {AI} alt="ai"/>
            </div>
            <div id="howitworks" className="hditw__ai">
                <h2 >How does it work?</h2>
                <p > At its core, the food recognition engine is based on a special type of machine learning technique known as deep learning. Just like humans are able to learn new information with the help of multiple examples, machine learning algorithms automatically learn the input to output mapping with the help of a bunch of example images, known as the training set, and then extend this knowledge while performing real-time inference. In our case, we feed our machine learning model images of various dishes such as pizzas and burgers so that our model can learn to recognize these items when our customers use this application. Deep learning is a special category of machine learning algorithms that has been gaining significant traction in the technology industry recently due to its performance and flexibility. Deep learning models are made also known as neural networks that are composed of a fundamental building block known as neurons. Neurons are modeled after the actual biological neurons in the human brain and their function is to take a numerical value as an input, process it, and pass it on to the next neuron for further processing. Thus, layers of these interconnected neurons, which also consist of an input layer and an output layer, make up a neural network or a machine learning model. We design a machine learning model with a customized architecture and train it on a dataset of food items so that it could learn to classify the image into a certain category.</p>
                <img src= {Working} alt="working"/>
            </div>
            <div id="dataset" className="dataset__ai">
                <h2 >The Dataset</h2>
                <p> In order to train our model, we need a huge amount of examples of different food items so that it can accurately learn to categorize the input image during real-time use. For this purpose, we decide to use a very popular machine learning dataset known as the food-101 dataset. This dataset contains 1000 images each for 101 types of different food items. Since the current deployment of our application is intended to be a proof-of-concept, we decided to focus our attention on just recognizing 10 types of food items. Once we scale and commercialize the project, we can dedicate special resources to obtaining more data so that we can include different types of food items. </p>
                <p>The original food-101 dataset can be obtained on the following link: <u> https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/ </u> </p>
                <img  src= {Food} alt="food"/>
            </div>
            <div id="themodel" className="model__ai">
                <h2 >The Model</h2>
                <p > Even within the realm of deep learning, different types of data need to be handled differently. Since we feed images of food as input, we use convolutional neural networks - an algorithm popularly used to learn patterns in images or visual data. Convolutional neural networks or CNNs use a mathematical operation known as convolution which applies a filter or a matrix progressively over the matrix representation of an image, thus condensing the features meaningfully. Finally, the output of the final layer is compared with the expected results and the model used the difference as a feedback to correct itself. </p>
                <img  src= {Model} alt="model"/>
                <p >In order to improve the performance of our model, we use another popular technique for training known as transfer learning. In transfer learning, we use a model which was trained on another data and customize it for training on our specific examples, thus "transfering" information learned in another scenario for our use case. We have used deep learning model known as ResNet50 which was separately trained on the imagenet dataset. The initial layers of the model have already been trained to recognize basic features of an image like edges and shapes. We then add more layers to the model with an output of size 10. The entire model is trained on the training set and evaluated with the help of the test set.</p>
                <img  src= {Result} alt="result"/>
            </div>
            <div id="performance" className="pe_curves">
                <h2 >Performance Evaluation</h2>
                <div className='pe_curves__images'>
                <img  src= {Accuracy} alt="accuracy"/>
                <img  src= {Loss} alt="loss"/>
                </div>
                <div className='pe_curves__images'>
                <img  src= {Precision} alt="precision"/>
                <img  src= {Recall} alt="recall"/>
                </div>
                {/* <img  src= {Confusion_Matrix} alt="confusion_matrix"/> */}
            </div>
            <div id="results" className="result__ai">
                <h2 >Results</h2>
                <p> In around 20 epochs, the accuracy was around 97%</p>
                <div className="result__ai__img">
                <img  src= {Results} alt="results"/>
                </div>
                
            </div>
            </div>
            </div>    
        )
    }
}

