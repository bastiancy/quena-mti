'use strict';

const util     = require('util');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const builder  = require('xmlbuilder');

const EstablecimientoSchema   = new Schema({
    nombre: {type: String, required: true},
    direccion: {
        pais: {type: String, required: true},
        region: String,
        ciudad: {type: String, required: true},
        descripcion: {type: String, required: true},
        zipcode: String,
        geo_lat: Number,
        geo_lon: Number
    }
});


EstablecimientoSchema.statics.toJson = function (data) {
    let def = function(item) {
        return {
            '_class': 'Establecimiento',
            'id': item._id,
            'nombre': item.nombre,
            'direccion': (item.direccion ? item.direccion : null)
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

EstablecimientoSchema.statics.toXml = function (data, fragment) {
    let def = function(item) {
        return {
            'establecimiento': {
                '@class': 'Establecimiento',
                '@id': item._id,
                'nombre': item.nombre,
                'direccion': () => {
                    if (item.direccion)
                        return {
                            '@class': 'Direccion',
                            '@id': item.direccion._id,
                            'pais': item.direccion.pais,
                            'region': item.direccion.region,
                        };

                    return null;
                }
            }
        };
    };

    if (data instanceof Array) {
        let root = builder.create('establecimientos');

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

EstablecimientoSchema.statics.toHtml = function (data, fragment) {
    let def = function(item) {
        return '<ul typeof="schema:Thing">' +
            '<li><a href="/establecimientos/' + item._id + '">id: <span property="schema:identifier">' + item._id + '</span></a></li>'
            + '<li>nombre: <span property="schema:name">' + item.nombre + '</span></li>'
            + '<li>direccion: '
            + (item.direccion ? 'pais: ' + item.direccion.pais + ', region: ' + item.direccion.region : 'null')
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

        return '<html><body><h3>Establecimientos</h3>' + root + '</body></html>';
    }
    else {
        let root = '' + def(data);

        if (fragment)
            return root;

        return '<html><body><h3>Establecimiento</h3>' + root + '</body></html>';
    }
};

module.exports = mongoose.model('Establecimiento', EstablecimientoSchema);