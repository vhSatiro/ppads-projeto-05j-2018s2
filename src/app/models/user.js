var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nome: String,
    email: String,
    usuario: String,
    senha: String,
    admin: String
});

module.exports = mongoose.model('User', UserSchema);

