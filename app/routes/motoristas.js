//motoristasController
module.exports = function(app){

    //rota para acessar a pagina de lista / receber JSON com os motoistas
    app.get('/motoristas',function(req,res, next){
    //instanciando os objetos de conexao
    var connection = app.infra.connectionFactory();
    var motoristasDAO = new app.infra.MotoristasDAO(connection);

      motoristasDAO.lista(function(err,results){

        if(err){
          return next(err);
        }

        //metodo format do response permiti definir o tipo de retorno
        //de acordo com a solicitação enviada
        res.format({
              //solicitação "text/html" - cliente web
              html: function(){
                //res.send(results);
                res.render("motoristas/lista",{lista:results});
              },
              //solicitação "application/json" - cliente IOS
              json: function(){
                  res.json(results);
              }
          });

      });
      connection.end();
  });

  //rota para acessar a pagina de cadastro - não utiliza no aplicativo
  //nesse projeto sera usado apenas para teste
  app.get('/motoristas/form',function(req,res){
    res.render('motoristas/form',{errosValidacao: {}, motorista: {}});
  });

  //rota para registrar motoristas
  app.post('/motoristas',function(req,res){

    //dados da pagina - apenas para teste
    var motorista = req.body;

    var connection = app.infra.connectionFactory();
    var motoristasDAO = new app.infra.MotoristasDAO(connection);

    //bloco para validação de dados vindos por JSON ou por tela
    var validaNome = req.assert('nome', 'O Nome é obrigatorio').notEmpty();

    var erros = req.validationErrors();
    if(erros){
      res.format({
                html: function(){
                    res.status(400).render("motoristas/form",{errosValidacao:erros,motorista:motorista});
                },
                json: function(){
                    res.status(400).send(errors);
                }
            });
            return;
    };

      motoristasDAO.salva(motorista, function(err, results){
        res.redirect('motoristas');
      });
      connection.end();
  });
}
