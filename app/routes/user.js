module.exports = function(app){

	app.post('/login', function(req, res, next){
		var connection = app.infra.connectionFactory();
   	var usersDAO = new app.infra.UsersDAO(connection);
    user = {
      login : req.body.login,
      password : req.body.password
    };

    	usersDAO.login(user, function(err, results){

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
            message: "Usuario ou senha invalidos!!"
          });
        }

    	});
    	connection.end();
	});

	app.post('/register/user',function(req, res, next){

    var user = {
        login:req.body.login,
        password:req.body.password
    };

    console.log(user);
    var connection = app.infra.connectionFactory();
    var usersDAO = new app.infra.UsersDAO(connection);

      usersDAO.register(user, function(err, results){

      if (err){
        res.status(500).json({
          status: "Fail",
          message: "Não foi possivel efetuar o cadastro!!"
        });
        return next(err);
      }

        res.status(201).json({
          status: "Sucess",
          message: "Usuario cadastrado com Sucesso!!",
        });

    });
    connection.end();
  });
}
