fs = require('fs');
const path = require('path');

console.log(fs.readFileSync(`${__dirname}/log.txt`, "utf-8"));

console.log(fs.readFileSync(`${__dirname}/../assets/index.html`, "utf-8"));