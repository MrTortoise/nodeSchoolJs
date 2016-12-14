//console.log(process.argv);

function readDirectory(directoryPath, fileExtension) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(directoryPath, function doneReading(err, fileBuffer) {

        if (err != null) {
            throw err;
        }
        // console.log(fileBuffer);
        let fileString = fileBuffer.toString();
        //console.log(fileString);

        let filenames = fileString.split(',');
        for (var i = 0; i < filenames.length; i++) {
            var fileName = filenames[i];
            //console.log(fileName + " " + path.extname(fileName));
            if (path.extname(fileName) === "." + fileExtension) {
                console.log(fileName);
            }
        }
    });
}

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

readDirectory(directoryPath, fileExtension);

