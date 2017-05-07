'use strict';

const util     = require('util');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const builder  = require('xmlbuilder');

const CategoriaSchema   = new Schema({
    nombre: {type: String, required: true},
    descripcion: String,
    categoriaPadre: {type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}
});


CategoriaSchema.statics.serialize = function (data) {
    let item = {
        _class: 'Categoria',
        id: data._id,
        nombre: data.nombre,
        descripcion: data.descripcion,
        categoriaPadre: null,
    };

    if (data.categoriaPadre) {
        item.categoriaPadre = CategoriaSchema.serialize(data.categoriaPadre);
    }

    return item;
};

CategoriaSchema.statics.toJson = function (data) {
    if (data instanceof Array) {
        let objs = [];

        for (let item of data) {
            objs.push(CategoriaSchema.serialize(item));
        }

        return JSON.stringify(objs);
    }
    else {
        return JSON.stringify(CategoriaSchema.serialize(data));
    }
};

CategoriaSchema.statics.toXml = function (data, fragment) {
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

CategoriaSchema.statics.toHtml = function (data, fragment) {
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

module.exports = mongoose.model('Categoria', CategoriaSchema);

