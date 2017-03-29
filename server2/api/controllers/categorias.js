'use strict';

var util = require('util');
var jstoxml = require('../helpers/js2xml');

var Categoria = require('../models/categoria');

module.exports = {
    'findAllCategoria': findAllCategoria,
    'addCategoria': addCategoria,
    'findOneCategoria': findOneCategoria,
    'updateCategoria': updateCategoria,
    'removeCategoria': removeCategoria
};

function findAllCategoria(req, res) {
    Categoria.find(function (err, data) {
        if (err)
            res.send(err);

        res.json(data);
    });
}

function findOneCategoria(req, res) {
    var categoriaId = req.swagger.params.categoriaId.value;

    Categoria.findById(categoriaId, function(err, data) {
        if (err)
            res.send(err);

        res.format({
            'application/json': function() {
                res.json(data);
            },
            'application/xml': function() {
                data = {'Categoria': data};
                jstoxml.jsonToXml(JSON.stringify(data), null, function (err2, result) {
                    if (err2)
                        res.send(err2);

                    res.send(result);
                });
                // var all = data.map(function(d) { return '<id>' + d._id + '</id><nombre>' + d.nombre + '</nombre>'; });
                // res.send('<xml>' + all.join('') + '</xml>');
            },
            'text/html': function() {
                // var all = data.map(function(d) { return '<p>' + d._id + ': ' + d.nombre + '</p>'; });
                res.send('<html><p>' + data._id + ': ' + data.nombre + '</p></html>');
            }
        });

    });
}

function addCategoria(req, res) {
    var body = req.swagger.params.body.value;

    var item = new Categoria(body);
    item.save(function (err) {
        if (err)
            res.send(err);

        res.json(item);
    });
}

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