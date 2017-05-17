//modolo de conexao com o banco
var mysql = require('mysql');

function createDBConnection(){
  //conexao com o banco do GAE
  if(process.env.NODE_ENV) {
    console.log("Acessando banco do GAE");
    return mysql.createConnection({
                host:'35.184.59.104',
                user:'admin',
                password:'admin',
                database:'moreway_db'
          });
  }
  //conexao local para dev
  if(!process.env.NODE_ENV) {
    console.log('carregando banco..')
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'moreway_bd'
          });
  }
  //conexao local para testes
  if(!process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'moreway_bd_test'
        });
    }
}

module.exports = function(){
    return createDBConnection;
}
