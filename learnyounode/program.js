var fs = require('fs');

let filePath = process.argv[2];

let fileBuffer = fs.readFileSync(filePath);
//console.log(fileBuffer);
var fileString = fileBuffer.toString();
//console.log(fileString);

var newLineStrings = fileString.split('\n');
console.log(newLineStrings.length - 1);

