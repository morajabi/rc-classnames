/*global define:true*/

(function () {
  var hasOwn = {}.hasOwnProperty

  function ReactClassNames () {
    var finalClassList = []

    // Iterate over arguments passed to function
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i]
      // remove falsy value
      if (!arg) continue

      var typoOfArg = typeof arg

      if (typoOfArg === 'string' || typoOfArg === 'number') {
        // Arg passed is String or Number
        finalClassList.push(arg)
      } else if (arg.constructor === Array) {
        // Arg passed is Array
        finalClassList.push(ReactClassNames.apply(null, arg))
      } else if (arg !== null && typoOfArg === 'object') {
        // Arg passed is Object
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            finalClassList.push(key)
          }
        }
      }
    }

    // Join classNames together
    return finalClassList.join(' ')
  }

  if (typeof module !== 'undefined' && module.exports) {
    // Export as module
    module.exports = ReactClassNames
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // Define for AMD
    define('classnames', [], function () {
      return ReactClassNames
    })
  } else {
    // Defined as global function
    window.ReactClassNames = ReactClassNames
  }
}())
