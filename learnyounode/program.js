var fs = require('fs');

let filePath = process.argv[2];

function addOne() {
    fs.readFile(filePath, function doneReading(err, fileBuffer) {

        if (err != null) {
            throw err;
        }
        //console.log(fileBuffer);
        let fileString = fileBuffer.toString();
        //console.log(fileString);

        let newLineStrings = fileString.split('\n');
        console.log(newLineStrings.length - 1);
    })
}




