(function () {

  var hasOwn = {}.hasOwnProperty;

  function ReactClassNames() {
    var finalClassList = [];
    for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
      if (!arg) continue;

      var typoOfArg = typeof arg;

      if (typoOfArg === 'string' || typoOfArg === 'number') {
        finalClassList.push(arg);
      } else if (arg.constructor === Array) {
        // Array
        finalClassList.push(ReactClassNames.apply(null, arg));
      } else if (arg !== null && typoOfArg === 'object') {
        // Object
        for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
            finalClassList.push(key);
					}
				}
      }

    }

    return finalClassList.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
		module.exports = ReactClassNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define('classnames', [], function () {
			return ReactClassNames;
		});
	} else {
		window.ReactClassNames = ReactClassNames;
	}

}());
