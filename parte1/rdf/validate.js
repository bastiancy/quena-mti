var fs = require('fs'),
    path = require('path'),
    $rdf = require('rdflib');

if (process.argv.length < 4) {
    console.log('Usage: node validator.js data.tt text/turtle');
    return 0;
}

var data = fs.readFileSync(path.join(__dirname, process.argv[2]), 'utf8');
var mimeType = process.argv[3];
var uri = "http://api.quenamti.bastianc.info";
var store = $rdf.graph();

try {
    $rdf.parse(data.toString(), store, uri, mimeType);
} catch (err) {
    console.log(err);
}
