var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstablecimientoSchema   = new Schema({
    nombre: {type: String, required: true},
    direccion: {type: mongoose.Schema.Types.ObjectId, ref: 'Direccion'}
});

module.exports = mongoose.model('Establecimiento', EstablecimientoSchema);