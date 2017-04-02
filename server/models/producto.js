var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductoSchema   = new Schema({
    codigo_tipo: String,
    codigo_valor: String,
    nombre: {type: String, required: true},
    marca: String,
    modelo: String,
    descripcion: String,
    origen: String,
    categorias: [{type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}],
    caracteristicas: [{nombre: String, valor: String}]
});

module.exports = mongoose.model('Producto', ProductoSchema);