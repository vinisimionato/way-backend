//modolo de conexao com o banco
var mysql = require('mysql');
const config = require('../config');

function createDBConnection(){
  //conexao com o banco do GAE-prod
  const options = {
    user: config['MYSQL_USER'],
    password: config['MYSQL_PASSWORD'],
    database: 'moreway_db'
  };

  if (config['INSTANCE_CONNECTION_NAME'] && process.env.NODE_ENV === 'production') {
    options.socketPath = `/cloudsql/${config['INSTANCE_CONNECTION_NAME']}`;
    console.log(options);

    return mysql.createConnection(options);
  }else{

     console.log("Conectando com o banco - dev");
     return mysql.createConnection({
                 host:'35.184.59.104',
                 user:'admin',
                 password:'admin',
                 database:'moreway_db'});
    }
}

module.exports = function(){
    return createDBConnection;
}
