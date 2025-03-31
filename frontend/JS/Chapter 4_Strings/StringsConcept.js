// ! STRINGS ARE IMMUTABLE IN JS SIMILAR LIKE JAVA
let namee = "Alice";
console.log(namee.length);
console.log(namee[0]);

//! Template literal
let p1 = "Bobby";
let sentence = `${p1} is a friend of ${namee}`; // ! String interpolation
console.log(sentence);

let fruit = "Bana'na";

/**
 * String proeprties and methods
 * - length ! Property
 * - upper case & lower case
 * - slice: Break string into two
 * - replace
 * - index of : find if char is present
 * - concat: concat all arguments. If argument is a different type also it will converted into string
 * - trim: Remvoe space from first and end
 * - includes: check if a string is present in a primary string
 * - Can treat string as array and access with index string[0]
 *  */

console.log(p1.slice(2)); // ! Print after index 2
console.log(p1.slice(2, 4)); // ! Print from index 2 to 4

console.log(p1.replace("bb", "aa")); // ! Replace matching string with second argument

console.log("object".concat("abc", 123));
console.log("object".includes("ect"));
