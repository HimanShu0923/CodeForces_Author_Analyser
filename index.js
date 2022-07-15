var express = require('express');
var port = 8080;
var dir = __dirname;
const hostname = "0.0.0.0"
var app = express();
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'));
app.use('/', require('./routes'));

app.listen(port, hostname, function(err) {
    console.log('server is running');
    // axios.get('http://localhost:8080/createDatabase');
    // setInterval(function() {
    //     axios.get('http://localhost:8080/createDatabase');
    // }, 10);
    if (err) {
        console.log(err);
    }
});