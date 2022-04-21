/* eslint-disable fp-jxl/no-this, fp-jxl/no-class, fp-jxl/no-mutation */
import Maybe from '../Maybe';

class Either {
  static of(x) {
    // eslint-disable-next-line no-use-before-define
    return x !== undefined && x !== null && !(x instanceof Error) ?
      new Right(x) : // eslint-disable-line no-use-before-define
      new Left(x); // eslint-disable-line no-use-before-define
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

  // eslint-disable-next-line fp-jxl/no-nil
  static try(fn) {
    try {
      // eslint-disable-next-line callback-return
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

  get value() {
    return this._val;
  }

  join() {
    if(this.value instanceof Either) {
      return this.value.join();
    }

    return this;
  }

  map(fn) {
    return Either.of(fn(this._val));
  }

  flatMap(fn) {
    return this.map(fn).join();
  }

  filter() {
    return this;
  }

  chain(fn) {
    return this.isRight ? fn(this._val) : this;
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
  // eslint-disable-next-line fp-jxl/no-nil
  constructor(val) {
    super();
    this._val = val;
  }

  get isRight() {
    return true;
  }

  filter(fn) {
    // eslint-disable-next-line fp-jxl/no-nil
    return Either.of(fn(this._val) ? this._val : null);
  }

  orElse() {
    return this._val;
  }

  async asyncChain(fn) {
    return await fn(this._val);
  }

  toString() {
    return `Either.Right(${ this.value })`;
  }
}

class Left extends Either {
  // eslint-disable-next-line fp-jxl/no-nil
  constructor(val) {
    super();
    this._val = val;
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
