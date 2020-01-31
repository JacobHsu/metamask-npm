const fs = require('fs');
const pify = require('pify');
 
// Promisify a single function
pify(fs.readFile)('package.json', 'utf8').then(data => {
    console.log(JSON.parse(data).name);
    //=> 'pify'
});
 
// Promisify all methods in a module
pify(fs).readFile('package.json', 'utf8').then(data => {
    console.log(JSON.parse(data).name);
    //=> 'pify'
});