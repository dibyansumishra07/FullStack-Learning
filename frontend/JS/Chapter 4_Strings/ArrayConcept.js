/**
 * To store a set of data we use array
 * It can hold any type of data like string number
 */

let arr = [1, 2, "12", undefined];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[9]); // If out of length we are accessing then get undefined
// console.log("arr.length", arr.length);
// arr[9] = 10; // ! Directly adding at 9 th index so all previous indexes will be empty items. But length will be 10 now
// console.log(arr[9]);
// console.log("value added to 9 index in arr", arr);
// console.log("value added to 9 index in arr check length: ", arr.length);

/**
 * ! Array Methods
 * - toString
 * - Join: Create string: num.join("-")
 * - pop: Remove element from the existing array and return also same array
 * - push: Add element at last and return new array length
 * - shift: use same array, Remove first element from the array and return recently removed element
 * - unshift: add element in the first and return new length
 * Advacned
 * - delete opertatror: Removes first element from array but relpace with empty value and length is same
 * - concat
 * !- sort: modify existing array ascending sort: BUT SORT ALPHABATICALLY
 */

let num = [1, 2, 34, 4];
let num1 = [4, 67, 43];
// console.log(num.toString());
// console.log(num.join("-"));
// console.log(num, num.pop()); // Returns the element which recently removed by pop
// console.log(num, num.pop()); // Returns the element which recently removed by pop
// delete num[0]; // Removes first element from array but relpace with empty value and length is same
// console.log(num.concat(num1)); // Concat both and create new array. Not affect new arr
// console.log(num.concat(num1, [1, 2]));// Can take multiple array
// num.sort(); // Alphabatic sort 1,2,3333,4,5555,6
// console.log(num);// Alphabatic sort 1,2,3333,4,5555,6

// num.sort((i, j) => i - j);
// console.log(num);
// num.reverse();// Reverse

// ! Splice and Slice
// ! Splice: Add new element
// num.splice(2);// Remove elements after 2 [1,2]
// num.splice(2, 1); // Remove elements after 2 and only 1 count [1,2,4]
// let deletedValues = num.splice(2, 1, 100, 101, 102); // Remove elements after 2 and only 1 count and add rest arguments [ 1, 2, 100, 101, 102, 4 ]
// console.log("Values delete from num: ", deletedValues);
// console.log("New num array: ", num);

// ! Slice: cut the array and create a new array
num.slice(2); // Create a new array from index 2 to last
num.slice(2, 9); // Create a new array from index 2 to index 9
