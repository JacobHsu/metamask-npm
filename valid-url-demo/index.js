var validUrl = require('valid-url');

const suspect = 'https://www.npmjs.com/package/valid-url'
//const suspect = '//www.npmjs.com/package/valid-url'

if (validUrl.isUri(suspect)){
    console.log('Looks like an URI');
} else {
    console.log('Not a URI');
}