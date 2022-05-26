const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/getData', (req,res) => {
    request('https://lit-fjord-92060.herokuapp.com/', function (error, response) {
        if (!error && response.statusCode == 200) {
            res.json(response);
        }
    })
    console.log('Connected to Server!');
});

app.post('/getMealDb', (req, res) => {
    parameter = req.body.s
    request('https://www.themealdb.com/api/json/v1/1/search.php?s='+parameter, function (error, response) {
        if (!error && response.statusCode == 200) {
            res.json(response);
        }
    })
});

app.post('/getRestaurants', (req, res) => {
    latitude = req.body.latitude
    longitude = req.body.longitude
    location = latitude+','+longitude
    query = req.body.foodImage + "+near+me"
    public_api_key = "AIzaSyAsQK6EaaZotrYhVDQ-FVhcs3y-OD1NhgQ"
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+'&location='+location+'&radius=2000&region=us&type=restaurant&key='+public_api_key, function(error, response){
        if (!error && response.statusCode == 200) {
            res.json(response);
        }
    })
});

app.post('/predict', (req, res) => {
    jsonData = req.body
    request.post({url: 'https://lit-fjord-92060.herokuapp.com/predict', json:jsonData}, function (error, response) {
        if (!error && response.statusCode == 200) {
            res.json(response);
        }
    })
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);