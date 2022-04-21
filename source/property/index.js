import curry from '../curry';
import clone from '../util/clone';

export default curry((prop, obj) => clone(obj[prop]));
