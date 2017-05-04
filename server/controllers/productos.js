'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Establecimiento = require('../models/establecimiento');

module.exports.findAllProducto = function(req, res, next) {
    let categoriaId = (req.swagger.params.categoria ? req.swagger.params.categoria.value : null);
    let categoria = null;
    let establecimientoId = (req.swagger.params.establecimiento ? req.swagger.params.establecimiento.value : null);
    let establecimiento = null;

    Promise.all([
        Establecimiento.findById(establecimientoId).then(result => establecimiento = result),
        Categoria.findById(categoriaId).then(result => categoria = result),
    ]).then(function () {

        let params = {};
        if (categoria) {
            params.categoria = categoria;
        }
        if (establecimiento) {
            params.establecimiento = establecimiento;
        }

        Producto.find(params, function (err, data) {
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
    }, function (err) {
        return next(new Error(err));
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
    item.origen = body.origen;
    item.modelo = body.modelo;
    item.marca = body.marca;
    item.caracteristicas = (body.caracteristicas && body.caracteristicas.length > 0) ? body.caracteristicas : [];
    item.imagenes = (body.imagenes && body.imagenes.length > 0) ? body.imagenes : [];

    // if (body.caracteristicas && body.caracteristicas.length > 0) {
    //     for (let i = 0; i < body.caracteristicas.length; i++) {
    //         if (body.caracteristicas[i]) {
    //             item.caracteristicas.push({'nombre': body.caracteristicas[i].nombre, 'valor': body.caracteristicas[i].valor});
    //         }
    //     }
    // }
    //
    // if (body.imagenes && body.imagenes.length > 0) {
    //     for (let i = 0; i < body.imagenes.length; i++) {
    //         if (body.imagenes[i] && body.imagenes[i].url) {
    //             item.imagenes.push({'url': body.imagenes[i].url});
    //         }
    //     }
    // }

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