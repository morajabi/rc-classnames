var forEach     = require('lodash/forEach');
var flattenDeep = require('lodash/flattenDeep');
var compact     = require('lodash/compact');

function extractClassFromArray(classList) {
  return classList.join(' ');
}

function extractClassFromObject(classList) {
  var filteredClassList = [];
  forEach(classList, function(value, key) { if (value) filteredClassList.push(key); });
  return filteredClassList.join(' ');
}

function c(classList) {
  var finalClassList = [];
  var compactArgs = compact(arguments);
  forEach(arguments, function(arg) {

    if (typeof arg === 'string') {
      finalClassList.push(arg);
    } else if (arg.constructor === Array) {
      // Array
      var flattedClassList = flattenDeep(arg);
      forEach(flattedClassList, (c) => {
        if (typeof c === 'string') {
          finalClassList.push(c);
        } else if (classList !== null && typeof classList === 'object') {
          finalClassList.push(extractClassFromObject(c));
        }
      });
    } else if (arg !== null && typeof arg === 'object') {
      // Object
      forEach(arg, function (value, key) {
        if (value) {
          finalClassList.push(key);
        }
      });
    }

  });

  return finalClassList.join(' ');
}

module.exports = c;
