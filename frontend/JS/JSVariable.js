// Directly initializing variable without declaring
num = 2 + 2;

// Using let keyword to define variable
let numLet = 4;
// Declaring string
let nameSingleQuote = "dibyansu";
// Using double quote as I have one single quoute in the string
let nameDoubleQuote = "dibyansu's Name";

const nameConst = "Final Dibyansu";
// * nameConst = "new name"; //Runtime error where we can't change value of a const after decalre

/*
 * Variable Types
 * - Primitive
 *  - number
 *  - String
 *  - boolean
 *  - null
 *  - undefined
 *  - symbol
 * - Object
 *  - Array
 *  -
 *
 */

let num1 = 10;
let num2 = 10.1;
let num3 = 10_00_000;
let numBigInt = 10_00_000n; // Declaring bigint
console.log(numBigInt + num1); // Can't do bigint + number
console.log(10 / 0); // OP: Infinity
console.log(-10 / 0); // OP: - Infinity
console.log(typeof num2);
