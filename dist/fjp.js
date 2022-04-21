(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fjp = {}));
})(this, (function (exports) { 'use strict';

  function clone(x) {
    var i;

    if (!x || babelHelpers.typeof(x) !== 'object') {
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
    return value != null && !Array.isArray(value) && babelHelpers.typeof(value) === 'object';
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

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return arity <= args.length ? fn.apply(void 0, args) : curry.bind.apply(curry, [null, fn, arity].concat(args));
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

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Maybe = function () {
    function Maybe() {
      babelHelpers.classCallCheck(this, Maybe);
    }

    babelHelpers.createClass(Maybe, [{
      key: "isNothing",
      get: function get() {
        return false;
      }
    }, {
      key: "isJust",
      get: function get() {
        return false;
      }
    }, {
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
    babelHelpers.inherits(_Just, _Maybe);

    var _super = _createSuper$1(_Just);

    function _Just(val) {
      var _this;

      babelHelpers.classCallCheck(this, _Just);
      _this = _super.call(this);
      _this._val = val;
      return _this;
    }

    babelHelpers.createClass(_Just, [{
      key: "value",
      get: function get() {
        return this._val;
      }
    }, {
      key: "isJust",
      get: function get() {
        return true;
      }
    }, {
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
        return Maybe.of(fn(this._val) ? this._val : null);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "Maybe.Just(".concat(this._val, ")");
      }
    }]);
    return _Just;
  }(Maybe);

  var Nothing = function (_Maybe2) {
    babelHelpers.inherits(Nothing, _Maybe2);

    var _super2 = _createSuper$1(Nothing);

    function Nothing() {
      babelHelpers.classCallCheck(this, Nothing);
      return _super2.call(this);
    }

    babelHelpers.createClass(Nothing, [{
      key: "value",
      get: function get() {
        throw new TypeError("Can't extract the value of a Nothing");
      }
    }, {
      key: "isNothing",
      get: function get() {
        return true;
      }
    }, {
      key: "orElse",
      value: function orElse(other) {
        return other;
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'Maybe.Nothing';
      }
    }]);
    return Nothing;
  }(Maybe);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Either = function () {
    function Either() {
      babelHelpers.classCallCheck(this, Either);
    }

    babelHelpers.createClass(Either, [{
      key: "isRight",
      get: function get() {
        return false;
      }
    }, {
      key: "isLeft",
      get: function get() {
        return false;
      }
    }, {
      key: "value",
      get: function get() {
        return this._val;
      }
    }, {
      key: "join",
      value: function join() {
        if (this.value instanceof Either) {
          return this.value.join();
        }

        return this;
      }
    }, {
      key: "map",
      value: function map(fn) {
        return Either.of(fn(this._val));
      }
    }, {
      key: "flatMap",
      value: function flatMap(fn) {
        return this.map(fn).join();
      }
    }, {
      key: "filter",
      value: function filter() {
        return this;
      }
    }, {
      key: "chain",
      value: function chain(fn) {
        return this.isRight ? fn(this._val) : this;
      }
    }, {
      key: "cata",
      value: function cata(leftFn, rightFn) {
        return this.isRight ? rightFn(this._val) : leftFn(this._val);
      }
    }, {
      key: "orElseFn",
      value: function orElseFn() {
        return this;
      }
    }, {
      key: "toMaybe",
      value: function toMaybe() {
        return this.cata(Maybe.None, Maybe.Just);
      }
    }], [{
      key: "of",
      value: function of(x) {
        return x !== undefined && x !== null && !(x instanceof Error) ? new _Right(x) : new _Left(x);
      }
    }, {
      key: "fromNullable",
      value: function fromNullable(x) {
        return Either.of(x);
      }
    }, {
      key: "Right",
      value: function Right(x) {
        return new _Right(x);
      }
    }, {
      key: "Left",
      value: function Left(x) {
        return new _Left(x);
      }
    }, {
      key: "try",
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
    babelHelpers.inherits(_Right, _Either);

    var _super = _createSuper(_Right);

    function _Right(val) {
      var _this;

      babelHelpers.classCallCheck(this, _Right);
      _this = _super.call(this);
      _this._val = val;
      return _this;
    }

    babelHelpers.createClass(_Right, [{
      key: "isRight",
      get: function get() {
        return true;
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return Either.of(fn(this._val) ? this._val : null);
      }
    }, {
      key: "orElse",
      value: function orElse() {
        return this._val;
      }
    }, {
      key: "asyncChain",
      value: function () {
        var _asyncChain = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee(fn) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fn(this._val);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function asyncChain(_x) {
          return _asyncChain.apply(this, arguments);
        }

        return asyncChain;
      }()
    }, {
      key: "toString",
      value: function toString() {
        return "Either.Right(".concat(this.value, ")");
      }
    }]);
    return _Right;
  }(Either);

  var _Left = function (_Either2) {
    babelHelpers.inherits(_Left, _Either2);

    var _super2 = _createSuper(_Left);

    function _Left(val) {
      var _this2;

      babelHelpers.classCallCheck(this, _Left);
      _this2 = _super2.call(this);
      _this2._val = val;
      return _this2;
    }

    babelHelpers.createClass(_Left, [{
      key: "isLeft",
      get: function get() {
        return true;
      }
    }, {
      key: "orElse",
      value: function orElse(other) {
        return other;
      }
    }, {
      key: "orElseFn",
      value: function orElseFn(fn) {
        return fn(this._val);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "Either.Left(".concat(this._val, ")");
      }
    }]);
    return _Left;
  }(Either);

  var IO = function () {
    function IO(effect) {
      babelHelpers.classCallCheck(this, IO);

      if (!isFunction(effect)) {
        throw new Error('effect needs to be a function');
      }

      this._effect = effect;
    }

    babelHelpers.createClass(IO, [{
      key: "map",
      value: function map(fn) {
        var _this = this;

        return new IO(function () {
          return fn(_this._effect());
        });
      }
    }, {
      key: "chain",
      value: function chain(fn) {
        return fn(this._effect());
      }
    }, {
      key: "run",
      value: function run() {
        return this._effect();
      }
    }], [{
      key: "of",
      value: function of(val) {
        return new IO(function () {
          return val;
        });
      }
    }, {
      key: "from",
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
    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
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
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(void 0, arguments));
      };
    });
  };

  var concat = curry(function (a, b) {
    return isArray(a) && isArray(b) ? [].concat(babelHelpers.toConsumableArray(a), babelHelpers.toConsumableArray(b)) : isString(a) && isString(b) ? "".concat(a).concat(b) : [];
  });

  var concatN = function concatN() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return reduce([], function (acc, val) {
      return [].concat(babelHelpers.toConsumableArray(acc), babelHelpers.toConsumableArray(val));
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
    }) : babelHelpers.toConsumableArray(s);
  });

  var distinct = function distinct(arr) {
    return isArray(arr) ? babelHelpers.toConsumableArray(new Set(arr)) : [];
  };

  var distinctN = function distinctN() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return babelHelpers.toConsumableArray(babelHelpers.construct(Set, args));
  };

  var index$g = curry(function (func, arr) {
    return isArray(arr) ? isFunction(func) ? babelHelpers.toConsumableArray(new Set(arr.map(func))) : babelHelpers.toConsumableArray(new Set(arr)) : [];
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

  var index$f = curry(function (fn, x) {
    return x.findIndex(fn);
  });

  var flatten = reduce(function (acc, curr) {
    return [].concat(babelHelpers.toConsumableArray(acc), babelHelpers.toConsumableArray(curr));
  }, []);

  var index$e = curry(function (func, arr) {
    return func != null && isArray(arr) ? arr.map(isFunction(func) ? func : function (val) {
      return val[func];
    }).reduce(function (acc, val, i) {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {}) : {};
  });

  var index$d = curry(function (a, b) {
    var s = isArray(b) ? new Set(b) : new Set();
    return isArray(a) ? a.filter(function (x) {
      return s.has(x);
    }) : babelHelpers.toConsumableArray(s);
  });

  var index$c = curry(function (sep, arr) {
    return arr.join(sep);
  });

  var index$b = curry(function (func, arr) {
    return !isFunction(func) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? arr.map(func) : [];
  });

  var index$a = curry(function (a, b) {
    return Object.assign({}, clone(a), clone(b));
  });

  var index$9 = curry(function (value, arr) {
    return isArray(arr) ? arr.reduce(function (acc, val) {
      return val === value ? acc + 1 : acc;
    }, 0) : 0;
  });

  var partial = function partial(fn) {
    for (var _len = arguments.length, partialArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      partialArgs[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, remainingArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        remainingArgs[_key2] = arguments[_key2];
      }

      return fn.apply(void 0, partialArgs.concat(remainingArgs));
    };
  };

  var pipe = function pipe() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return g(f.apply(void 0, arguments));
      };
    });
  };

  var pop = function pop(arr) {
    return !isArray(arr) || !arr.length ? [] : clone(arr).slice(0, arr.length - 1);
  };

  var promisify = function promisify(func) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        return func.apply(void 0, args.concat([function (err, result) {
          return err ? reject(err) : resolve(result);
        }]));
      });
    };
  };

  var index$8 = curry(function (prop, obj) {
    return clone(obj[prop]);
  });

  var index$7 = curry(function (val, arr) {
    return isArray(arr) ? [].concat(babelHelpers.toConsumableArray(clone(arr)), [val]) : [val];
  });

  var index$6 = curry(function (init, fn, arr) {
    return !isFunction(fn) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr.reduceRight(fn, init)) : [];
  });

  var reverse = function reverse(arr) {
    return isArray(arr) ? clone(arr).reverse() : [];
  };

  var select = function select(arr, obj) {
    return arr.reduce(function (acc, curr) {
      var split = curr.split('.');
      return split.length > 1 ? acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]) : (curr in obj && (acc[curr] = obj[curr]), acc);
    }, {});
  };

  var index$5 = curry(select);

  var shift = function shift(arr) {
    return !isArray(arr) || !arr.length ? [] : clone(arr).slice(1);
  };

  var shuffle = function shuffle(_ref) {
    var _ref2 = babelHelpers.toArray(_ref),
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
  };

  var index$4 = curry(function (start, end, arr) {
    return isArray(arr) ? clone(arr).slice(start, end) : [];
  });

  var some = curry(function (fn, arr) {
    return isArray(arr) && isFunction(fn) ? arr.some(fn) : false;
  });

  var index$3 = curry(function (fn, arr) {
    return !isFunction(fn) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr).sort(fn) : [];
  });

  var sumN = function sumN() {
    var _ref;

    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    return isArray(nums) ? reduce(0, function (acc, val) {
      return acc + Number(val);
    }, (_ref = []).concat.apply(_ref, nums)) : 0;
  };

  var index$2 = curry(function (a, b) {
    var sA = isArray(a) ? new Set(a) : new Set();
    var sB = isArray(b) ? new Set(b) : new Set();
    return [].concat(babelHelpers.toConsumableArray(a.filter(function (x) {
      return !sB.has(x);
    })), babelHelpers.toConsumableArray(b.filter(function (x) {
      return !sA.has(x);
    })));
  });

  var index$1 = curry(function (a, b) {
    return Array.from(new Set([].concat(babelHelpers.toConsumableArray(isArray(a) ? a : []), babelHelpers.toConsumableArray(isArray(b) ? b : []))));
  });

  var index = curry(function (val, arr) {
    return isArray(arr) ? [val].concat(babelHelpers.toConsumableArray(clone(arr))) : [val];
  });

  exports.A = A;
  exports.Either = Either;
  exports.I = I;
  exports.IO = IO;
  exports.K = K;
  exports.Maybe = Maybe;
  exports.OR = OR;
  exports.T = T;
  exports.all = every;
  exports.altAssoc = altAssoc;
  exports.altAssociate = altAssoc;
  exports.alternation = OR;
  exports.apply = A;
  exports.applyTo = T;
  exports.assoc = associate;
  exports.associate = associate;
  exports.average = average;
  exports.both = both;
  exports.clone = clone;
  exports.compact = compact;
  exports.compose = compose;
  exports.concat = concat;
  exports.concatN = concatN;
  exports.constant = K;
  exports.curry = curry;
  exports.deviation = deviation;
  exports.difference = difference;
  exports.distinct = distinct;
  exports.distinctFn = index$g;
  exports.distinctN = distinctN;
  exports.each = each;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = index$f;
  exports.flatten = flatten;
  exports.fork = Fork;
  exports.groupBy = index$e;
  exports.identity = I;
  exports.intersection = index$d;
  exports.isArray = isArray;
  exports.isFunction = isFunction;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isString = isString;
  exports.join = index$c;
  exports.map = index$b;
  exports.merge = index$a;
  exports.not = not;
  exports.occurrence = index$9;
  exports.partial = partial;
  exports.pipe = pipe;
  exports.pop = pop;
  exports.promisify = promisify;
  exports.property = index$8;
  exports.push = index$7;
  exports.reduce = reduce;
  exports.reduceRight = index$6;
  exports.reverse = reverse;
  exports.select = index$5;
  exports.shift = shift;
  exports.shuffle = shuffle;
  exports.slice = index$4;
  exports.some = some;
  exports.sort = index$3;
  exports.sum = sum;
  exports.sumN = sumN;
  exports.symmetricDifference = index$2;
  exports.tap = tap;
  exports.thrush = T;
  exports.union = index$1;
  exports.unshift = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fjp.js.map
