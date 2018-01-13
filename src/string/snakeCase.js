const isString = require('./../util/isString');

// Converts a string to snake case.
//
// snakeCase('');
// >> ''
//
// snakeCase();
// >> ''
//
// snakeCase('functional javascript');
// >> functional_javascript
//
// snakeCase('functionalJavascript');
// >> functional_javascript
//
// snakeCase('functional-javascript');
// >> functional_javascript
//
module.exports = str =>
  isString(str) ?
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('_') :
    '';
