import isFunction from './../../util/isFunction';

class IO {
  constructor(effect) {
    if(!isFunction(effect)) {
      throw new Error('effect needs to be a function');
    }

    this._effect = effect;
  }

  static of(val) {
    return new IO(() => val);
  }

  static from(fn) {
    return new IO(fn);
  }

  map(fn) {
    return new IO(() => fn(this._effect()));
  }

  chain(fn) {
    return fn(this._effect());
  }

  run() {
    return this._effect();
  }
}

export default IO;
