class Maybe {
  static of(x) {
    /* eslint-disable no-use-before-define */
    return x !== undefined && x !== null ? new Just(x) : new Nothing();
    /* eslint-enable no-use-before-define */
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
}

class Just extends Maybe {
  constructor(val) {
    super();
    this._val = val;
  }

  get value() {
    return this._val;
  }

  map(fn) {
    return Maybe.of(fn(this.value));
  }

  join() {
    if(!this.value instanceof Just) {
      return this;
    }

    return this.value.join();
  }

  orElse() {
    return this.value;
  }

  filter(fn) {
    Maybe.fromNullable(fn(this.value) ? this.value : null);
  }

  get isJust() {
    return true;
  }

  toString() {
    return `Maybe.Just(${ this.value })`;
  }
}

class Nothing extends Maybe {
  map() {
    return this;
  }

  get value() {
    throw new TypeError("Can' extract the value of a Nothing");
  }

  join() {
    return this;
  }

  orElse(other) {
    return other;
  }

  filter() {
    return this.value;
  }

  get isNothing() {
    return true;
  }

  toString() {
    return 'Maybe.Nothing';
  }
}

export default Maybe;
