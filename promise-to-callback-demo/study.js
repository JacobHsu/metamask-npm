var promiseToCallback = require('promise-to-callback');

// parse arguments
const fn1 = function(err, data) {
    return 1; 
}
const fn2 = function(a, b) {
    return a + b;
}
//console.log(fn2.apply(null, [1, 2]));		// 3

const args = [fn1, fn2];
const lastArg = args[args.length - 1]
//console.log(lastArg) //[Function: fn2]

// call the provided function and ensure result is a promise
let result

try {
    //var max = Math.max.apply(null, args); 
    //console.log(max) //5
    //result = Promise.resolve(fn.apply(context, args))
    result = Promise.resolve(fn2.apply(null, [1, 2]))
} catch (err) {
    result = Promise.reject(err)
}

//  Callback must be a function
const callbackNoop = function (err) {
    if (err) {
      throw err
    }
  }

let callback
callback = function(err, data) {
    console.log(result); 
}

promiseToCallback(result)(callback)

