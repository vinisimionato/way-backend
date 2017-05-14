module.exports = function(app){

	app.post('/login', function(req, res, next){  
		var connection = app.infra.connectionFactory();
   	var usuariosDAO = new app.infra.UsuariosDAO(connection);
    usuario = {
      login : req.body.login,
      senha : req.body.senha
    };

    	usuariosDAO.logar(usuario, function(err, results){
        
    		if (err){
          res.status(500).json({
            status: "Fail",
            message: "Não foi possivel efetuar o Login!!"
          });
    			return next(err);
    		}
        
        if(results[0]){
          res.status(202).json({
            status: "Sucess",
            message: "Usuario autenticado com sucesso!!",
            user: results
          });
        }else {
          res.status(401).json({
            status: "Fail",
            message: "Usuario ou senha invalidos!!",
            user: results 
          });
        }

    	});
    	connection.end();
	});
}