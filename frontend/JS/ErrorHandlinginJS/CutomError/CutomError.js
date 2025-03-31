/**
 * We can create custom error to handle any specific scenario.
 *
 * TO check different type of error check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */

try {
  let dishType = prompt("Enter Dish Type");
  console.log(dishType);
  console.log(dishType.toLowerCase() === "nonveg");
  if (dishType.toLowerCase() === "nonveg") {
    alert("Chalo Khate He");
  } else {
    // ! Throwing custom exception and handling in catch
    throw new Error("FoodNotMyTypeError: Pet Bhara Hua he");
  }
} catch (error) {
  // * Different properties of error object
  console.log(error.name);
  console.log(error.message);
  alert(error.message);
}
