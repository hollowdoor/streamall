var fs = require('fs'),
    streamall = require('../index.js');

streamall([
    fs.createReadStream('source.js'),
    fs.createWriteStream('dest.js')
]).then(function(){
    console.log('success');
}, function(e){
    console.log(e);
});
