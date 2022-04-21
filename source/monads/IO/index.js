/* eslint-disable fp-jxl/no-this, fp-jxl/no-class, fp-jxl/no-mutation */
import isFunction from '../../util/isFunction';

class IO {
  // eslint-disable-next-line fp-jxl/no-nil
  constructor(effect) {
    if(!isFunction(effect)) {
      // eslint-disable-next-line fp-jxl/no-throw
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
