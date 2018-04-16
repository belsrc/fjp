import Maybe from './../Maybe';

class Either {
  static of(x) {
    // eslint-disable-next-line no-use-before-define
    return x !== undefined && x !== null ? new Right(x) : new Left(x);
  }

  static fromNullable(x) {
    return Either.of(x);
  }

  static Right(x) {
    // eslint-disable-next-line no-use-before-define
    return new Right(x);
  }

  static Left(x) {
    // eslint-disable-next-line no-use-before-define
    return new Left(x);
  }

  static try(fn) {
    try {
      const result = fn();

      return Either.of(result);
    }
    catch(e) {
      // eslint-disable-next-line new-cap
      return Either.Left(e);
    }
  }

  get isRight() {
    return false;
  }

  get isLeft() {
    return false;
  }

  map() {
    return this;
  }

  filter() {
    return this;
  }

  chain() {
    return this;
  }

  cata(leftFn, rightFn) {
    return this.isRight ? rightFn(this._val) : leftFn(this._val);
  }

  orElseFn() {
    return this;
  }

  toMaybe() {
    return this.cata(Maybe.None, Maybe.Just);
  }
}

class Right extends Either {
  constructor(val) {
    super();
    this._val = val;
  }

  get value() {
    return this._val;
  }

  get isRight() {
    return true;
  }

  map(fn) {
    return Either.of(fn(this._val));
  }

  filter(fn) {
    Either.of(fn(this._val) ? this._val : null);
  }

  orElse() {
    return this._val;
  }

  chain(fn) {
    return fn(this._val);
  }

  toString() {
    return `Either.Right(${ this.value })`;
  }
}

class Left extends Either {
  constructor(val) {
    super();
    this._val = val;
  }

  get value() {
    throw new TypeError("Can't extract the value of a Left");
  }

  get isLeft() {
    return true;
  }

  orElse(other) {
    return other;
  }

  orElseFn(fn) {
    return fn(this._val);
  }

  toString() {
    return `Either.Left(${ this._val })`;
  }
}

export default Either;
