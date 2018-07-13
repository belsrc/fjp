import curry from './../../curry';

/**
 * Takes a joiner func, and two other funcs and a value. The value is given to both funcs and the
 * results of each of these is given to the joiner func.
 * @signature Fork :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
 * @func
 * @aka join
 */
const Fork = curry((joiner, fnA, fnB, x) => joiner(fnA(x), fnB(x)));

export default Fork;
