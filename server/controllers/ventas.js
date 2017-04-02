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
    'findAllVentaInStore': findAll,
    'addVentaInStore': findAll,
    'findOneVentaInStore': findAll,
    'updateVentaInStore': findAll
};

function findAll(req, res) {
    res.json(data);
}