/* eslint-disable fp-jxl/no-this, fp-jxl/no-class, fp-jxl/no-mutation */

class Maybe {
  static of(x) {
    // eslint-disable-next-line no-use-before-define
    return x !== undefined && x !== null ? new Just(x) : new Nothing();
  }

  static Just(x) {
    // eslint-disable-next-line no-use-before-define
    return new Just(x);
  }

  static None() {
    // eslint-disable-next-line no-use-before-define
    return new Nothing();
  }

  static fromNullable(x) {
    return Maybe.of(x);
  }

  static lift(fn, x) {
    return Maybe.of(x).map(fn);
  }

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }

  flatten() {
    return this;
  }

  join() {
    return this;
  }

  filter() {
    return this;
  }

  map() {
    return this;
  }

  chain(fn) {
    return this.map(fn).flatten();
  }
}

class Just extends Maybe {
  // eslint-disable-next-line fp-jxl/no-nil
  constructor(val) {
    super();
    this._val = val;
  }

  get value() {
    return this._val;
  }

  get isJust() {
    return true;
  }

  map(fn) {
    return Maybe.of(fn(this._val));
  }

  flatten() {
    if(!(this._val instanceof Just)) {
      return this;
    }

    return this._val.flatten();
  }

  join() {
    return this.flatten();
  }

  orElse() {
    return this._val;
  }

  filter(fn) {
    // eslint-disable-next-line fp-jxl/no-nil
    return Maybe.of(fn(this._val) ? this._val : null);
  }

  toString() {
    return `Maybe.Just(${ this._val })`;
  }
}

class Nothing extends Maybe {
  // eslint-disable-next-line fp-jxl/no-nil
  constructor() {
    super();
  }

  // eslint-disable-next-line fp-jxl/no-nil
  get value() {
    // eslint-disable-next-line fp-jxl/no-throw
    throw new TypeError("Can't extract the value of a Nothing");
  }

  get isNothing() {
    return true;
  }

  orElse(other) {
    return other;
  }

  toString() {
    return 'Maybe.Nothing';
  }
}

export default Maybe;
