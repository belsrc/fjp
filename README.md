# Functional Javascript Playground

[![Maintainability](https://img.shields.io/codeclimate/maintainability/belsrc/fjp.svg?style=flat-square)](https://codeclimate.com/github/belsrc/fjp/maintainability)
[![Build Status](https://img.shields.io/travis/belsrc/fjp/develop.svg?style=flat-square)](https://travis-ci.org/belsrc/fjp)
[![Code Coverage](https://img.shields.io/codecov/c/github/belsrc/fjp/develop.svg?style=flat-square)](https://codecov.io/gh/belsrc/fjp/branch/develop)
[![NSP Status](https://nodesecurity.io/orgs/brykizer/projects/ed9e95c2-3569-4408-bd71-68b49e2e5014/badge)](https://nodesecurity.io/orgs/brykizer/projects/ed9e95c2-3569-4408-bd71-68b49e2e5014)
[![Last Commit](https://img.shields.io/github/last-commit/belsrc/fjp/develop.svg?style=flat-square)](https://github.com/belsrc/fjp/commits/develop)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/fjp/pulls)

Functional Programming was always a weird "why would you use this" way of coding as I've primarily been OOP. I set out to change my view on that and learn more about it and when to use it.
These are some of the functions I collected/made along the way. They are all ES6/ESM, the parameter order for most lends itself to currying + composing. Still a little iffy on the Hindley-milner signatures so they may be slightly off.

## This is very much a WIP

## Functions

<dl>
<dt><a href="#associate">associate()</a></dt>
<dd><p>Sets the given property and value on the object. Returning a new object.</p>
</dd>
<dt><a href="#average">average()</a></dt>
<dd><p>Averages the given array values</p>
</dd>
<dt><a href="#A">A()</a></dt>
<dd><p>Calls the given function with the given value.</p>
</dd>
<dt><a href="#Fork">Fork()</a></dt>
<dd><p>Takes a joiner func, and two other funcs and a value. The value is given to both funcs and the
results of each of these is given to the joiner func.</p>
</dd>
<dt><a href="#I">I()</a></dt>
<dd><p>Returns the given value.</p>
</dd>
<dt><a href="#K">K()</a></dt>
<dd><p>Takes two values and returns the given first.</p>
</dd>
<dt><a href="#OR">OR()</a></dt>
<dd><p>Given two functions that take the same value, returns the first if the result is truthy, otherwise, the second.</p>
</dd>
<dt><a href="#T">T()</a></dt>
<dd><p>Calls the given function with the given value. (Reverse order of apply)</p>
</dd>
<dt><a href="#compact">compact()</a></dt>
<dd><p>Removes falsey values from an array.</p>
</dd>
<dt><a href="#compose">compose()</a></dt>
<dd><p>Performs right-to-left function composition.</p>
</dd>
<dt><a href="#concat">concat()</a></dt>
<dd><p>Concatenates two String|Arrays together.
Returns empty array if value arent of the same type or not String|Array.</p>
</dd>
<dt><a href="#concatN">concatN()</a></dt>
<dd><p>Concatenates N Arrays together.</p>
</dd>
<dt><a href="#curry">curry()</a></dt>
<dd><p>Wraps the given function, if the number of provided args is sufficient, call the passed function fn.
Otherwise, return a wrapped function fn that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function),
you can optionally pass the number of arguments to the second parameter arity.</p>
</dd>
<dt><a href="#difference">difference()</a></dt>
<dd><p>Returns the difference between two arrays.</p>
</dd>
<dt><a href="#distinct">distinct()</a></dt>
<dd><p>Returns all of the distinct values of an array.</p>
</dd>
<dt><a href="#distinctN">distinctN()</a></dt>
<dd><p>Returns all of the distinct values of the given arrays.</p>
</dd>
<dt><a href="#each">each()</a></dt>
<dd><p>Applies the given func to each element in the array.</p>
</dd>
<dt><a href="#every">every()</a></dt>
<dd><p>Determines if all element in an array satisfy the given test function</p>
</dd>
<dt><a href="#filter">filter()</a></dt>
<dd><p>Filters the array using the given function.</p>
</dd>
<dt><a href="#find">find()</a></dt>
<dd><p>Finds the first element that satisfies the given test func.</p>
</dd>
<dt><a href="#isArray">isArray()</a></dt>
<dd><p>Determines if the given value is an array.</p>
</dd>
<dt><a href="#isFunction">isFunction()</a></dt>
<dd><p>Determines if the given value is a function.</p>
</dd>
<dt><a href="#isNumber">isNumber()</a></dt>
<dd><p>Determines if the given value is a number.</p>
</dd>
<dt><a href="#isObject">isObject()</a></dt>
<dd><p>Determines if the given value is an object.</p>
</dd>
<dt><a href="#isString">isString()</a></dt>
<dd><p>Determines if the given value is a string.</p>
</dd>
<dt><a href="#not">not()</a></dt>
<dd><p>Negates the given boolean-like value.</p>
</dd>
<dt><a href="#tap">tap()</a></dt>
<dd><p>Calls the given function with the given value and returns the value.</p>
</dd>
</dl>

<a name="associate"></a>

## associate()

Sets the given property and value on the object. Returning a new object.

**Kind**: global function  
**Signature**: associate :: String k -> {} -> v -> {k: v}  
**Example**

```js
const obj = associate('c', { a: b }, d); // { a: b, c: d }
```

<a name="average"></a>

## average()

Averages the given array values

**Kind**: global function  
**Signature**: average :: [Number] -> Number  
**Example**

```js
average([1, 2, 3]); // 2
average(1, 2, 3); // 2
average(); // 0
```

<a name="A"></a>

## A()

Calls the given function with the given value.

**Kind**: global function  
**Signature**: A :: (a -> b) -> a -> b  
**Aka**: apply  
<a name="Fork"></a>

## Fork()

Takes a joiner func, and two other funcs and a value. The value is given to both funcs and the
results of each of these is given to the joiner func.

**Kind**: global function  
**Signature**: Fork :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d  
**Aka**: join  
<a name="I"></a>

## I()

Returns the given value.

**Kind**: global function  
**Signature**: I :: a -> a  
**Aka**: identity  
<a name="K"></a>

## K()

Takes two values and returns the given first.

**Kind**: global function  
**Signature**: K :: a -> b -> a  
**Aka**: constant  
<a name="OR"></a>

## OR()

Given two functions that take the same value, returns the first if the result is truthy, otherwise, the second.

**Kind**: global function  
**Signature**: OR :: (a -> b) -> (a -> b) -> b  
**Aka**: alternation  
<a name="T"></a>

## T()

Calls the given function with the given value. (Reverse order of apply)

**Kind**: global function  
**Signature**: T :: a -> (a -> b) -> b  
**Aka**: thrush, applyTo  
<a name="compact"></a>

## compact()

Removes falsey values from an array.

**Kind**: global function  
**Signature**: compact :: [a] -> [a]  
**Example**

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
compact(null); // []
```

<a name="compose"></a>

## compose()

Performs right-to-left function composition.

**Kind**: global function  
**Signature**: compose :: [(m -> n), ..., (b -> c), (a -> b)] -> a -> n  
**Example**

```js
const addOne = (x) => x + 1;
const timeTen = (x) => x * 10;
const addOneTimeTen = compose(timeTen, addOne);
const result = addOneTimeTen(9); // 100
```

<a name="concat"></a>

## concat()

Concatenates two String|Arrays together.
Returns empty array if value arent of the same type or not String|Array.

**Kind**: global function  
**Signature**: concat :: a -> b -> c  
**Example**

```js
concat('foo', 'bar'); // foobar
concat([1, 2], [3, 4]); // [1, 2, 3, 4]
```

<a name="concatN"></a>

## concatN()

Concatenates N Arrays together.

**Kind**: global function  
**Signature**: concat :: [a] -> [b] -> ...[n] -> [m]  
**Example**

```js
concatN([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
```

<a name="curry"></a>

## curry()

Wraps the given function, if the number of provided args is sufficient, call the passed function fn.
Otherwise, return a wrapped function fn that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function),
you can optionally pass the number of arguments to the second parameter arity.

**Kind**: global function  
**Signature**: curry :: ((a, b, ..., n) -> m) -> a -> b -> ...n -> m  
**Example**

```js
const add = curry((x, y) => x + y);
const addFiveTo = add(5);
addFiveTo(10); // 15
```

<a name="difference"></a>

## difference()

Returns the difference between two arrays.

**Kind**: global function  
**Signature**: difference :: [a] -> [b] -> [c]  
**Example**

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
difference([], [1, 2, 4]); // [ 1, 2, 4 ]
difference([1, 2, 3], []); // [ 1, 2, 3 ]
difference([1, 2, 3], null); // [ 1, 2, 3 ]
```

<a name="distinct"></a>

## distinct()

Returns all of the distinct values of an array.

**Kind**: global function  
**Signature**: distinct :: [a] -> [b]  
**Example**

```js
distinct([1, 2, 2, 3, 4, 4, 5]); // [ 1, 2, 3, 4, 5 ]
```

<a name="distinctN"></a>

## distinctN()

Returns all of the distinct values of the given arrays.

**Kind**: global function  
**Signature**: distinctN :: [a] -> [b] -> ...[n] -> [m]  
**Example**

```js
distinctN([1, 2], [2, 3, 4], [4, 5]); // [ 1, 2, 3, 4, 5 ]
```

<a name="each"></a>

## each()

Applies the given func to each element in the array.

**Kind**: global function  
**Signature**: each :: (a -> b) -> [c] -> undefined  
**Example**

```js
difference(log, [1, 2, 3]);
```

<a name="every"></a>

## every()

Determines if all element in an array satisfy the given test function

**Kind**: global function  
**Signature**: every :: (a -> Bool) -> [a] -> Bool  
**Aka**: all  
**Example**

```js
every(Boolean, [1, 2, 3, 4]); // true
every(Boolean, [1, 2, null, 4]); // false
```

<a name="filter"></a>

## filter()

Filters the array using the given function.

**Kind**: global function  
**Signature**: filter :: (a -> Boolean) -> [a] -> [a]  
**Example**

```js
filter((x) => x > 5, [1, 2, 3, 5, 6, 7]); // [6, 7]
```

<a name="find"></a>

## find()

Finds the first element that satisfies the given test func.

**Kind**: global function  
**Signature**: find :: (a -> Boolean) -> [a] -> a  
**Example**

```js
find((x) => x.score === 5, [{ score: 1 }, { score: 2 }, { score: 5 }, { score: 6 }, { score: 7 }]); // {score: 5}
```

<a name="isArray"></a>

## isArray()

Determines if the given value is an array.

**Kind**: global function  
**Signature**: isArray :: a -> Boolean  
**Example**

```js
isArray([1, 2, 3]); // true
isArray({ a: 'b' }); // false
```

<a name="isFunction"></a>

## isFunction()

Determines if the given value is a function.

**Kind**: global function  
**Signature**: isFunction :: a -> Boolean  
**Example**

```js
isFunction(() => {}); // true
isFunction([1, 2, 3]); // false
```

<a name="isNumber"></a>

## isNumber()

Determines if the given value is a number.

**Kind**: global function  
**Signature**: isNumber :: a -> Boolean  
**Example**

```js
isNumber(42); // true
isNumber(8e5); // true
isNumber(0x2f); // true
isNumber('foo bar'); // false
```

<a name="isObject"></a>

## isObject()

Determines if the given value is an object.

**Kind**: global function  
**Signature**: isObject :: a -> Boolean  
**Example**

```js
isObject({ a: 'b' }); // true
isObject([1, 2, 3]); // false
```

<a name="isString"></a>

## isString()

Determines if the given value is a string.

**Kind**: global function  
**Signature**: isString :: a -> Boolean  
**Example**

```js
isString('foo bar'); // true
isString({ a: 'b' }); // false
```

<a name="not"></a>

## not()

Negates the given boolean-like value.

**Kind**: global function  
**Signature**: not :: Boolean -> Boolean  
**Example**

```js
not(true); // false
not(false); // true
not(2); // false
```

<a name="tap"></a>

## tap()

Calls the given function with the given value and returns the value.

**Kind**: global function  
**Signature**: tap :: (a -> b) -> a -> a  
**Example**

```js
tap(console.log, 'foobar'); // foobar
```

## License

FJP is licensed under the MIT license.

Copyright © 2018 Bryan Kizer
