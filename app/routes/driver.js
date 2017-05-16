module.exports = function(app){

    app.get('/drivers',function(req,res, next){
    var connection = app.infra.connectionFactory();
    var driversDAO = new app.infra.DriversDAO(connection);

      driversDAO.list(function(err,results){

        if(err){
          return next(err);
        }

        res.json(results);

      });
      connection.end();
  });

  app.post('/register/driver',function(req, res, next){

    var driver = {
        name:req.body.name,
        birthDate:req.body.birthDate,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        cnh:req.body.cnh,
        phone:req.body.phone
    };

    console.log(driver);
    var connection = app.infra.connectionFactory();
    var driversDAO = new app.infra.DriversDAO(connection);

      driversDAO.register(driver, function(err, results){

      if (err){
        res.status(500).json({
          status: "Fail",
          message: "Não foi possivel efetuar o cadastro!!"
        });
        return next(err);
      }

        res.status(201).json({
          status: "Sucess",
          message: "Motorista cadastrado com Sucesso!!",
        });

    });
    connection.end();
  });
}
