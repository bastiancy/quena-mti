var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

    var ProductoSchema = mongoose.Schema({
        name: String
    });

    var Producto = mongoose.model('Producto', ProductoSchema);

    var p = new Producto({ name: 'Guitarra' });

    console.log(p.name);

});
