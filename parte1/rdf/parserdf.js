var fs = require('fs'),
    $rdf = require('rdflib');

var rdfData=fs.readFileSync(__dirname + '/test3.rdf').toString();

var store=$rdf.graph();
var contentType='application/rdf+xml';
var baseUrl="http://IoFTriples.com";

try{
    $rdf.parse(rdfData,store,baseUrl,contentType);

    var stms = store.statementsMatching(undefined, undefined , undefined);
    for (var i=0; i<stms.length;i++) {
        var stm = stms[i]
        console.log(stm) // the WebID of a friend

    }
} catch(err){
    console.log(err);
}