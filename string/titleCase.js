const isString = require('./../util/isString');

// Converts a string to title case.
//
// titleCase('');
// >> ''
//
// titleCase();
// >> ''
//
// titleCase('the old man and the sea');
// >> The Old Man and the Sea
//
// titleCase('theOldManAndTheSea');
// >> The Old Man and the Sea
//
// titleCase('the-old-man-and-the-sea');
// >> The Old Man and the Sea
//
// titleCase('the_old_man_and_the_sea');
// >> The Old Man and the Sea
//
module.exports = titleCase = str => {
  const lower = [ 'and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'is' ];

  return isString(str) ?
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .map((x, i) => lower.includes(x.toLowerCase()) && i !== 0 ? x.toLowerCase() : x)
      .join(' ') :
    '';
};
