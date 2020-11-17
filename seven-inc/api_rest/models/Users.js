var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var funcSchema = new Schema({
  name: {type: String, required: true},
  bornDate: {type: Date, required: true},
  salary: {type: Number, required: true},
  position: {type: String, required: true},
})

module.exports = mongoose.model('Funcionario', funcSchema);
