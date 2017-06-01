function RouteDAO(connection){
	this._connection = connection;
}

RouteDAO.prototype.insert = function(route, callback){
	this._connection.query('insert into routes set ?'
		, route, callback);
}

RouteDAO.prototype.list = function(callback) {
    this._connection.query('select * from routes'
    	,callback);
}

RouteDAO.prototype.listByDriver = function(driverId, callback) {
    this._connection.query('select * from routes where driver_id = ?'
    	,driverId,callback);
}

module.exports = function(){
	return RouteDAO;
}