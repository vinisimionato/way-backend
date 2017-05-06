var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
                host:'35.184.59.104',
                user:'admin',
                password:'admin',
                database:'moreway_db'
          });

}

module.exports = function(){
    return createDBConnection;
}
