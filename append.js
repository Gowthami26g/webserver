var fs = require('fs');

fs.appendFile('data.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});