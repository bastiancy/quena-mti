'use strict';

var util = require('util');
var Establecimiento = require('../models/establecimiento');

module.exports = {
    'findAllStore': findAllStore,
    'findOneStore': findOneStore,
    'addStore': addStore,
    'updateStore': updateStore,
    'removeStore': removeStore
};

function findAllStore(req, res) {
    Establecimiento.find(function (err, items) {
        if (err)
            res.send(err);

        res.json(items);
    });
}

function findOneStore(req, res) {
    var storeId = req.swagger.params.storeId.value;

    Establecimiento.findById(storeId, function(err, item) {
        if (err)
            res.send(err);

        res.json(item);
    });
}

function addStore(req, res) {
    var body = req.swagger.params.body.value;

    var item = new Establecimiento(body);
    item.save(function (err) {
        if (err)
            res.send(err);

        res.json(item);
    });
}

function updateStore(req, res) {
    var storeId = req.swagger.params.storeId.value;
    var body = req.swagger.params.body.value;

    Establecimiento.findById(storeId, function(err, item) {
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

function removeStore(req, res) {
    var storeId = req.swagger.params.storeId.value;

    Establecimiento.remove({
        _id: storeId
    }, function(err, item) {
        if (err)
            res.send(err);

        res.json({ id: storeId });
    });
}