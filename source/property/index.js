import curry from './../curry';
import clone from './../_util/clone';

export default curry((prop, obj) => clone(obj[prop]));
