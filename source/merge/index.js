import curry from '../curry';
import clone from '../util/clone';

export default curry((a, b) => Object.assign({}, clone(a), clone(b)));
