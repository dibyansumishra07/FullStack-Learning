let num = [3, 54, 1, 2, 4];
// Can loop using tradional for loop

// For Each loop
// num.forEach((i) => console.log(i * 2));

// Array. From: used to create an array from any other object or collection like HTML element collection
// It will enable us to use general array method after that Array.from(object or HTML element).forEach...

// let namee = "Alice";
// let arr = Array.from(namee); // Create array from string
// console.log(typeof namee);
// console.log(typeof arr);

// For of
// for (let i of num) {
//   console.log(i);// print array element
// }
// console.log("------");
// for (let i in num) {
//   console.log(i);// prints index and in obect will print key. Plain array JS treat index as key
// }

// ! Map Filter Reduce: Called highier order methods
/**
 * ! map create a new array with some logic
 * and return the array with updated value
 * Do operation on that when foreach loop over same array
 * */

// num.map((value) => {
//   console.log(value + "modfied");
// });
// num.map((value, index) => {
//   console.log(value + "index" + index);
// });
// num.map((value, index, array) => {
//   console.log(value + " index " + index + " old array " + array);
// });

/**
 * ! FILTER: Filter values which match our condtion
 * Do not modifly original array
 */

// let evenArr = num.filter((num) => num % 2 == 0);
// console.log(evenArr);

/**
 * ! REDUCE:
 */

let arrRed = [1, 3, 5, 7, 8];
let sumOfArrRed = arrRed.reduce((e1, e2) => e1 + e2);
console.log(sumOfArrRed);
