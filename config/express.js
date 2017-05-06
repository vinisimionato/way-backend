//EXPRESS
//  modulo express padrão do node.js
//EXPRESS-LOAD
//  modulo que realiza o carregamento automático das rotas.
//  com isso não é necessario carregar os modulos em outros pontos do codigo
//BODY_PARSER
//  conversor de JSON
//  serve para coverter os valor de uma requisição para JSON
//EXPRESS-VALIDATOR
//  modulo de validação

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    //configura o formato de paginas usadas para EJS
    app.set('view engine', 'ejs');
    //patch de onde o NODE.js irá procurar as telas/views
    app.set('views', './app/views');

    //o metodo USE serve para adicionar modulos no server
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    //carrega os modulos automaticamente para o server
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
