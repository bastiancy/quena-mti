'use strict';

var util = require('util');
var accepts = require('accepts');
var jstoxml = require('../helpers/js2xml');
var Producto = require('../models/producto');

module.exports.findAllProducto = function(req, res, next) {
    Producto.find(function (err, items) {
        var params = req.swagger.params;
        var accept = accepts(req);

        if (err) {
            next(err);
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                res.setHeader('Content-Type', 'text/html');
                res.write('<b>hello, world!</b>');
                break;
            case 'html':
                res.setHeader('Content-Type', 'text/html');
                res.write('<b>hello, world!</b>');
                break;
            default:
                // fallback to json
                res.setHeader('Content-Type', 'application/json');
                res.write(JSON.stringify(items, null, 2));
                break;
        }

        res.end();
    });
};

module.exports.findOneProducto = function(req, res, next) {
    var productoId = req.swagger.params.productoId.value;

    Producto.findById(productoId, function(err, data) {
        var params = req.swagger.params;
        var accept = accepts(req);

        if (err) {
            next(err);
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                data = {'Producto': data};
                jstoxml.jsonToXml(JSON.stringify(data), null, function (err2, result) {
                    if (err2) {
                        next(err2);
                    }

                    res.write(result);
                });
                break;
            case 'html':
                var all = data.map(function(d) { return '<p>' + d._id + ': ' + d.nombre + '</p>'; });
                res.write('<html>' + all.join('') + '</html>');
                break;
            default:
                // fallback to json
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data, null, 2));
                break;
        }

        res.end();
    });
};

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