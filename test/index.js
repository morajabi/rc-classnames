var expect = require('expect');
var c = require('../index');

describe('React ClassNames', function() {
  it('should join truthy values from object together', function() {
    expect(c({ 'a': true, 'b': false, 'c': true })).toEqual('a c');
  });

  it('should join values from array', function() {
    expect(c(['a', 'b', 'c'])).toEqual('a b c');
  });

  it('should join values from function argumants', function() {
    expect(c('a','b','c')).toEqual('a b c');
  });

  it('should join values from array containing object', function() {
    expect(c([{ 'a': true }])).toEqual('a');
  });

  it('should join values from nested arrays', function() {
    expect(c(['a', ['b', ['c']]])).toEqual('a b c');
  });

  it('should remove falsy values', function() {
    expect(c(undefined, null, false, 1, 0)).toEqual('1');
  });
});
