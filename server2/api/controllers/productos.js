'use strict';

var util = require('util');
var jstoxml = require('../helpers/js2xml');

var Producto = require('../models/producto');

module.exports = {
    'findAllProducto': findAllProducto,
    'addProducto': addProducto,
    'findOneProducto': findOneProducto,
    'updateProducto': updateProducto,
    'removeProducto': removeProducto,
    'findAllProductoInStore': findAllProductoInStore,
    'findOneProductoInStore': findOneProductoInStore
};

function findAllProducto(req, res) {
    Producto.find(function (err, items) {
        if (err)
            res.send(err);

        res.json(items);
    });
}

function findOneProducto(req, res) {
    var productoId = req.swagger.params.productoId.value;

    Producto.findById(productoId, function(err, data) {
        if (err)
            res.send(err);

        res.format({
            'application/json': function() {
                res.json(data);
            },
            'application/xml': function() {
                data = {'Producto': data};
                jstoxml.jsonToXml(JSON.stringify(data), null, function (err2, result) {
                    if (err2)
                        res.send(err2);

                    res.send(result);
                });
                // var all = data.map(function(d) { return '<id>' + d._id + '</id><nombre>' + d.nombre + '</nombre>'; });
                // res.send('<xml>' + all.join('') + '</xml>');
            },
            'text/html': function() {
                var all = data.map(function(d) { return '<p>' + d._id + ': ' + d.nombre + '</p>'; });
                res.send('<html>' + all.join('') + '</html>');
            }
        });

    });
}

function addProducto(req, res) {
    var body = req.swagger.params.body.value;

    var prod = new Producto(body);
    prod.save(function (err) {
        if (err)
            res.send(err);

        res.json(prod);
    });
}

function updateProducto(req, res) {
    var productoId = req.swagger.params.productoId.value;
    var body = req.swagger.params.body.value;

    Producto.findById(productoId, function(err, prod) {
        if (err)
            res.send(err);

        prod.nombre = body.nombre;  // update the bears info

        // save the bear
        prod.save(function(err) {
            if (err)
                res.send(err);

            res.json(prod);
        });
    });
}

function removeProducto(req, res) {
    var productoId = req.swagger.params.productoId.value;

    Producto.remove({
        _id: productoId
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ id: productoId });
    });
}

function findAllProductoInStore(req, res) {
    res.send();
}

function findOneProductoInStore(req, res) {
    res.send();
}