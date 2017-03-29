var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DireccionSchema   = new Schema({
    pais: {type: String, required: true},
    region: String,
    ciudad: {type: String, required: true},
    descripcion: {type: String, required: true},
    zipcode: String,
    geo_lat: Number,
    geo_lon: Number
});

module.exports = mongoose.model('Direccion', DireccionSchema);