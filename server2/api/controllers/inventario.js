'use strict';

var util = require('util');

var data = [
    {
        "id": 1,
        "codigo_tipo": "uid",
        "codigo_valor": "123456",
        "nombre": "guitarra electrica",
        "marca": "ibanez",
        "modelo": "g1",
        "descripcion": "guitarra de steve vai",
        "origen": "USA",
        "categorias": {
            "id": 1,
            "nombre": "Guitarra",
            "descripcion": "Instrumentos de cuerda"
        },
        "caracteristicas": {
            "nombre": "color",
            "valor": "negro"
        }
    }
];

module.exports = {
    'findAllInventarioInStore': findAll,
    'addInventarioInStore': findAll,
    'findOneInventarioInStore': findAll,
    'updateInventarioInStore': findAll,
    'renoveInventarioInStore': findAll
};

function findAll(req, res) {
    res.json(data);
}