

function readFile(filePath) {
    var fs = require('fs');

    fs.readFile(filePath, function doneReading(err, fileBuffer) {

        if (err != null) {
            throw err;
        }
        //console.log(fileBuffer);
        let fileString = fileBuffer.toString();
        //console.log(fileString);

        let lineCount = fileString.split('\n').length - 1;
        console.log(lineCount);
    })
}


readFile(process.argv[2]);

