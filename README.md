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

streamall.isStreamList
----------------------

Check an array to see if all of the values are streams.

If there is a value in the array that is not a stream, or the array is empty return false.

```javascript
if(streamall.isStreamList(array)){
    //true
}else{
    //false
}
```

About
-----

streamall accepts an array of streams, and returns a promise.

It sets all the stream error events to promise reject, and resolves on the the `finish` event of the last stream.

Should work well with coroutines that accept yielded promises, and general thenables.
