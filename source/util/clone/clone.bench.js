import 'babel-core/register';
import clone from './index';

const data = {
  _id: '5a6e53eb1c70ecd1f4c531d4',
  index: 0,
  guid: '9abefcd4-a22a-4a49-8489-54bc576fad8c',
  isActive: true,
  name: {
    first: 'Alana',
    last: 'Hobbs',
  },
  company: null,
  email: 'alana.hobbs@comcur.com',
  phone: '+1 (945) 414-3657',
  address: '577 Moore Street, Dante, Utah, 6132',
  tags: [
    'adipisicing',
    'mollit',
    'in',
    'officia',
    'sit',
  ],
  range: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ],
  friends: [ {
    id: 0,
    name: 'Constance Noble',
  }, {
    id: 1,
    name: 'Sloan Gray',
  }, {
    id: 2,
    name: 'Gardner Parsons',
  } ],
};

function recursiveClone(o) {
  let i;

  if(!o || typeof o !== 'object') {
    return o;
  }

  if(Object.prototype.toString.apply(o) === '[object Array]') {
    const arr = [];

    for(i = 0; i < o.length; i += 1) {
      arr[i] = recursiveClone(o[i]);
    }

    return arr;
  }

  const obj = {};

  for(i in o) {
    if(o.hasOwnProperty(i)) {
      obj[i] = recursiveClone(o[i]);
    }
  }

  return obj;
}

/* eslint-disable no-return-assign, no-sequences */
function es6PrimLast(val) {
  return Object.prototype.toString.apply(val) === '[object Array]' ?
    val.map(i => es6PrimLast(i)) :
    val != null && typeof val === 'object' ?
      Object.keys(val).reduce((acc, curr) => (acc[curr] = es6PrimLast(val[curr]), acc), {}) :
      val;
}

function es6PrimLastIsArray(val) {
  return Array.isArray(val) ?
    val.map(i => es6PrimLastIsArray(i)) :
    val != null && typeof val === 'object' ?
      Object.keys(val).reduce((acc, curr) => (acc[curr] = es6PrimLastIsArray(val[curr]), acc), {}) :
      val;
}

function es6PrimitiveFirst(val) {
  return !val || typeof val !== 'object' ?
    val :
    Object.prototype.toString.apply(val) === '[object Array]' ?
      val.map(i => es6PrimitiveFirst(i)) :
      Object.keys(val).reduce((acc, curr) => (acc[curr] = es6PrimitiveFirst(val[curr]), acc), {});
}
/* eslint-enable no-return-assign, no-sequences */

module.exports = {
  name: 'clone',
  tests: {
    ['JSON.parse(JSON.stringify(x))']() {
      JSON.parse(JSON.stringify(data));
    },
    ['Object.assign({}, x) [Shallow]']() {
      Object.assign({}, data);
    },
    ['recursiveClone(x) *']() {
      recursiveClone(data);
    },
    ['es6PrimLast(x)']() {
      es6PrimLast(data);
    },
    ['es6PrimLastIsArray(x)']() {
      es6PrimLastIsArray(data);
    },
    ['es6PrimitiveFirst(x)']() {
      es6PrimitiveFirst(data);
    },
    ['fjp.clone(x) *']() {
      clone(data);
    },
  },
};

/*
┌────────────────────────────────────────┬────────────────────┬────────────────────┐
│ clone                                  │ Hertz              │ Margin of Error    │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ JSON.parse(JSON.stringify(x))          │ 191,322            │ 0.31%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ Object.assign({}, x) [Shallow]         │ 698,839            │ 0.31%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ recursiveClone(x) *                    │ 1,364,483          │ 0.15%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ es6PrimLast(x)                         │ 590,125            │ 0.37%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ es6PrimLastIsArray(x)                  │ 646,152            │ 0.38%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ es6PrimitiveFirst(x)                   │ 635,856            │ 0.42%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ fjp.clone(x) *                         │ 1,403,874          │ 0.59%              │
└────────────────────────────────────────┴────────────────────┴────────────────────┘
*/
