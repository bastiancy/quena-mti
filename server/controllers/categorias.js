'use strict';

const util = require('util');
const accepts = require('accepts');
const jstoxml = require('../helpers/js2xml');
const Categoria = require('../models/categoria');

module.exports.findAllCategoria = function(req, res, next) {
    Categoria.find(function (err, data) {
        let accept = accepts(req);
        let result = null;

        if (err) {
            return next(new Error(err));
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                result = Categoria.toXml(data, false);
                res.setHeader('Content-Type', 'application/xml');
                res.end(result);
                break;
            case 'html':
                result = Categoria.toHtml(data, false);
                res.setHeader('Content-Type', 'text/html');
                res.end(result);
                break;
            default:
                // fallback to json
                result = Categoria.toJson(data);
                res.setHeader('Content-Type', 'application/json');
                res.end(result);
                break;
        }
    });
};

module.exports.findOneCategoria = function(req, res, next) {
    let categoriaId = req.swagger.params.categoriaId.value;

    Categoria.findById(categoriaId, function(err, data) {
        let accept = accepts(req);
        let result = null;

        if (err) {
            return next(new Error(err));
        }

        switch(accept.type(['json', 'xml', 'html'])) {
            case 'xml':
                result = Categoria.toXml(data, false);
                res.setHeader('Content-Type', 'application/xml');
                res.end(result);
                break;
            case 'html':
                result = Categoria.toHtml(data, false);
                res.setHeader('Content-Type', 'text/html');
                res.end(result);
                break;
            default:
                // fallback to json
                result = Categoria.toJson(data);
                res.setHeader('Content-Type', 'application/json');
                res.end(result);
                break;
        }
    });
};

module.exports.addCategoria = function(req, res, next) {
    let body = req.swagger.params.body.value;

    let item = new Categoria(body);
    item.save(function (err) {
        if (err) {
            return next(new Error(err));
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify('created!', null, 2));
    });
};

function updateCategoria(req, res) {
    var categoriaId = req.swagger.params.categoriaId.value;
    var body = req.swagger.params.body.value;

    Categoria.findById(categoriaId, function(err, item) {
        if (err)
            res.send(err);

        item.nombre = body.nombre;  // update the bears info

        // save the bear
        item.save(function(err) {
            if (err)
                res.send(err);

            res.json(item);
        });
    });
}

function removeCategoria(req, res) {
    var categoriaId = req.swagger.params.categoriaId.value;

    Categoria.remove({
        _id: categoriaId
    }, function(err, item) {
        if (err)
            res.send(err);

        res.json({ id: categoriaId });
    });
}