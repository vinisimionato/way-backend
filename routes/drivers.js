module.exports = function(app) {

   app.get("/drivers",function(req, res, next) {
     var connection = app.persistence.connectionFactory();
     var driverDAO = new app.persistence.DriverDAO(connection);

     //driver.status = 'waiting confirmation';
     //driver.insertDate = new Date;
     driverDAO.list(function(exception, result){
       if(exception){
         console.log("Error");
         console.log(exception);
         return next(exception);
       }
       console.log(result);
       res.status(200).json(result);
     });
  });

    app.post("/drivers/register",function(req, res, next) {
       var driver = req.body;

       req.assert("name", "Name is required.").notEmpty();
       req.assert("birthDate", "Birth Date is required.").notEmpty();
       req.assert("password", "Password is required.").notEmpty();
       req.assert("confirmPassword", "Confirm password is required.").notEmpty();
       req.assert("cnh", "CNH is required.").notEmpty();
       req.assert("email", "E-mail is required.").notEmpty();
       req.assert("phone", "Phone is required.").notEmpty();
       req.assert("phone", "Phone must contain 11 digits.").len(11,11);

       var errors = req.validationErrors();

       if (errors){
          console.log("Found validation errors");
          console.log(errors[0]);
          res.status(400).send(errors[0]);
          return;
      }

      var connection = app.persistence.connectionFactory();
      var driverDAO = new app.persistence.DriverDAO(connection);

      //driver.status = 'Waiting confirmation';
      driver.status = 'Driver confirmed';
      driver.insertDate = new Date;

      driverDAO.insert(driver, function(exception, result){
        if(exception){
          return next(exception);
        }
        console.log('Registered driver: ' + JSON.stringify(result));
        driver.id = result.insertId;
        res.status(201).json(driver);
      });
  });

  app.post("/login", function(req, res, next){
    var driver = req.body;

    req.assert("email", "Email is required.").notEmpty();
    req.assert("password", "Password is required.").notEmpty();

    var errors = req.validationErrors();

    if (errors){
        console.log("Found validation errors");
        console.log(errors[0]);
        res.status(400).send(errors[0]);
        return;
    }

    var connection = app.persistence.connectionFactory();
    var driverDAO = new app.persistence.DriverDAO(connection);

    driverDAO.login(driver, function(exception, result){
      if(exception){
        return next(exception);
      }

      console.log(' ' + JSON.stringify(result[0]));

      if(result.length == 0){
        res.status(401).send(result[0]);
      }else{

      console.log('Logged Successfully: ' + JSON.stringify(result));
      res.status(200).json(result[0]);
      }
    });

  });

  app.put('/drivers/register/:id', function(req, res, next){
    var driver = {};
    var id =req.params.id;

    driver.id = id;
    driver.status = "Confirmed"

    var connection = app.persistence.connectionFactory();
    var driverDAO = new app.persistence.DriverDAO(connection);

    driverDAO.confirm(driver, function(exception, result){
      if(exception){
        res.status(500).send(exception);
      }

      console.log('Driver confirmed');
      res.send(driver);

    });
  });
}
