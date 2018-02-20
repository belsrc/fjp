// --- Utilities --- //
export { default as clone } from './_util/clone';
export { default as isArray } from './_util/isArray';
export { default as isFunction } from './_util/isFunction';
export { default as isObject } from './_util/isObject';
export { default as isString } from './_util/isString';
export { default as not } from './_util/not';

// --- Combinators --- //
export { default as A } from './_combinators/A';
export { default as apply } from './_combinators/A';
export { default as I } from './_combinators/I';
export { default as identity } from './_combinators/I';
export { default as K } from './_combinators/K';
export { default as constant } from './_combinators/K';
export { default as OR } from './_combinators/OR';
export { default as alternation } from './_combinators/OR';
export { default as S } from './_combinators/S';
export { default as sequence } from './_combinators/S';
export { default as fork } from './_combinators/Fork';

// --- Monads --- //
export { default as Maybe } from './_monads/Maybe';

// --- Functions --- //
export { default as associate } from './associate';
export { default as average } from './average';
export { default as compact } from './compact';
export { default as compose } from './compose';
export { default as concat } from './concat';
export { default as concatN } from './concatN';
export { default as curry } from './curry';
// export { default as delete } from './delete';
export { default as deviation } from './deviation';
export { default as difference } from './difference';
export { default as distinct } from './distinct';
// export { default as each } from './each';
export { default as every } from './every';
export { default as filter } from './filter';
// export { default as find } from './find';
export { default as from } from './from';
export { default as groupBy } from './groupBy';
export { default as intersection } from './intersection';
export { default as join } from './join';
export { default as map } from './map';
export { default as occurrence } from './occurrence';
export { default as partial } from './partial';
export { default as pipe } from './pipe';
export { default as pop } from './pop';
export { default as promisify } from './promisify';
export { default as property } from './property';
export { default as push } from './push';
export { default as reduce } from './reduce';
export { default as reduceRight } from './reduceRight';
export { default as reverse } from './reverse';
export { default as select } from './select';
export { default as shift } from './shift';
export { default as shuffle } from './shuffle';
export { default as slice } from './slice';
export { default as some } from './some';
export { default as sort } from './sort';
// export { default as splice } from './splice';
export { default as sum } from './sum';
export { default as sumN } from './sumN';
export { default as symmetricDifference } from './symmetricDifference';
export { default as tap } from './tap';
export { default as union } from './union';
export { default as unshift } from './unshift';
