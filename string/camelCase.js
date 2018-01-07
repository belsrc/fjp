const isString = require('./../util/isString');

// Converts a string to camelCase.
//
// camelCase('');
// >> ''
//
// camelCase();
// >> ''
//
// camelCase('functional javascript');
// >> functionalJavascript
//
// camelCase('functional_javascript');
// >> functionalJavascript
//
// camelCase('functional-javascript');
// >> functionalJavascript
//
module.exports = camelCase = str => {
  if(!isString(str)) {
    return '';
  }

  let s = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
