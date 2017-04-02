var libxslt = require('libxslt');
var fs = require('fs');
var stylesheet = null;

module.exports.jsonToXml = function(data, params, cb) {

    data = '<?xml version="1.0" encoding="UTF-8"?><sampleTag><![CDATA[' + data + ']]></sampleTag>';

    if (! stylesheet) {
        var stylesheetString = fs.readFileSync('./helpers/js2xml_v2.xsl', 'utf8');

        libxslt.parse(stylesheetString, function(err, st){
            if (err) {
                // throw new Error(err);
                return cb(err, null);
            }

            stylesheet = st;
            stylesheet.apply(data, params, cb);
        });
    }
    else {
        stylesheet.apply(data, params, cb);
    }
};