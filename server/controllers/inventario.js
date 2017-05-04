'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Establecimiento = require('../models/establecimiento');
const Inventario = require('../models/inventario');
const Producto = require('../models/producto');

module.exports.findAllInventarioInEstablecimiento = function(req, res, next) {
    let establecimientoId = req.swagger.params.establecimientoId.value;
    let establecimiento = null;

    Promise.all([
        Establecimiento.findById(establecimientoId).then(result => establecimiento = result)
    ]).then(function () {

        Inventario.find({'establecimiento': establecimiento}, function (err, data) {
            let accept = accepts(req);
            let result = null;

            if (err) {
                return next(new Error(err));
            }

            switch(accept.type(['json', 'xml', 'html'])) {
                case 'xml':
                    result = Inventario.toXml(data, false);
                    res.setHeader('Content-Type', 'application/xml');
                    res.end(result);
                    break;
                case 'html':
                    result = Inventario.toHtml(data, false);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(result);
                    break;
                default:
                    // fallback to json
                    result = Inventario.toJson(data);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(result);
                    break;
            }
        });
    }, function (err) {
        return next(new Error(err));
    });
};

module.exports.findOneInventarioInEstablecimiento = function(req, res, next) {
    let establecimientoId = req.swagger.params.establecimientoId.value;
    let establecimiento = null;

    Promise.all([
        Establecimiento.findById(establecimientoId).then(result => establecimiento = result)
    ]).then(function () {
        Inventario.findBy({'establecimiento': establecimiento}, function(err, data) {
            let accept = accepts(req);
            let result = null;

            if (err) {
                return next(new Error(err));
            }

            switch(accept.type(['json', 'xml', 'html'])) {
                case 'xml':
                    result = Establecimiento.toXml(data, false);
                    res.setHeader('Content-Type', 'application/xml');
                    res.end(result);
                    break;
                case 'html':
                    result = Establecimiento.toHtml(data, false);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(result);
                    break;
                default:
                    // fallback to json
                    result = Establecimiento.toJson(data);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(result);
                    break;
            }
        });
    }, function (err) {
        return next(new Error(err));
    });
};

module.exports.addInventarioInEstablecimiento = function(req, res, next) {
    let body = req.swagger.params.body.value;
    let producto = null;
    let establecimiento = null;

    Promise.all([
        Establecimiento.findById(body.establecimientoId).then(result => establecimiento = result),
        Producto.findById(body.productoId).then(result => producto = result),
    ]).then(function () {

        let item = new Inventario();
        item.establecimiento = establecimiento;
        item.producto = producto;
        item.precio = {'moneda': 'CLP', 'valor': '10000'};
        item.estado = 'ingreso';

        item.save(function (err) {
            if (err) {
                return next(new Error(err));
            }

            let result = Inventario.toJson(item);
            res.setHeader('Content-Type', 'application/json');
            res.end(result);
        });

    }, function (err) {
        return next(new Error(err));
    });

};

module.exports.updateInventarioInEstablecimiento = function(req, res) {
    var establecimientoId = req.swagger.params.establecimientoId.value;
    var body = req.swagger.params.body.value;

    Establecimiento.findById(establecimientoId, function(err, item) {
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
            res.end(JSON.stringify('updated id: ' + establecimientoId));
        });
    });
};

module.exports.renoveInventarioInEstablecimiento = function(req, res) {
    var establecimientoId = req.swagger.params.establecimientoId.value;

    Establecimiento.remove({
        _id: establecimientoId
    }, function(err, item) {
        if (err) {
            return next(new Error(err));
        }

        let result = Establecimiento.toJson(item);
        res.setHeader('Content-Type', 'application/json');
        res.end(result);
    });
};