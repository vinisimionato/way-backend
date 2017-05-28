var express = require('../config/express')();
var request = require('supertest')(express);

describe('Route: /drivers',function(){
    it('#method - List',function(done){
        request.get('/drivers')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });
    it('#Register new Driver with invalid data',function(done){
    request.post('/drivers/register')
    .send({name:""})
    .expect(400,done);

	});	

    let driver = {
        "name":"Teste",
        "birthDate":"12/10/2000",
        "email":"teste@gmail.com",
        "password":"321456",
        "confirmPassword":"321456",
        "cnh":"43556443",
        "phone"":21223443231"
	};

	it('#Register new Driver with valid data',function(done){
    request.post('/drivers/register')
    .send(driver)
    .expect(201,done);

	});	
});