const promiseToCallback = require('promise-to-callback')
const callbackNoop = function (err) {
  if (err) {
    throw err
  }
}

function nodeify (fn, context) {
    return function () {
      // parse arguments
      const args = [].slice.call(arguments)
      const lastArg = args[args.length - 1]
      const lastArgIsCallback = typeof lastArg === 'function'
      let callback
      if (lastArgIsCallback) {
        callback = lastArg
        args.pop()
      } else {
        callback = callbackNoop
      }
      // call the provided function and ensure result is a promise
      let result
      try {
        result = Promise.resolve(fn.apply(context, args))
      } catch (err) {
        result = Promise.reject(err)
      }
      // wire up promise resolution to callback
      promiseToCallback(result)(callback)
    }
  }

//dist/chrome/background.js 
//`approvePermissionsRequest: nodeify(permissionsController.approvePermissionsRequest, permissionsController),`
nodeify(permissionsController.approvePermissionsRequest, permissionsController)