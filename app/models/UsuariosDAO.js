function UsuariosDAO(connection){
  this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
  this._connection.open(function(err, mongoclinet){
    mongoclinet.collection("usuarios",function(err, collection){
      collection.insert(usuario);

      mongoclinet.close();
    });
  });
}

module.exports = function(){
  return UsuariosDAO;
}