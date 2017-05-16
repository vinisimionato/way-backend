var express = require('express');
var consign = require('consign');

var expressValidator = require('express-validator');

var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(expressValidator());

    consign()
    .include('routes')
    .then('persistence')
    .into(app);

    return app;
}
