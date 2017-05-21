'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Establecimiento = require('../models/establecimiento');
const Inventario = require('../models/inventario');

module.exports.findAllProducto = function(req, res, next) {
    let categoria = (req.swagger.params.categoria ? req.swagger.params.categoria.value : null);

    // Promise.all([
    //     Establecimiento.findById(establecimientoId).then(result => establecimiento = result),
    //     Categoria.findById(categoriaId).then(result => categoria = result),
    // ]).then(function () {

        let params = {};
        if (categoria) {
            params.categoria = categoria;
        }
        // if (establecimientoId) {
        //     params.establecimiento = establecimientoId;
        // }

        Producto.find(params)
        .populate('categoria')
        .exec(function (err, data) {
            let accept = accepts(req);
            let result = null;

            if (err) {
                return next(new Error(err));
            }

            switch(accept.type(['json', 'xml', 'html', 'application/rdf+xml'])) {
                case 'xml':
                    result = Producto.toXml(data, false);
                    res.setHeader('Content-Type', 'application/xml');
                    res.end(result);
                    break;
                case 'application/rdf+xml':
                    result = Producto.toRdf(data, false);
                    res.setHeader('Content-Type', 'application/rdf+xml');
                    res.end(result);
                    break;
                case 'html':
                    result = Producto.toHtml(data, false);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(result);
                    break;
                default:
                    // fallback to json
                    result = JSON.stringify(data);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(result);
                    break;
            }
        });
    // }, function (err) {
    //     return next(new Error(err));
    // });
};

module.exports.findOneProducto = function(req, res, next) {
    let productoId = req.swagger.params.productoId.value;

    Producto.findById(productoId)
    .populate('categoria')
    .exec(function (err, data) {
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
                result = JSON.stringify(data);
                res.setHeader('Content-Type', 'application/json');
                res.end(result);
                break;
        }
    });
};

module.exports.addProducto = function(req, res, next) {
    let body = req.swagger.params.body.value;
    let categoria = null;

    if (body.categoria) {
        categoria = (body.categoria._id ? body.categoria._id : body.categoria);
    }

    Promise.all([
        Categoria.findById(categoria).then(result => categoria = result),
    ]).then(function () {

        let item = new Producto();
        item.nombre = body.nombre;
        item.descripcion = body.descripcion;
        item.origen = body.origen;
        item.modelo = body.modelo;
        item.marca = body.marca;
        item.caracteristicas = (body.caracteristicas && body.caracteristicas.length > 0) ? body.caracteristicas : [];
        item.imagenes = (body.imagenes && body.imagenes.length > 0) ? body.imagenes : [];

        if (categoria) {
            item.categoria = categoria;
        }

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

            let result = JSON.stringify(item);
            res.setHeader('Content-Type', 'application/json');
            res.end(result);
        });

    }, function (err) {
        return next(new Error(err));
    });
};

module.exports.updateProducto = function(req, res) {
    let productoId = req.swagger.params.productoId.value;
    let body = req.swagger.params.body.value;
    let producto = null;
    let categoria = null;

    if (body.categoria) {
        categoria = (body.categoria._id ? body.categoria._id : body.categoria);
    }

    Promise.all([
        Producto.findById(productoId).then(result => producto = result),
        Categoria.findById(categoria).then(result => categoria = result),
    ]).then(function () {

        producto.nombre = body.nombre;
        producto.descripcion = body.descripcion;

        if (categoria) {
            producto.categoria = categoria;
        }

        // save the bear
        producto.save(function(err) {
            if (err) {
                return next(new Error(err));
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify('updated id: ' + productoId));
        });

    }, function (err) {
        return next(new Error(err));
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

module.exports.findAllProductoInEstablecimiento = function(req, res) {
    let establecimientoId = (req.swagger.params.establecimientoId ? req.swagger.params.establecimientoId.value : null);

    if (!establecimientoId) {
        return next(new Error('Establecimiento no existe'));
    }

    Inventario.find({establecimiento: establecimientoId})
        .exec(function (err, data) {
            let productos = [];

            if (err) {
                return next(new Error(err));
            }

            for (let item of data) {
                if (item.producto) {
                    productos.push(item.producto._id ? item.producto._id : item.producto);
                }
            }

            Producto.find({'_id': {'$in': productos}})
                .populate('categoria')
                .exec(function (err2, data2) {
                    let accept = accepts(req);
                    let result = null;

                    if (err2) {
                        return next(new Error(err2));
                    }

                    switch(accept.type(['json', 'xml', 'html'])) {
                        case 'xml':
                            result = Producto.toXml(data2, false);
                            res.setHeader('Content-Type', 'application/xml');
                            res.end(result);
                            break;
                        case 'html':
                            result = Producto.toHtml(data2, false);
                            res.setHeader('Content-Type', 'text/html');
                            res.end(result);
                            break;
                        default:
                            // fallback to json
                            result = JSON.stringify(data2);
                            res.setHeader('Content-Type', 'application/json');
                            res.end(result);
                            break;
                    }
                });
        });
};
