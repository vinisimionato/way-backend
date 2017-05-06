function MotoristasDAO(connection){
  this._connection = connection;
}

MotoristasDAO.prototype.lista = function(callback){
  this._connection.query('select * from motorista', callback);
}

MotoristasDAO.prototype.salva = function(motorista,callback){
  this._connection.query('insert into motorista set ?', motorista, callback);
  /*this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',
  [produto.titulo, produto.preco, produto.descricao], callback); */
}

module.exports = function(){
    return MotoristasDAO;
}
