function DriversDAO(connection){
  this._connection = connection;
}

DriversDAO.prototype.lista = function(callback){
  this._connection.query('select * from usuarios', callback);
}

DriversDAO.prototype.register = function(driver,callback){
  this._connection.query('insert into drivers set ?', driver, callback);
  /*this._connection.query('insert into driver (campo1,campo2,campo3) values (?, ?, ?)',
  [driver.campo1, driver.campo2, driver.campos3 ], callback); */
}

module.exports = function(){
    return DriversDAO;
}
