var fs = require('fs');
var path = require('path');
var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

if (process.argv.length < 4) {
  console.log('Usage: node validator.js data.json schema.json <schema2.json ...>');
  return 0;
}

var data = fs.readFileSync(path.join(__dirname, process.argv[2]), 'utf8');
data = JSON.parse(data);

var schema = fs.readFileSync(path.join(__dirname, process.argv[3]), 'utf8');
schema = JSON.parse(schema);

if (process.argv.length > 4) {
    for (var s = null, i = 4; i < process.argv.length; i++) {
        s = fs.readFileSync(path.join(__dirname, process.argv[i]), 'utf8');
        s = JSON.parse(s);
        ajv.addSchema(s, s.$schema);
    }
}

var valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);

