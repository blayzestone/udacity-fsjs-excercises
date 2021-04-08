import arrays from '../utilities/arrays';
import newArr from '../index';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe("newArr function", () => {
    it('should make a new array containing dog', () => {
        expect(newArr(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect(newArr(3, wordArr)).toContain(3);
    });
});


describe("array utilities", () => {
    describe("add numbers to an array", () => {
        it('should add numbers in array and be truthy', () => {
            expect(arrays.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 18', () => {
            expect(arrays.addArr(numArr)).toBe(18);
        });
    });

    describe("concatinate two arrays", () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });
    
    describe("remove item from array", () => {
        it('should contain 3 items except rabbit', () => {
            expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    });
    
    describe("find largest number", () => {
        it('should have 6 be largest number', () => {
            expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    });
});
