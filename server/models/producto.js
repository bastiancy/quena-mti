'use strict';

const util     = require('util');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const builder  = require('xmlbuilder');

const ProductoSchema   = new Schema({
    codigo: {tipo: String, valor: String},
    nombre: {type: String, required: true},
    marca: String,
    modelo: String,
    descripcion: String,
    origen: String,
    categorias: [{type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}],
    caracteristicas: [{nombre: String, valor: String}]
});

ProductoSchema.statics.toJson = function (data) {
    let def = function(item) {
        return {
            '_class': 'Producto',
            'id': item._id,
            'codigo': {'tipo': item.codigo.tipo, 'valor': item.codigo.valor},
            'nombre': item.nombre,
            'marca': item.marca,
            'modelo': item.modelo,
            'descripcion': item.descripcion,
            'origen': item.origen,
            'categorias': null,
            'caracteristicas': item.origen,
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

ProductoSchema.statics.toXml = function (data, fragment) {
    let def = function(item) {
        return {
            'categoria': {
                '@class': 'Categoria',
                '@id': item._id,
                'nombre': item.nombre,
                'descripcion': item.descripcion,
                'categoriaPadre': () => {
                    if (item.categoriaPadre)
                        return {'@class': 'Categoria', '@id': item.categoriaPadre};

                    return null;
                }
            }
        };
    };

    if (data instanceof Array) {
        let root = builder.create('categorias');

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

ProductoSchema.statics.toHtml = function (data, fragment) {
    let def = function(item) {
        return '<ul typeof="schema:Thing">' +
            '<li><a href="/categorias/' + item._id + '">id: <span property="schema:identifier">' + item._id + '</span></a></li>'
            + '<li>nombre: <span property="schema:name">' + item.nombre + '</span></li>'
            + '<li>descripcion: <span property="schema:description">' + item.descripcion + '</span></li>'
            + '<li>categoriaPadre: '
            + (item.categoriaPadre ? '<a href="/categorias/' + item.categoriaPadre + '">_id: ' + item.categoriaPadre + '</a>' : 'null')
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

        return '<html><body><h3>Categorias</h3>' + root + '</body></html>';
    }
    else {
        let root = '' + def(data);

        if (fragment)
            return root;

        return '<html><body><h3>Categoria</h3>' + root + '</body></html>';
    }
};

module.exports = mongoose.model('Producto', ProductoSchema);