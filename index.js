var Promise = require('es6-promise').Promise;
module.exports = streamall;

/*
git remote add origin https://github.com/hollowdoor/streamall.git
git push -u origin master
npm publish
*/

function streamall(list){
    return new Promise(function(resolve, reject){
        var len = list.length;
        for(var i=0; i<len; i++){
            list[i].on('error', reject);

            if(list[i+1] && list[i+1].pipe)
                list[i].pipe(list[i+1]);
        }

        list[len - 1].on('error', reject);

        list[len - 1].on('finish', resolve);
    });
}

streamall.isStreamList = function(list){
    if(!list.length)
        return false;
    
    for(var i=0; i<list.length; i++){
        if(!(Object.prototype.toString.call(list[i]) === '[object Object]' &&
            typeof list[i].pipe === 'function')){
            return false;
        }
    }
    return true;
};
