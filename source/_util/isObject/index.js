// export default value => value != null && !Array.isArray(value) && (typeof value === 'object' || typeof value === 'function');
export default value => value != null && !Array.isArray(value) && typeof value === 'object';
