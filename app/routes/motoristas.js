module.exports = function(app){

    app.get('/motoristas',function(req,res){
    var connection = app.infra.connectionFactory();
    var motoristasDAO = new app.infra.MotoristasDAO(connection);

      motoristasDAO.lista(function(err,results){
        res.format({
              html: function(){
                //res.send(results);
                res.render("motoristas/lista",{lista:results});
              },
              json: function(){
                  res.json(results);
              }
          });

      });
      connection.end();
  });

  app.get('/motoristas/form',function(req,res){
    res.render('motoristas/form');
  });

  app.post('/motoristas',function(req,res){

    var motorista = req.body;

    var connection = app.infra.connectionFactory();
    var motoristasDAO = new app.infra.MotoristasDAO(connection);
      motoristasDAO.salva(motorista, function(err, results){
        res.redirect('motoristas');
      });
      connection.end();
  });
}
