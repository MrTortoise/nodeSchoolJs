
let urls = [process.argv[2], process.argv[3], process.argv[4]];
let awaiterType = require('./awaiter');
let http = require('http');
let bl = require('bl');

let awaiter = new awaiterType(urls, function (content) {
    for (var i = 0; i < urls.length; i++) {
        console.log(content[i].content);
    }
});

for (var i = 0; i < urls.length; i++) {
    let closedIndex = i;
    http.get(urls[closedIndex], function (response) {
        response.setEncoding("utf8");
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            var bufferString = data.toString();
            awaiter.completeUrl(urls[closedIndex], bufferString);
        }));
    }).on('error', console.error);
}

