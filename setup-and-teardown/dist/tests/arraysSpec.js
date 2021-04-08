"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var index_1 = __importDefault(require("../index"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
it('should make a new array containing dog', function () {
    expect(index_1.default(3, wordArr)).toContain('dog');
});
it('make a new array containing 3', function () {
    expect(index_1.default(3, wordArr)).toContain(3);
});
it('should add numbers in array and be truthy', function () {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it('should add numbers in array and be 19', function () {
    expect(arrays_1.default.addArr(numArr)).toBe(19);
});
it('should concatinate 2 arrays to not equal the first', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('should concatinate 2 arrays to not equal the second', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
});
it('should contain 3 items except rabbit', function () {
    expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
});
it('should not contain the third index rabbit', function () {
    expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
});
it('should have 6 be largest number', function () {
    expect(arrays_1.default.lgNum(numArr)).toEqual(6);
});
it('should not have a large number and be falsy', function () {
    expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
});
