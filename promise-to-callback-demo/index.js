var promiseToCallback = require('promise-to-callback');

// Promise - MDN - Mozilla
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
});

console.log(promise); // Promise { <pending> }

promiseToCallback(promise)(function(err, data) {
    console.log(promise); // Promise { 'foo' }
});