function clone(x) {
  let i;

  if(!x || typeof x !== 'object') {
    return x;
  }

  if(Array.isArray(x)) {
    const arr = [];

    for(i = 0; i < x.length; i += 1) {
      arr[i] = clone(x[i]);
    }

    return arr;
  }

  const obj = {};

  for(i in x) {
    if(x.hasOwnProperty(i)) {
      obj[i] = clone(x[i]);
    }
  }

  return obj;
}

export default clone;
