var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LivroSchema = new Schema({
    titulo: String,
    genero: String,
    descricao: String,
    ano: String,
    status: String,
    autor: String,
    reservado: String
});

module.exports = mongoose.model('Livro', LivroSchema);

