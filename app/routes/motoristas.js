var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){
    app.get('/motoristas',function(req,res){
/*    var connection = connectionFactory();
      connection.query('select * from motorista',function(err,results){
          //mostra JSON
          //res.send(results);
          res.render('produtos/lista',{lista:results})

      });

      connection.end();*/
      res.render('motoristas/lista');
  });


}
