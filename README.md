streamall
=========

Install
-------

`npm install streamall`

Usage
-----

```javascript
var fs = require('fs'),
    streamall = require('streamall');

streamall([
    fs.createReadStream('source.js'),
    fs.createWriteStream('dest.js')
]).then(function(){
    console.log('success');
}, function(e){
    console.log(e);
});
```

About
-----

streamall accepts an array of streams, and returns a promise.

It sets all the error events to promise reject, and resolves on the the `finish` event of the last stream.

Should work well with coroutines that yield with promises, and general thenables.
