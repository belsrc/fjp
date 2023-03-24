# Functional Javascript Playground

[![Maintainability](https://img.shields.io/codeclimate/maintainability/belsrc/fjp.svg?style=flat-square)](https://codeclimate.com/github/belsrc/fjp/maintainability)
[![Build Status](https://img.shields.io/travis/belsrc/fjp/develop.svg?style=flat-square)](https://travis-ci.org/belsrc/fjp)
[![Code Coverage](https://img.shields.io/codecov/c/github/belsrc/fjp/develop.svg?style=flat-square)](https://codecov.io/gh/belsrc/fjp/branch/develop)
[![Known Vulnerabilities](https://snyk.io/test/github/belsrc/fjp/badge.svg?targetFile=package.json)](https://snyk.io/test/github/belsrc/fjp?targetFile=package.json)
[![Last Commit](https://img.shields.io/github/last-commit/belsrc/fjp/develop.svg?style=flat-square)](https://github.com/belsrc/fjp/commits/develop)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/fjp/pulls)

Functional Programming was always a weird "why would you use this" way of coding as I've primarily been OOP. I set out to change my view on that and learn more about it and when to use it.
These are some of the functions I collected/made along the way. They are all ES6/ESM, the parameter order for most lends itself to currying + composing. Still a little iffy on the Hindley-milner signatures so they may be slightly off.

## This is very much a WIP


## Functions

<dl>
<dt><a href="#associate">associate(prop, obj, val)</a></dt>
<dd><p>Sets the given property and value on the object. Returning a new object.</p>
</dd>
<dt><a href="#average">average(arr)</a></dt>
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
<dt><a href="#Th">Th()</a></dt>
<dd><p>Calls the given function with the given value. (Reverse order of apply)</p>
</dd>
<dt><a href="#V">V(a, b, f)</a></dt>
<dd></dd>
<dt><a href="#compact">compact(arr)</a></dt>
<dd><p>Removes falsey values from an array.</p>
</dd>
<dt><a href="#compose">compose()</a></dt>
<dd><p>Performs right-to-left function composition.</p>
</dd>
<dt><a href="#concat">concat(a, b)</a></dt>
<dd><p>Concatenates two String|Arrays together.
Returns empty array if value arent of the same type or not String|Array.</p>
</dd>
<dt><a href="#concatN">concatN()</a></dt>
<dd><p>Concatenates N Arrays together.</p>
</dd>
<dt><a href="#curry">curry(fn)</a></dt>
<dd><p>Wraps the given function, if the number of provided args is sufficient, call the passed function fn.
Otherwise, return a wrapped function fn that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function),
you can optionally pass the number of arguments to the second parameter arity.</p>
</dd>
<dt><a href="#deviation">deviation(usePopulation, arr)</a></dt>
<dd><p>Returns the standard deviation of an array of numbers.</p>
</dd>
<dt><a href="#difference">difference(a, b)</a></dt>
<dd><p>Returns the difference between two arrays.</p>
</dd>
<dt><a href="#distinct">distinct(arr)</a></dt>
<dd><p>Returns all of the distinct values of an array.</p>
</dd>
<dt><a href="#distinctN">distinctN()</a></dt>
<dd><p>Returns all of the distinct values of the given arrays.</p>
</dd>
<dt><a href="#each">each(fn, arr)</a></dt>
<dd><p>Applies the given func to each element in the array.</p>
</dd>
<dt><a href="#every">every(fn, arr)</a></dt>
<dd><p>Determines if all elements in an array satisfy the given test function.</p>
</dd>
<dt><a href="#filter">filter(func, arr)</a></dt>
<dd><p>Filters the array using the given function.</p>
</dd>
<dt><a href="#find">find(fn, x)</a></dt>
<dd><p>Finds the first element that satisfies the given test func.</p>
</dd>
<dt><a href="#findIndex">findIndex(fn, x)</a></dt>
<dd><p>Finds the index of the first element that satisfies the given test func.</p>
</dd>
<dt><a href="#first">first(arr, n)</a></dt>
<dd><p>Get the first n elements of the given array.</p>
</dd>
<dt><a href="#head">head(arr)</a></dt>
<dd><p>Get the first value of the given array.</p>
</dd>
<dt><a href="#last">last(arr, n)</a></dt>
<dd><p>Get the last n elements of the given array.</p>
</dd>
<dt><a href="#tail">tail(arr)</a></dt>
<dd><p>Get the remaining elements of the array minus the head, or first, element.</p>
</dd>
<dt><a href="#clone">clone(x)</a></dt>
<dd><p>Clones the given object.</p>
</dd>
<dt><a href="#def">def(x)</a></dt>
<dd><p>Determines if the given value is defined.</p>
</dd>
<dt><a href="#isArray">isArray(arr)</a></dt>
<dd><p>Determines if the given value is an array.</p>
</dd>
<dt><a href="#isFunction">isFunction(fn)</a></dt>
<dd><p>Determines if the given value is a function.</p>
</dd>
<dt><a href="#isNumber">isNumber(n)</a></dt>
<dd><p>Determines if the given value is a number.</p>
</dd>
<dt><a href="#isObject">isObject()</a></dt>
<dd><p>Determines if the given value is an object.</p>
</dd>
<dt><a href="#isString">isString(a)</a></dt>
<dd><p>Determines if the given value is a string.</p>
</dd>
<dt><a href="#not">not(a)</a></dt>
<dd><p>Negates the given boolean-like value.</p>
</dd>
<dt><a href="#tap">tap(fn, a)</a></dt>
<dd><p>Calls the given function with the given value and returns the value.</p>
</dd>
<dt><a href="#undef">undef(x)</a></dt>
<dd><p>Determines if the given value is undefined.</p>
</dd>
</dl>

<a name="associate"></a>

## associate(prop, obj, val)
Sets the given property and value on the object. Returning a new object.

**Kind**: global function  
**Signature**: associate :: String -> Object -> a -> Object  

| Param | Type |
| --- | --- |
| prop | <code>String</code> | 
| obj | <code>Object</code> | 
| val | <code>Mixed</code> | 

**Example**  
```js
associate('c', { a: b }, d)
// { a: b, c: d }

associate('c')({ a: b })(d)
// { a: b, c: d }
```
<a name="average"></a>

## average(arr)
Averages the given array values

**Kind**: global function  
**Signature**: average :: [Number] -> Number  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
average([ 1, 2, 3 ]);
// 2

average(1, 2, 3);
// 2

average();
// 0
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
<a name="I"></a>

## I()
Returns the given value.

**Kind**: global function  
**Signature**: I :: a -> a  
**Aka**: identity  
**Lambda**: λa.a  
**Bird**: Idiot  
<a name="K"></a>

## K()
Takes two values and returns the given first.

**Kind**: global function  
**Signature**: K :: a -> b -> a  
**Aka**: constant  
**Lambda**: λab.a  
**Bird**: Kestrel  
<a name="OR"></a>

## OR()
Given two functions that take the same value, returns the first if the result is truthy, otherwise, the second.

**Kind**: global function  
**Signature**: OR :: (a -> b) -> (a -> b) -> b  
**Aka**: alternation  
<a name="Th"></a>

## Th()
Calls the given function with the given value. (Reverse order of apply)

**Kind**: global function  
**Signature**: Th :: a -> (a -> b) -> b  
**Aka**: thrush, applyTo  
**Lamda**: λaf.fa  
**Bird**: Thrush  
<a name="V"></a>

## V(a, b, f)
**Kind**: global function  
**Signature**: a -> b -> (a -> b -> c) -> c  
**Bird**: Vireo  
**Lamda**: λabf.fab  

| Param | Type |
| --- | --- |
| a | <code>Mixed</code> | 
| b | <code>Mixed</code> | 
| f | <code>function</code> | 

<a name="compact"></a>

## compact(arr)
Removes falsey values from an array.

**Kind**: global function  
**Signature**: compact :: [a] -> [a]  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
compact([ 0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34 ]);
// [ 1, 2, 3, 'a', 's', 34 ]

compact(null)
// []
```
<a name="compose"></a>

## compose()
Performs right-to-left function composition.

**Kind**: global function  
**Signature**: compose :: [(m -> n), ..., (b -> c), (a -> b)] -> a -> n  

| Param | Type |
| --- | --- |
| ...fns | <code>function</code> | 

**Example**  
```js
const addOne = x => x + 1;
const timeTen = x => x * 10;
const addOneTimeTen = compose(timeTen, addOne);
const result = addOneTimeTen(9);
// 100
```
<a name="concat"></a>

## concat(a, b)
Concatenates two String|Arrays together.
Returns empty array if value arent of the same type or not String|Array.

**Kind**: global function  
**Signature**: concat :: [a] -> [b] -> [c]  

| Param | Type |
| --- | --- |
| a | <code>String</code> \| <code>Array</code> | 
| b | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
concat('foo', 'bar')
// foobar

concat([1, 2], [3, 4])
// [1, 2, 3, 4]
```
<a name="concatN"></a>

## concatN()
Concatenates N Arrays together.

**Kind**: global function  
**Signature**: concat :: ([a], [b], ...[n]) -> [m]  

| Param | Type |
| --- | --- |
| ...a | <code>Array</code> | 

**Example**  
```js
concatN([1, 2], [3, 4], [5, 6])
// [1, 2, 3, 4, 5, 6]
```
<a name="curry"></a>

## curry(fn)
Wraps the given function, if the number of provided args is sufficient, call the passed function fn.
Otherwise, return a wrapped function fn that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function),
you can optionally pass the number of arguments to the second parameter arity.

**Kind**: global function  
**Signature**: curry :: ((a, b, ..., n) -> m) -> a -> b -> ...n -> m  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
const add = curry((x, y) => x + y);
const addFiveTo = add(5);
addFiveTo(10); // 15
```
<a name="deviation"></a>

## deviation(usePopulation, arr)
Returns the standard deviation of an array of numbers.

**Kind**: global function  
**Signature**: deviation :: Boolean -> [Number] -> Number  

| Param | Type |
| --- | --- |
| usePopulation | <code>Boolean</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
deviation([ 10, 2, 38, 23, 38, 23, 21 ]);
// 13.284434142114991 (sample)

deviation([ 10, 2, 38, 23, 38, 23, 21 ], true);
// 12.29899614287479 (population)
```
<a name="difference"></a>

## difference(a, b)
Returns the difference between two arrays.

**Kind**: global function  
**Signature**: difference :: [a] -> [b] -> [c]  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 
| b | <code>Array</code> | 

**Example**  
```js
difference([ 1, 2, 3 ], [ 1, 2, 4 ])
// [3]

difference([], [ 1, 2, 4 ])
// [ 1, 2, 4 ]

difference([ 1, 2, 3 ], [])
// [ 1, 2, 3 ]

difference([ 1, 2, 3 ], null)
// [ 1, 2, 3 ]
```
<a name="distinct"></a>

## distinct(arr)
Returns all of the distinct values of an array.

**Kind**: global function  
**Signature**: distinct :: [a] -> [b]  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
distinct([ 1, 2, 2, 3, 4, 4, 5 ])
// [ 1, 2, 3, 4, 5 ]
```
<a name="distinctN"></a>

## distinctN()
Returns all of the distinct values of the given arrays.

**Kind**: global function  
**Signature**: distinctN :: ([a], [b], ...[n]) -> [m]  

| Param | Type |
| --- | --- |
| ..arr | <code>Array</code> | 

**Example**  
```js
distinctN([ 1, 2 ], [ 2, 3, 4 ], [ 4, 5 ])
// [ 1, 2, 3, 4, 5 ]
```
<a name="each"></a>

## each(fn, arr)
Applies the given func to each element in the array.

**Kind**: global function  
**Signature**: each :: (a -> b) -> [c] -> undefined  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
difference(log, [1, 2, 3])
```
<a name="every"></a>

## every(fn, arr)
Determines if all elements in an array satisfy the given test function.

**Kind**: global function  
**Aka**: all  
**Signature**: every :: (a -> Boolean) -> [a] -> Boolean  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
every(Boolean, [1, 2, 3, 4])
// true

every(Boolean, [1, 2, null, 4])
// false
```
<a name="filter"></a>

## filter(func, arr)
Filters the array using the given function.

**Kind**: global function  
**Signature**: filter :: (a -> Boolean) -> [a] -> [a]  

| Param | Type |
| --- | --- |
| func | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
filter(x => x > 5, [1, 2, 3, 5, 6, 7])
// [6, 7]
```
<a name="find"></a>

## find(fn, x)
Finds the first element that satisfies the given test func.

**Kind**: global function  
**Signature**: find :: (a -> Boolean) -> [a] -> a  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| x | <code>Array</code> | 

**Example**  
```js
find(x => x.score === 5, [{score: 1}, {score: 2}, {score: 5}, {score: 6}, {score: 7}])
// {score: 5}
```
<a name="findIndex"></a>

## findIndex(fn, x)
Finds the index of the first element that satisfies the given test func.

**Kind**: global function  
**Signature**: find :: (a -> Boolean) -> [b] -> Number  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| x | <code>Array</code> | 

**Example**  
```js
findIndex(x => x.score === 5, [{score: 1}, {score: 2}, {score: 5}, {score: 6}, {score: 7}])
// 2
```
<a name="first"></a>

## first(arr, n)
Get the first n elements of the given array.

**Kind**: global function  
**Signature**: first :: [a] -> b -> [a]  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| n | <code>Number</code> | 

**Example**  
```js
first([1, 2, 3, 4, 5]) // [1]
first([1, 2, 3, 4, 5], 3) // [1, 2, 3]
```
<a name="head"></a>

## head(arr)
Get the first value of the given array.

**Kind**: global function  
**Signature**: head :: [a] -> a  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
head([1, 2, 3, 4, 5])
// [1]
```
<a name="last"></a>

## last(arr, n)
Get the last n elements of the given array.

**Kind**: global function  
**Signature**: last :: ([a], b) -> [a]  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>Array</code> |  | 
| n | <code>Number</code> | <code>1</code> | 

**Example**  
```js
last([1, 2, 3, 4, 5])
// [5]

last([1, 2, 3, 4, 5], 3)
// [3, 4, 5]
```
<a name="tail"></a>

## tail(arr)
Get the remaining elements of the array minus the head, or first, element.

**Kind**: global function  
**Signature**: tail :: [a] -> [a]  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
tail([1, 2, 3, 4, 5])
// [2, 3, 4, 5]
```
<a name="clone"></a>

## clone(x)
Clones the given object.

**Kind**: global function  
**Signature**: clone :: Object -> Object  

| Param | Type |
| --- | --- |
| x | <code>Object</code> | 

**Example**  
```js
clone({a: 1, b: 2})
// {a: 1, b: 2}
```
<a name="def"></a>

## def(x)
Determines if the given value is defined.

**Kind**: global function  
**Signature**: def :: a -> Boolean  

| Param | Type |
| --- | --- |
| x | <code>Mixed</code> | 

**Example**  
```js
def('foo bar')  // true
def(undefined)  // false
```
<a name="isArray"></a>

## isArray(arr)
Determines if the given value is an array.

**Kind**: global function  
**Signature**: isArray :: a -> Boolean  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
isArray([1, 2, 3])  // true
isArray({ a: 'b' })  // false
```
<a name="isFunction"></a>

## isFunction(fn)
Determines if the given value is a function.

**Kind**: global function  
**Signature**: isFunction :: a -> Boolean  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
isFunction(() => {})  // true
isFunction([1, 2, 3])  // false
```
<a name="isNumber"></a>

## isNumber(n)
Determines if the given value is a number.

**Kind**: global function  
**Signature**: isNumber :: a -> Boolean  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 

**Example**  
```js
isNumber(42)  // true
isNumber(8e5)  // true
isNumber(0x2F)  // true
isNumber('foo bar')  // false
```
<a name="isObject"></a>

## isObject()
Determines if the given value is an object.

**Kind**: global function  
**Signature**: isObject :: a -> Boolean  
**Example**  
```js
isObject({ a: 'b' })  // true
isObject([1, 2, 3])  // false
```
<a name="isString"></a>

## isString(a)
Determines if the given value is a string.

**Kind**: global function  
**Signature**: isString :: a -> Boolean  

| Param | Type |
| --- | --- |
| a | <code>String</code> | 

**Example**  
```js
isString('foo bar')  // true
isString({ a: 'b' })  // false
```
<a name="not"></a>

## not(a)
Negates the given boolean-like value.

**Kind**: global function  
**Signature**: not :: Boolean -> Boolean  

| Param | Type |
| --- | --- |
| a | <code>Boolean</code> | 

**Example**  
```js
not(true); // false
not(false); // true
not(2); // false
```
<a name="tap"></a>

## tap(fn, a)
Calls the given function with the given value and returns the value.

**Kind**: global function  
**Signature**: tap :: (a -> b) -> a -> a  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| a | <code>Mixed</code> | 

**Example**  
```js
tap(console.log, 'foobar') // foobar
```
<a name="undef"></a>

## undef(x)
Determines if the given value is undefined.

**Kind**: global function  
**Signature**: undef :: a -> Boolean  

| Param | Type |
| --- | --- |
| x | <code>Mixed</code> | 

**Example**  
```js
undef('foo bar')  // false
undef(undefined)  // true
```


## License

```
FJP is licensed under the MIT license.

Copyright © 2018 Bryan Kizer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
