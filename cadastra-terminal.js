var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 8080,
    path: '/motoristas',
    method: 'post'.
    headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
    }
};

var client = http.request(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('' +body);
    });
});

var motorista  = {
  nome : 'teste json terminal'
};

client.end(JSON.stringify(motorista));
