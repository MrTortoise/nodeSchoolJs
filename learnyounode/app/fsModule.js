module.exports =
    function (directoryPath, fileExtension, callback) {
        var fs = require('fs');
        var path = require('path');

        fs.readdir(directoryPath, function doneReading(err, fileBuffer) {

            if (err != null) {
                return callback(err, null);
            }
            //console.log(fileBuffer);
            let fileString = fileBuffer.toString();
            //console.log(fileString);

            var retfiles = [];

            let filenames = fileString.split(',');
            //console.log(filenames);
            for (var i = 0; i < filenames.length; i++) {
                var fileName = filenames[i];
                //console.log(fileName + " " + path.extname(fileName));
                if (path.extname(fileName) === "." + fileExtension) {
                    retfiles.push(fileName);
                }
            }

            callback(null, retfiles);
        });
    };