"use strict";
var arrays = require('./utilities/arrays.js');
var numbers = require('./utilities/numbers.js');
var strings = require('./utilities/strings.js');
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays.addArr(numArr);
var mixArr = arrays.concatArr(numArr, wordArr);
var myNum = '15' % 2;
// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply('5', 8));
console.log(arrays.lgNum(mixArr));
