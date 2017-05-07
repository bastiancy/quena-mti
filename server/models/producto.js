'use strict';

const util     = require('util');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const builder  = require('xmlbuilder');
const Categoria = require('./categoria');

const ProductoSchema   = new Schema({
    codigo: {tipo: String, valor: String},
    nombre: {type: String, required: true},
    marca: String,
    modelo: String,
    descripcion: String,
    origen: String,
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'},
    caracteristicas: [{nombre: String, valor: String}],
    imagenes: [{url: String}]
});

ProductoSchema.statics.serialize = function (data) {
    let item = {
        _class: 'Producto',
        id: data._id,
        categoria: null,
        nombre: data.nombre,
        marca: data.marca,
        modelo: data.modelo,
        descripcion: data.descripcion,
        origen: data.origen,
        caracteristicas: data.caracteristicas,
        imagenes: data.imagenes
    };

    if (data.categoria) {
        item.categoria = Categoria.serialize(data.categoria);
    }

    return item;
};

ProductoSchema.statics.toJson = function (data) {
    if (data instanceof Array) {
        let objs = [];

        for (let item of data) {
            objs.push(ProductoSchema.statics.serialize(item));
        }

        return JSON.stringify(objs);
    }
    else {
        return JSON.stringify(ProductoSchema.statics.serialize(data));
    }
};

ProductoSchema.statics.toXml = function (data, fragment) {
    let def = function(item) {
        return {
            'categoria': {
                '@class': 'Producto',
                '@id': item._id,
                'nombre': item.nombre,
                'descripcion': item.descripcion,
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
            '<li><a href="/productos/' + item._id + '">id: <span property="schema:identifier">' + item._id + '</span></a></li>'
            + '<li>nombre: <span property="schema:name">' + item.nombre + '</span></li>'
            + '<li>descripcion: <span property="schema:description">' + item.descripcion + '</span></li>'
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

        return '<html><body><h3>Productos</h3>' + root + '</body></html>';
    }
    else {
        let root = '' + def(data);

        if (fragment)
            return root;

        return '<html><body><h3>Productos</h3>' + root + '</body></html>';
    }
};

module.exports = mongoose.model('Producto', ProductoSchema);