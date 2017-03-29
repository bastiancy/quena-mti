var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategoriaSchema   = new Schema({
    nombre: {type: String, required: true},
    descripcion: String,
    categoriaPadre: {type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}
});

module.exports = mongoose.model('Categoria', CategoriaSchema);