'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Producto = require('../models/producto');

module.exports.findAllProducto = function(req, res, next) {
    Producto.find(function (err, data) {
        let accept = accepts(req);
        let result = null;

        if (err) {
            return next(new Error(err));
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                result = Producto.toXml(data, false);
                res.setHeader('Content-Type', 'application/xml');
                res.end(result);
                break;
            case 'html':
                result = Producto.toHtml(data, false);
                res.setHeader('Content-Type', 'text/html');
                res.end(result);
                break;
            default:
                // fallback to json
                result = Producto.toJson(data);
                res.setHeader('Content-Type', 'application/json');
                res.end(result);
                break;
        }
    });
};

module.exports.findOneProducto = function(req, res, next) {
    let productoId = req.swagger.params.productoId.value;

    Producto.findById(productoId, function(err, data) {
        let accept = accepts(req);
        let result = null;

        if (err) {
            return next(new Error(err));
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                result = Producto.toXml(data, false);
                res.setHeader('Content-Type', 'application/xml');
                res.end(result);
                break;
            case 'html':
                result = Producto.toHtml(data, false);
                res.setHeader('Content-Type', 'text/html');
                res.end(result);
                break;
            default:
                // fallback to json
                result = Producto.toJson(data);
                res.setHeader('Content-Type', 'application/json');
                res.end(result);
                break;
        }
    });
};

module.exports.addProducto = function(req, res, next) {
    let body = req.swagger.params.body.value;

    let item = new Producto();
    item.nombre = body.nombre;
    item.descripcion = body.descripcion;

    item.save(function (err) {
        if (err) {
            return next(new Error(err));
        }

        let result = Producto.toJson(item);
        res.setHeader('Content-Type', 'application/json');
        res.end(result);
    });
};

module.exports.updateProducto = function(req, res) {
    var productoId = req.swagger.params.productoId.value;
    var body = req.swagger.params.body.value;

    Producto.findById(productoId, function(err, item) {
        if (err) {
            return next(new Error(err));
        }

        item.nombre = body.nombre;
        item.descripcion = body.descripcion;

        // save the bear
        item.save(function(err) {
            if (err) {
                return next(new Error(err));
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify('updated id: ' + productoId));
        });
    });
};

module.exports.removeProducto = function(req, res) {
    var productoId = req.swagger.params.productoId.value;

    Producto.remove({
        _id: productoId
    }, function(err, item) {
        if (err) {
            return next(new Error(err));
        }

        let result = Producto.toJson(item);
        res.setHeader('Content-Type', 'application/json');
        res.end(result);
    });
};

module.exports.findAllProductoInStore = function(req, res) {
    res.send(new Error('findAllProductoInStore not implemented!'));
};

module.exports.findOneProductoInStore = function(req, res) {
    res.send(new Error('findOneProductoInStore not implemented!'));
};