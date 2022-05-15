const express = require('express');
const request = require('request');
const cors = require('cors');
var router = express.Router();
const app = express();
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/getData', (req,res) => {
    request('https://lit-fjord-92060.herokuapp.com/', function (error, response) {
        if (!error && response.statusCode == 200) {
            res.json(response);
        }
    })
    console.log('Sent list of items');
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);