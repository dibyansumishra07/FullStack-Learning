/**
 * ! Before ES 6 we used to var keyword to declare variable which is now deprecated
 * * Now, in ES 6 we use let and const to declare any variable.
 */

/**
 * ! x becomes a global variable, even if it was declared inside a function or block.
 * It is equivalent to writing window.x = 10 in a browser or global.x = 10 in Node.js.
 * ! This can create conflicts if there are other global variables with the same name, and it makes debugging difficult.
 * * If we use javascript strict then below code will cause error.
 */
x = 10;
/**
 * Var is an older approach before ES6
 * - It is for global scope. Which means we can access it anywhere in the application.
 * Drawbacks
 *! - Can redine as well, which can lead to error
 */

var varVariable = 19;
console.log("varVariable: ", varVariable);
var varVariable = 20; // ! No track of the variable and can be changed any time. Better to avoid.
console.log("varVariable: ", varVariable);

/*
 * Let is a blocked scope variable.
 * - Which means if we define any variable within a block it will only avaiable for that block only not outside
 * - But, we can define it in global level as well that will be avaiable globally
 * - After ES 6, we generally prefer this.
 *
 */

let letVariable = 19;
// let letVariable = 19; // ! We can't redefine, as it is a duplicate. which is a improvement over var keyword. Causing compile time error.
console.log("letVariable after declare", letVariable);
{
  let letVariable = 20; // ! We can redefine it inside a blocked scope as the value is now belongs to the scope only and not impacting the global scope.
  // let letVariable = 20;// ! Again inside the scope we can't define as it is a duplicate.
  console.log("letVariable inside a scope: ", letVariable); // ! it is now in blocked scope and value is 19.
}
console.log("letVariable outside the scope: ", letVariable); // ! It is now again global scope

/**
 * * Const is to define variable who are final and can't be changed after initialization
 * * Declaration is same as let. We can't define duplicate.
 */

const constVariable = "const";
console.log("constVariable after declare: ", constVariable);
// constVariable = "constt";// ! Tried to change the value of a const. Causing runtime TypeError
{
  const constVariable = "const redefined inside block";
  console.log("constVariable inside a block: ", constVariable);
}
console.log("constVariable outside a block: ", constVariable);
