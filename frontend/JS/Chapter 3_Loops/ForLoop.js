/**
 * Loops
 * - For: Over array
 * - For in: Object key
 * - For of: object value
 * - While
 * - Do while
 */

let examResults = {
  alice: 90,
  Jessi: 10,
  John: 30,
  Blob: 40,
  Blob: 90,
};
for (let a in examResults) {
  console.log(a, " has ", examResults[a], " marks"); // a is key and can be accessed by value
}
for (let a of "Hello") {
  console.log(a); // Print each char of string
}
