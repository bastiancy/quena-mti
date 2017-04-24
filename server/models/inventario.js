'use strict';

const util     = require('util');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const builder  = require('xmlbuilder');

const InventarioSchema   = new Schema({
    establecimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento'},
    producto: {type: mongoose.Schema.Types.ObjectId, ref: 'Producto'},
    codigo: {tipo: String, valor: String},
    precio: {moneda: String, valor: String},
    estado: String,
    fechaActualizado: String,
});

InventarioSchema.statics.toJson = function (data) {
    let def = function(item) {
        return {
            '_class': 'Inventario',
            'id': item._id,
            'codigo': (item.codigo ? {'tipo': item.codigo.tipo, 'valor': item.codigo.valor} : null),
            'establecimiento': (item.establecimiento ? {'_class': 'Establecimiento', 'id': item.establecimiento._id} : null),
            'producto': (item.producto ? {'_class': 'Producto', 'id': item.producto._id} : null),
            'precio': (item.precio ? {'moneda': item.precio.moneda, 'valor': item.precio.valor} : null),
            'estado': item.estado,
            'fecha_actualizado': item.fechaActualizado,
        };
    };

    if (data instanceof Array) {
        let objs = [];

        for (let item of data) {
            objs.push(def(item));
        }

        return JSON.stringify(objs);
    }
    else {
        return JSON.stringify(def(data));
    }
};

InventarioSchema.statics.toXml = function (data, fragment) {
    let def = function(item) {
        return {
            'inventario': {
                '@class': 'Inventario',
                '@id': item._id,
                'establecimiento': () => {
                    if (item.establecimiento)
                        return {'@class': 'Establecimiento', '@id': item.establecimiento._id};

                    return null;
                },
                'producto': () => {
                    if (item.producto)
                        return {'@class': 'Producto', '@id': item.producto._id};

                    return null;
                },
                'estado': item.estado
            }
        };
    };

    if (data instanceof Array) {
        let root = builder.create('inventarios');

        for (let item of data) {
            root.ele(def(item));
        }

        if (fragment)
            return root;

        return root.end();
    }
    else {
        let root = builder.create(def(data));

        if (fragment)
            return root;

        return root.end();
    }
};

InventarioSchema.statics.toHtml = function (data, fragment) {
    let def = function(item) {
        return '<ul typeof="schema:Thing">' +
            '<li><a href="/inventarios/' + item._id + '">id: <span property="schema:identifier">' + item._id + '</span></a></li>'
            + '<li>nombre: <span property="schema:name">' + item.nombre + '</span></li>'
            + '<li>direccion: '
            + (item.direccion ? '<a href="/direccion/' + item.direccion._id + '">_id: ' + item.direccion._id + '</a>' : 'null')
            + '</li></ul>'
            ;
    };

    if (data instanceof Array) {
        let root = '';

        for (let item of data) {
            root += '</br>' + def(item);
        }

        if (fragment)
            return root;

        return '<html><body><h3>Inventarios</h3>' + root + '</body></html>';
    }
    else {
        let root = '' + def(data);

        if (fragment)
            return root;

        return '<html><body><h3>Inventario</h3>' + root + '</body></html>';
    }
};

module.exports = mongoose.model('Inventario', InventarioSchema);