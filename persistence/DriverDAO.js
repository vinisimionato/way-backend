function DriverDAO(connection) {
   this._connection = connection;
 }

 DriverDAO.prototype.insert = function(driver,callback) {
    this._connection.query('INSERT INTO drivers SET ?', driver, callback);
 }

 DriverDAO.prototype.list = function(callback) {
    this._connection.query('select * from drivers',callback);
 }

 DriverDAO.prototype.findById = function (id,callback) {
    this._connection.query("select * from drivers where id = ?",[id],callback);
 }

 DriverDAO.prototype.confirm = function (driver,callback) {
   console.log(driver);
    this._connection.query("update drivers set status = ? where id = ?",[driver.status, driver.id],callback);
 }

 module.exports = function(){
    return DriverDAO;
 };
