const flattenArray =  require('./flattenArray');

const { expect } = chai;

describe('flattenArray', function() {
    it('returns an empty array when passed an empty array', function() {
        expect(flattenArray([])).to.eql([]);
    });

    it('returns an array like the one that was passed in if there were no nested arrays',
       function() {
            const array = [1, 60, 342, 2];

            expect(flattenArray(array)).to.eql(array);
       }
    );

    it('returns a totally flattened array containing the same numbers that were passed in, ' +
           'in order',
        function() {
            expect(flattenArray([54, [4, 7], 32])).to.eql([54, 4, 7, 32]);
            expect(flattenArray([[4, 7], 32])).to.eql([4, 7, 32]);
            expect(flattenArray([54, [4, 7]])).to.eql([54, 4, 7]);
            expect(flattenArray([[4, [7]]])).to.eql([4, 7]);
        }
    );

    it('removes empty nested arrays', function() {
        expect(flattenArray([[[[[[[[]]]]]]]])).to.eql([]);
        expect(flattenArray([1, [[2, [], 3, [[[]]]]], 4, [[[]]], []])).to.eql([1, 2, 3, 4]);
    });

    it('throws an exception if passed null or undefined', function() {
        expect(() => flattenArray(null)).to.throw();
        expect(() => flattenArray(undefined)).to.throw();
    });
});
