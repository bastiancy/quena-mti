var fs = require('fs'),
	stringToStream = require('string-to-stream'),
    RdfXmlParser = require('rdf-parser-rdfxml'),
    NTriplesSerializer = require('rdf-serializer-ntriples');

var simpleXml = fs.readFileSync(__dirname + '/test3.rdf').toString();

// create JSON-LD parser instance
var parser = new RdfXmlParser();

// forward the JSON-LD example string to the parser
var quadStream = parser.parse(simpleXml);

// create the N-Triples serializer instance
var serializer = new NTriplesSerializer();

// import the parser stream into the serializer (reverse pipe)
var nTriplesStream = serializer.parse(quadStream);

// pipe the N-Triples stream to stdout
nTriplesStream.pipe(process.stdout);