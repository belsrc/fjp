// --- Utilities --- //
export { default as clone } from './util/clone';
export { default as isArray } from './util/isArray';
export { default as isFunction } from './util/isFunction';
export { default as isObject } from './util/isObject';
export { default as isString } from './util/isString';
export { default as isNumber } from './util/isNumber';
export { default as not } from './util/not';
export { default as tap } from './util/tap';

// --- Combinators --- //
export { default as A } from './combinators/A';
export { default as apply } from './combinators/A';
export { default as I } from './combinators/I';
export { default as identity } from './combinators/I';
export { default as K } from './combinators/K';
export { default as constant } from './combinators/K';
export { default as OR } from './combinators/OR';
export { default as alternation } from './combinators/OR';
export { default as fork } from './combinators/Fork';
export { default as T } from './combinators/T';
export { default as thrush } from './combinators/T';
export { default as applyTo } from './combinators/T';

// --- Monads --- //
export { default as Maybe } from './monads/Maybe';
export { default as Either } from './monads/Either';
export { default as IO } from './monads/IO';

// --- Functions --- //
export { default as all } from './every';
export { default as associate } from './associate';
export { default as assoc } from './associate';
export { default as altAssociate } from './altAssociate';
export { default as altAssoc } from './alt-associate';
export { default as average } from './average';
export { default as both } from './both';
export { default as compact } from './compact';
export { default as compose } from './compose';
export { default as concat } from './concat';
export { default as concatN } from './concatN';
export { default as curry } from './curry';

// export { default as delete } from './delete';
export { default as deviation } from './deviation';
export { default as difference } from './difference';
export { default as distinct } from './distinct';
export { default as distinctN } from './distinctN';
export { default as distinctFn } from './distinctFn';
export { default as each } from './each';
export { default as every } from './every';
export { default as filter } from './filter';
export { default as find } from './find';
export { default as findIndex } from './findIndex';
export { default as flatten } from './flatten';
export { default as from } from './from';
export { default as groupBy } from './groupBy';
export { default as intersection } from './intersection';
export { default as join } from './join';
export { default as map } from './map';
export { default as merge } from './merge';
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
export { default as union } from './union';
export { default as unshift } from './unshift';
