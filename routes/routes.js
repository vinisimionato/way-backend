module.exports = function(app) {


   app.get("/routes/:driverId",function(req, res, next) {
     var connection = app.persistence.connectionFactory();
     var routeDAO = new app.persistence.RouteDAO(connection);

     var driverId = req.params.driverId;

     routeDAO.listByDriver(driverId, function(exception, result){
       if(exception){
         console.log("Error");
         console.log(exception);
         return next(exception);
       }
       console.log(result);
       res.status(200).json(result);
     });
  });

    app.post("/routes/register",function(req, res, next) {
       var route = req.body;

       req.assert("name", "Name is required.").notEmpty();
       req.assert("driver_id", "Driver id is required.").notEmpty();
      
       var errors = req.validationErrors();

       if (errors){
          console.log("Found validation errors");
          console.log(errors[0]);
          res.status(400).send(errors[0]);
          return;
      }

      var connection = app.persistence.connectionFactory();
      var routeDAO = new app.persistence.RouteDAO(connection);

      routeDAO.insert(route, function(exception, result){
        if(exception){
          return next(exception);
        }
        console.log('Registered route: ' + JSON.stringify(result));
        res.status(201).json(route);
      });
  });
}