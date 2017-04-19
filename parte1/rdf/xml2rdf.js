var fs = require('fs');
var path = require('path');
var libxslt = require('libxslt');

if (process.argv.length < 4) {
  console.log('Usage: node tordf.js data.xml stylesheet.xsl');
  return 0;
}

var data = fs.readFileSync(path.join(__dirname, process.argv[2]), 'utf8');
var style = fs.readFileSync(path.join(__dirname, process.argv[3]), 'utf8');

libxslt.parse(style, function(err, stylesheet){
  if (err) {
    console.log(err);
    return 1;
  }

  var params = {
  };
 
  // 'params' parameter is optional 
  stylesheet.apply(data, params, function(err, result) {
    // err contains any error from parsing the document or applying the stylesheet 
    // result is a string containing the result of the transformation 
    if (err) {
    	console.log(err);
    	return 1;
    }
    else {
    	console.log(result);
    }

  });  
});
