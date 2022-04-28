const fs = require('fs');


const data = fs.readFileSync('filetoread',{encoding:'utf8', flag:'r'});

console.log(data);
