fs = require('fs');
const path = require('path');

fs.readdir(
    path.resolve(__dirname, 'index.js'),
    (err, files) => {
      if (err) throw err;
      
      for (let file of files) {
        console.log(file);
      }
    }
  );