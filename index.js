const express = require('express');
const request = require('request');
const base64 = require('base-64');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const { json, response } = require('express');
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

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);