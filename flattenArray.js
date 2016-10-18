/**
 * Deeply flatten an array of numbers which may be nested arbitrarily and
 * inconsistently in more arrays.  This implementation is probably not as efficient as an
 * imperative implementation could be, but it is straightforward.  I aim for clean, maintainable
 * code first, and then break out the uglier, more optimally performant code only
 * when it proves necessary.
 */
const flattenArray = arr =>
    arr.reduce(
        (acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
        []
    );

module.exports = flattenArray;
