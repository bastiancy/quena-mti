'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Establecimiento = require('../models/establecimiento');

module.exports.findAllEstablecimiento = function(req, res, next) {
    Establecimiento.find(function (err, data) {
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
};

module.exports.findOneEstablecimiento = function(req, res, next) {
    let establecimientoId = req.swagger.params.establecimientoId.value;

    Establecimiento.findById(establecimientoId, function(err, data) {
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
};

module.exports.addEstablecimiento = function(req, res, next) {
    let body = req.swagger.params.body.value;

    let item = new Establecimiento();
    item.nombre = body.nombre;
    item.descripcion = body.descripcion;

    item.save(function (err) {
        if (err) {
            return next(new Error(err));
        }

        let result = Establecimiento.toJson(item);
        res.setHeader('Content-Type', 'application/json');
        res.end(result);
    });
};

module.exports.updateEstablecimiento = function(req, res) {
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

module.exports.removeEstablecimiento = function(req, res) {
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