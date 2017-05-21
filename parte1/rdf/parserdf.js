var fs = require('fs'),
    $rdf = require('rdflib');

var rdfData = fs.readFileSync(__dirname + '/store.rdf.xml').toString();

var store=$rdf.graph();
var contentType = 'application/rdf+xml';
var baseUrl = "http://api.quenamti.bastianc.info";

try{
    $rdf.parse(rdfData, store, baseUrl, contentType);

    var stms = store.statementsMatching(undefined, undefined , undefined);
    for (var i=0; i < stms.length; i++) {
        var stm = stms[i];
        console.log(stm);
    }
} catch(err){
    console.log(err);
}