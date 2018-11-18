import curry from './../curry';
import clone from './../util/clone';

/**
 * Merge two objects together. In cases of conflicts, the values from the second object are used.
 * @func
 * @signature merge :: Object -> Object -> Object
 * @arg {Object} a
 * @arg {Object} b
 * @example
 * merge({a: 1, b: 2}, {c: 3})
 * // {a: 1, b: 2, c: 3}
 */
export default curry((a, b) => Object.assign({}, clone(a), clone(b)));
