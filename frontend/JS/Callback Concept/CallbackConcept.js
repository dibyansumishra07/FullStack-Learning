console.clear();
/**
 * Callbacks
 * -
 *
 */

/*
 * Syncronous Programming. Code wil execute one line by one line
 * - Below code will execute line by line in browser
 *  */

// let personName = prompt("Mention Name: "); Ask for name
// let age = prompt("Mention age: "); Then ask for age
// console.log(personName + " is " + age + " old."); Then print

/*
 * Asyncronous Programming. Code wil execute in any flow
 * - Below code will not execute line by line in browser
 * - Will print start and end first and then timeout logic.
 * - Simpler term, code will not wait for any execution.
 *
 * In below code, We have set a time out between the code but still the output will be
 * - Start
 * - End
 * - Wait for 2 Sec
 *  */

// console.log("Start");
// setTimeout(() => {
//   console.log("Wait! for 2 sec");
// }, 2000);
// console.log("End");

/*
 * Callbacks
 * - It is an action which can be performed after a primary action.
 * Implementation
 * - we can create a custom method which we want to call after primary operation or function.
 *    - We should declare callback as last argument of function
 * - While calling primary function we can pass it as last argument.
 * - call the last parameter with () in the code.
 * - We can pass it as a second parameter
 * Usecase
 * - To do something or get to know when out async operation is completed
 * ! Below snippet: Callback implementation
 */

// Primary Function which is accepting callback in second param
function loadScript(src, callbacks) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("SRC loaded: ", src);
    // Calling our callback function
    callbacks(undefined, src);
  };
  script.onerror = () => {
    console.log("Error Encountered while fetching src");
    callbacks(new Error("Fetch Source Failed with error"), src);
  };
  document.body.appendChild(script);
}

// Independent functions which we want to run as callback
const postSrc = (error, src) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("SRC LOADED DOING postSrc OPERATION: ", src);
};
// Independent functions which we want to run as callback
const postSrc2 = (error, src) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("SRC LOADED DOING postSrc2 OPERATION: ", src);
};

//  Calling primary method and passed our custom method as callback
loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
  postSrc
);

/**
 * Challenges of callbacks
 * - We have full access of the callback fucntions
 * - We can do mistakes. For an example
 *  - In the above callback method even if every thing working fine and by mistake I pass error as true
 *  - Then, error handling will get triggered
 * Pyramid of DOOM
 * - When we are doing callback inside callback and so on, then, code will grow horizontal and unreadable.
 * - This is called Pyramid of DOOM or Callback HELL.
 * - We should avoid this and can use promises.
 */
