//modolo de conexao com o banco
var mysql = require('mysql');

function createDBConnection(){
    //conexao com o banco do GAE
    return mysql.createConnection({
                host:'35.184.59.104',
                user:'admin',
                password:'admin',
                database:'moreway_db'
          });
    //conexao local para testes
    /*return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'moreway_db'
          });*/
}

module.exports = function(){
    return createDBConnection;
}
