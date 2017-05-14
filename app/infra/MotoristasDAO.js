function MotoristasDAO(connection){
  this._connection = connection;
}

MotoristasDAO.prototype.lista = function(callback){
  this._connection.query('select * from usuarios', callback);
}

MotoristasDAO.prototype.salva = function(motorista,callback){
  //quando as colunas do banco são iguais ao JSON que recebemos no request
  //podemos usar o SET ? e passar ele para o metodo
  this._connection.query('insert into motorista set ?', motorista, callback);

  //jeito alternativo para gravar
  // quando colunas são diferentes dos atributos do JSON
  /*this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',
  [produto.titulo, produto.preco, produto.descricao], callback); */
}

module.exports = function(){
    return MotoristasDAO;
}
