var fs = require('fs');

var data = fs.readFileSync('data.txt', 'utf8');
console.log(data);