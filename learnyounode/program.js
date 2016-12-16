

let url = process.argv[2];
var http = require('http');
var bl = require('bl');

http.get(url, function urlCallback(response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        var bufferString = data.toString();
        console.log(bufferString.length);
        console.log(bufferString);
    }));
}).on('error', console.error);

