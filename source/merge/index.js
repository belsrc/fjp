import curry from './../curry';
import clone from './../_util/clone';

export default curry((a, b) => Object.assign({}, clone(a), clone(b)));
