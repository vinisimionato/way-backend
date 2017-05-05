var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'moreway_bd'
          });

}

module.exports = function(){
    return createDBConnection
}
