var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 8080,
    path: '/motoristas',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('' +body);
    });
});
