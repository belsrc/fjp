(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.fjp = {})));
}(this, (function (exports) { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  function clone(x) {
    var i = void 0;

    if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
      return x;
    }

    if (x instanceof Date) {
      return new Date(x);
    }

    if (Array.isArray(x)) {
      var arr = [];

      for (i = 0; i < x.length; i += 1) {
        arr[i] = clone(x[i]);
      }

      return arr;
    }

    if (x instanceof Object && x.constructor === Object) {
      var obj = {};

      for (i in x) {
        if (x.hasOwnProperty(i)) {
          obj[i] = clone(x[i]);
        }
      }

      return obj;
    }

    return x;
  }

  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var isObject = function isObject(value) {
    return value != null && !Array.isArray(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
  };

  var isString = function isString(value) {
    return value != null && value.constructor === String;
  };

  var isNumber = function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var not = function not(x) {
    return !x;
  };

  function curry(fn) {
    var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return arity <= args.length ? fn.apply(undefined, args) : curry.bind.apply(curry, [null, fn, arity].concat(args));
  }

  var tap = curry(function (x, y) {
    x(y);
    return y;
  });

  var A = curry(function (f, x) {
    return f(x);
  });

  var I = function I(x) {
    return x;
  };

  var K = curry(function (x, y) {
    return x;
  });

  var OR = curry(function (f, g) {
    return function (x) {
      return f(x) || g(x);
    };
  });

  var Fork = curry(function (joiner, fnA, fnB, x) {
    return joiner(fnA(x), fnB(x));
  });

  var T = curry(function (x, f) {
    return f(x);
  });

  var Maybe = function () {
    function Maybe() {
      classCallCheck(this, Maybe);
    }

    createClass(Maybe, [{
      key: "flatten",
      value: function flatten() {
        return this;
      }
    }, {
      key: "join",
      value: function join() {
        return this;
      }
    }, {
      key: "filter",
      value: function filter() {
        return this;
      }
    }, {
      key: "map",
      value: function map() {
        return this;
      }
    }, {
      key: "chain",
      value: function chain(fn) {
        return this.map(fn).flatten();
      }
    }, {
      key: "isNothing",
      get: function get$$1() {
        return false;
      }
    }, {
      key: "isJust",
      get: function get$$1() {
        return false;
      }
    }], [{
      key: "of",
      value: function of(x) {
        return x !== undefined && x !== null ? new _Just(x) : new Nothing();
      }
    }, {
      key: "Just",
      value: function Just(x) {
        return new _Just(x);
      }
    }, {
      key: "None",
      value: function None() {
        return new Nothing();
      }
    }, {
      key: "fromNullable",
      value: function fromNullable(x) {
        return Maybe.of(x);
      }
    }, {
      key: "lift",
      value: function lift(fn, x) {
        return Maybe.of(x).map(fn);
      }
    }]);
    return Maybe;
  }();

  var _Just = function (_Maybe) {
    inherits(_Just, _Maybe);

    function _Just(val) {
      classCallCheck(this, _Just);

      var _this = possibleConstructorReturn(this, (_Just.__proto__ || Object.getPrototypeOf(_Just)).call(this));

      _this._val = val;
      return _this;
    }

    createClass(_Just, [{
      key: "map",
      value: function map(fn) {
        return Maybe.of(fn(this._val));
      }
    }, {
      key: "flatten",
      value: function flatten() {
        if (!(this._val instanceof _Just)) {
          return this;
        }

        return this._val.flatten();
      }
    }, {
      key: "join",
      value: function join() {
        return this.flatten();
      }
    }, {
      key: "orElse",
      value: function orElse() {
        return this._val;
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        Maybe.of(fn(this._val) ? this._val : null);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "Maybe.Just(" + this._val + ")";
      }
    }, {
      key: "value",
      get: function get$$1() {
        return this._val;
      }
    }, {
      key: "isJust",
      get: function get$$1() {
        return true;
      }
    }]);
    return _Just;
  }(Maybe);

  var Nothing = function (_Maybe2) {
    inherits(Nothing, _Maybe2);

    function Nothing() {
      classCallCheck(this, Nothing);
      return possibleConstructorReturn(this, (Nothing.__proto__ || Object.getPrototypeOf(Nothing)).call(this));
    }

    createClass(Nothing, [{
      key: "orElse",
      value: function orElse(other) {
        return other;
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'Maybe.Nothing';
      }
    }, {
      key: "value",
      get: function get$$1() {
        throw new TypeError("Can't extract the value of a Nothing");
      }
    }, {
      key: "isNothing",
      get: function get$$1() {
        return true;
      }
    }]);
    return Nothing;
  }(Maybe);

  var Either = function () {
    function Either() {
      classCallCheck(this, Either);
    }

    createClass(Either, [{
      key: 'join',
      value: function join() {
        if (this.value instanceof Either) {
          return this.value.join();
        }

        return this;
      }
    }, {
      key: 'map',
      value: function map(fn) {
        return Either.of(fn(this._val));
      }
    }, {
      key: 'flatMap',
      value: function flatMap(fn) {
        return this.map(fn).join();
      }
    }, {
      key: 'filter',
      value: function filter() {
        return this;
      }
    }, {
      key: 'chain',
      value: function chain(fn) {
        return this.isRight ? fn(this._val) : this;
      }
    }, {
      key: 'cata',
      value: function cata(leftFn, rightFn) {
        return this.isRight ? rightFn(this._val) : leftFn(this._val);
      }
    }, {
      key: 'orElseFn',
      value: function orElseFn() {
        return this;
      }
    }, {
      key: 'toMaybe',
      value: function toMaybe() {
        return this.cata(Maybe.None, Maybe.Just);
      }
    }, {
      key: 'isRight',
      get: function get$$1() {
        return false;
      }
    }, {
      key: 'isLeft',
      get: function get$$1() {
        return false;
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this._val;
      }
    }], [{
      key: 'of',
      value: function of(x) {
        return x !== undefined && x !== null && !(x instanceof Error) ? new _Right(x) : new _Left(x);
      }
    }, {
      key: 'fromNullable',
      value: function fromNullable(x) {
        return Either.of(x);
      }
    }, {
      key: 'Right',
      value: function Right(x) {
        return new _Right(x);
      }
    }, {
      key: 'Left',
      value: function Left(x) {
        return new _Left(x);
      }
    }, {
      key: 'try',
      value: function _try(fn) {
        try {
          var result = fn();

          return Either.of(result);
        } catch (e) {
          return Either.Left(e);
        }
      }
    }]);
    return Either;
  }();

  var _Right = function (_Either) {
    inherits(_Right, _Either);

    function _Right(val) {
      classCallCheck(this, _Right);

      var _this = possibleConstructorReturn(this, (_Right.__proto__ || Object.getPrototypeOf(_Right)).call(this));

      _this._val = val;
      return _this;
    }

    createClass(_Right, [{
      key: 'filter',
      value: function filter(fn) {
        Either.of(fn(this._val) ? this._val : null);
      }
    }, {
      key: 'orElse',
      value: function orElse() {
        return this._val;
      }
    }, {
      key: 'asyncChain',
      value: function () {
        var _ref = asyncToGenerator(regeneratorRuntime.mark(function _callee(fn) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fn(this._val);

                case 2:
                  return _context.abrupt('return', _context.sent);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function asyncChain(_x) {
          return _ref.apply(this, arguments);
        }

        return asyncChain;
      }()
    }, {
      key: 'toString',
      value: function toString() {
        return 'Either.Right(' + this.value + ')';
      }
    }, {
      key: 'isRight',
      get: function get$$1() {
        return true;
      }
    }]);
    return _Right;
  }(Either);

  var _Left = function (_Either2) {
    inherits(_Left, _Either2);

    function _Left(val) {
      classCallCheck(this, _Left);

      var _this2 = possibleConstructorReturn(this, (_Left.__proto__ || Object.getPrototypeOf(_Left)).call(this));

      _this2._val = val;
      return _this2;
    }

    createClass(_Left, [{
      key: 'orElse',
      value: function orElse(other) {
        return other;
      }
    }, {
      key: 'orElseFn',
      value: function orElseFn(fn) {
        return fn(this._val);
      }
    }, {
      key: 'toString',
      value: function toString() {
        return 'Either.Left(' + this._val + ')';
      }
    }, {
      key: 'isLeft',
      get: function get$$1() {
        return true;
      }
    }]);
    return _Left;
  }(Either);

  var IO = function () {
    function IO(effect) {
      classCallCheck(this, IO);

      if (!isFunction(effect)) {
        throw new Error('effect needs to be a function');
      }

      this._effect = effect;
    }

    createClass(IO, [{
      key: 'map',
      value: function map(fn) {
        var _this = this;

        return new IO(function () {
          return fn(_this._effect());
        });
      }
    }, {
      key: 'chain',
      value: function chain(fn) {
        return fn(this._effect());
      }
    }, {
      key: 'run',
      value: function run() {
        return this._effect();
      }
    }], [{
      key: 'of',
      value: function of(val) {
        return new IO(function () {
          return val;
        });
      }
    }, {
      key: 'from',
      value: function from(fn) {
        return new IO(fn);
      }
    }]);
    return IO;
  }();

  var every = curry(function (fn, arr) {
    return isArray(arr) && isFunction(fn) ? arr.every(fn) : false;
  });

  var associate = curry(function (prop, obj, val) {
    var c = clone(obj);

    c[prop] = val;
    return c;
  });

  var altAssoc = curry(function (prop, val, obj) {
    return associate(prop, obj, val);
  });

  var reduce = curry(function (init, fn, arr) {
    return !isFunction(fn) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr.reduce(fn, init)) : [];
  });

  var sum = curry(function (arr) {
    return isArray(arr) ? reduce(0, function (acc, val) {
      return acc + Number(val);
    }, arr) : 0;
  });

  var average = function average() {
    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    return isArray(nums) && nums.length ? sum([].concat(nums)) / [].concat(nums).length : 0;
  };

  var both = function both(f, g) {
    return function (x) {
      return f(x) && g(x);
    };
  };

  var compact = function compact(arr) {
    return isArray(arr) ? arr.filter(Boolean) : [];
  };

  var compose = function compose() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(undefined, arguments));
      };
    });
  };

  var concat = curry(function (a, b) {
    return isArray(a) && isArray(b) ? a.concat(b) : isString(a) && isString(b) ? '' + a + b : [];
  });

  var concatN = function concatN() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return reduce([], function (acc, val) {
      return [].concat(toConsumableArray(acc), toConsumableArray(val));
    }, args);
  };

  var deviation = curry(function (usePopulation, arr) {
    var mean = arr.reduce(function (acc, val) {
      return acc + val;
    }, 0) / arr.length;

    return Math.sqrt(arr.reduce(function (acc, val) {
      return acc.concat(Math.pow(val - mean, 2));
    }, []).reduce(function (acc, val) {
      return acc + val;
    }, 0) / (arr.length - (usePopulation ? 0 : 1)));
  });

  var difference = curry(function (a, b) {
    var s = isArray(b) && b.length ? new Set(b) : new Set();

    return isArray(a) && a.length ? a.filter(function (x) {
      return !s.has(x);
    }) : [].concat(toConsumableArray(s));
  });

  var distinct = function distinct(arr) {
    return isArray(arr) ? [].concat(toConsumableArray(new Set(arr))) : [];
  };

  var distinctN = function distinctN() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [].concat(toConsumableArray(new (Function.prototype.bind.apply(Set, [null].concat(args)))()));
  };

  var index = curry(function (func, arr) {
    return isArray(arr) ? isFunction(func) ? [].concat(toConsumableArray(new Set(arr.map(func)))) : [].concat(toConsumableArray(new Set(arr))) : [];
  });

  var each = curry(function (fn, arr) {
    return arr.forEach(fn);
  });

  var filter = curry(function (func, arr) {
    return !isFunction(func) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? arr.filter(func) : [];
  });

  var find = curry(function (fn, x) {
    return x.find(fn);
  });

  var index$1 = curry(function (fn, x) {
    return x.findIndex(fn);
  });

  var flatten = reduce([], function (acc, curr) {
    return [].concat(toConsumableArray(acc), toConsumableArray(curr));
  });

  var _groupBy = curry(function (func, arr) {
    return func != null && isArray(arr) ? arr.map(isFunction(func) ? func : function (val) {
      return val[func];
    }).reduce(function (acc, val, i) {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {}) : {};
  });

  var map = curry(function (func, arr) {
    return !isFunction(func) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? arr.map(func) : [];
  });

  function select(arr, obj) {
    arr.reduce(function (acc, curr) {
      var split = curr.split('.');

      return split.length > 1 ? acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]) : (curr in obj && (acc[curr] = obj[curr]), acc);
    }, {});
  }

  var _select = curry(select);

  var sort = curry(function (fn, arr) {
    return !isFunction(fn) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr).sort(fn) : [];
  });

  var index$2 = (function (arr) {
    var _array = arr || [];

    return {
      where: function where(func) {
        _array = filter(func, _array);
        return this;
      },
      orderBy: function orderBy(func) {
        _array = sort(_array, func);
        return this;
      },
      groupBy: function groupBy(func) {
        return _groupBy(func, _array);
      },
      distinct: function distinct$$1(func) {
        _array = distinct(_array, func);
        return this;
      },
      select: function select(props) {
        _array = map(function (item) {
          return _select(item, props);
        }, _array);
        return this;
      },
      value: function value() {
        return clone(_array);
      }
    };
  });

  var index$3 = curry(function (a, b) {
    var s = isArray(b) ? new Set(b) : new Set();

    return isArray(a) ? a.filter(function (x) {
      return s.has(x);
    }) : [].concat(toConsumableArray(s));
  });

  var index$4 = curry(function (sep, arr) {
    return arr.join(sep);
  });

  var index$5 = curry(function (a, b) {
    return Object.assign({}, clone(a), clone(b));
  });

  var index$6 = curry(function (value, arr) {
    return isArray(arr) ? arr.reduce(function (acc, val) {
      return val === value ? acc + 1 : acc;
    }, 0) : 0;
  });

  var index$7 = (function (fn) {
    for (var _len = arguments.length, partialArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      partialArgs[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, remainingArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        remainingArgs[_key2] = arguments[_key2];
      }

      return fn.apply(undefined, partialArgs.concat(remainingArgs));
    };
  });

  var index$8 = (function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(undefined, arguments));
      };
    });
  });

  var index$9 = (function (arr) {
    return !isArray(arr) || !arr.length ? [] : clone(arr).slice(0, arr.length - 1);
  });

  var index$a = (function (func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        return func.apply(undefined, args.concat([function (err, result) {
          return err ? reject(err) : resolve(result);
        }]));
      });
    };
  });

  var index$b = curry(function (prop, obj) {
    return clone(obj[prop]);
  });

  var index$c = curry(function (val, arr) {
    return isArray(arr) ? [].concat(toConsumableArray(clone(arr)), [val]) : [val];
  });

  var index$d = curry(function (init, fn, arr) {
    return !isFunction(fn) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr.reduceRight(fn, init)) : [];
  });

  var index$e = (function (arr) {
    return isArray(arr) ? clone(arr).reverse() : [];
  });

  var index$f = (function (arr) {
    return !isArray(arr) || !arr.length ? [] : clone(arr).slice(1);
  });

  var index$g = (function (_ref) {
    var _ref2 = toArray(_ref),
        arr = _ref2.slice(0);

    var carr = clone(arr);
    var m = carr.length;

    while (m) {
      var i = Math.floor(Math.random() * m--);

      var _ref3 = [carr[i], carr[m]];
      carr[m] = _ref3[0];
      carr[i] = _ref3[1];
    }

    return carr;
  });

  var index$h = curry(function (start, end, arr) {
    return isArray(arr) ? clone(arr).slice(start, end) : [];
  });

  var some = curry(function (fn, arr) {
    return isArray(arr) && isFunction(fn) ? arr.some(fn) : false;
  });

  var index$i = (function () {
    var _ref;

    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    return isArray(nums) ? reduce(0, function (acc, val) {
      return acc + Number(val);
    }, (_ref = []).concat.apply(_ref, nums)) : 0;
  });

  var index$j = curry(function (a, b) {
    var sA = isArray(a) ? new Set(a) : new Set();
    var sB = isArray(b) ? new Set(b) : new Set();

    return [].concat(toConsumableArray(a.filter(function (x) {
      return !sB.has(x);
    })), toConsumableArray(b.filter(function (x) {
      return !sA.has(x);
    })));
  });

  var index$k = curry(function (a, b) {
    return Array.from(new Set([].concat(toConsumableArray(isArray(a) ? a : []), toConsumableArray(isArray(b) ? b : []))));
  });

  var index$l = curry(function (val, arr) {
    return isArray(arr) ? [val].concat(toConsumableArray(clone(arr))) : [val];
  });

  exports.clone = clone;
  exports.isArray = isArray;
  exports.isFunction = isFunction;
  exports.isObject = isObject;
  exports.isString = isString;
  exports.isNumber = isNumber;
  exports.not = not;
  exports.tap = tap;
  exports.A = A;
  exports.apply = A;
  exports.I = I;
  exports.identity = I;
  exports.K = K;
  exports.constant = K;
  exports.OR = OR;
  exports.alternation = OR;
  exports.fork = Fork;
  exports.T = T;
  exports.thrush = T;
  exports.applyTo = T;
  exports.Maybe = Maybe;
  exports.Either = Either;
  exports.IO = IO;
  exports.all = every;
  exports.associate = associate;
  exports.assoc = associate;
  exports.altAssociate = altAssoc;
  exports.altAssoc = altAssoc;
  exports.average = average;
  exports.both = both;
  exports.compact = compact;
  exports.compose = compose;
  exports.concat = concat;
  exports.concatN = concatN;
  exports.curry = curry;
  exports.deviation = deviation;
  exports.difference = difference;
  exports.distinct = distinct;
  exports.distinctN = distinctN;
  exports.distinctFn = index;
  exports.each = each;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = index$1;
  exports.flatten = flatten;
  exports.from = index$2;
  exports.groupBy = _groupBy;
  exports.intersection = index$3;
  exports.join = index$4;
  exports.map = map;
  exports.merge = index$5;
  exports.occurrence = index$6;
  exports.partial = index$7;
  exports.pipe = index$8;
  exports.pop = index$9;
  exports.promisify = index$a;
  exports.property = index$b;
  exports.push = index$c;
  exports.reduce = reduce;
  exports.reduceRight = index$d;
  exports.reverse = index$e;
  exports.select = _select;
  exports.shift = index$f;
  exports.shuffle = index$g;
  exports.slice = index$h;
  exports.some = some;
  exports.sort = sort;
  exports.sum = sum;
  exports.sumN = index$i;
  exports.symmetricDifference = index$j;
  exports.union = index$k;
  exports.unshift = index$l;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
