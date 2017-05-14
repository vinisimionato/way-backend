function UsuariosDAO(connection){
  this._connection = connection;
}

UsuariosDAO.prototype.busca = function(callback){
	console.log('consulta no banco...')
  	this._connection.query('select * from usuarios', callback);
}

UsuariosDAO.prototype.logar = function(usuario,callback){
	console.log('Buscando usuario..')
  	this._connection.query('select * from usuarios where login = ? and senha = ?'
  		,[usuario.login, usuario.senha], callback);
}

module.exports = function(){
    return UsuariosDAO;
}
