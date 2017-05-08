var express = require('../config/express')()
var request = require('supertest')(express);

describe('#MotoristasController', function(){

  it('#Cadastro Motorista Valido', function(done){
    request.post('/motoristas')
    .send({nome:"Teste"})
    .expect(302,done);
  });

  it('#Cadastro Motorista Invalido', function(done){
    request.post('/motoristas')
    .send({nome:""})
    .expect(400,done);
  });

  it('#Linstagem JSON Motoristas', function(done){

    request.get('/motoristas')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200,done);
  });

});
