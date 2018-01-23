import isString from './../util/isString';

// Converts a string to kebab case.
//
// kebabCase('');
// >> ''
//
// kebabCase();
// >> ''
//
// kebabCase('functional javascript');
// >> functional-javascript
//
// kebabCase('functionalJavascript');
// >> functional-javascript
//
// kebabCase('functional_javascript');
// >> functional-javascript
//
export default str =>
  isString(str) ?
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-') :
    '';
