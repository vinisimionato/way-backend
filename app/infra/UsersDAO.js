function UsersDAO(connection){
  this._connection = connection;
}

UsersDAO.prototype.busca = function(callback){
	console.log('consulta no banco...')
  	this._connection.query('select * from users', callback);
}

UsersDAO.prototype.login = function(user,callback){
	console.log('Buscando usuario..')
  	this._connection.query('select * from users where login = ? and password = ?'
  		,[user.login, user.password], callback);
}


UsersDAO.prototype.register = function(user,callback){
  this._connection.query('insert into users set ?', user, callback);
}

module.exports = function(){
    return UsersDAO;
}
