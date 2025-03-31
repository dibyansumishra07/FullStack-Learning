/**
 * To execute multiple consequetive operation one after another, we can use then chaining.
 */

// * Created primary promise.
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 sec.");
    resolve("promise resolved.");
  }, 2000);
});
// * Calling primary promise and adding mulitple then to do one by one operation
// * Here each then is returning a new promise and next then is dependent on individual then's promise which is being returned.
promise
  .then((value) => {
    console.log(value);
    let innerPromise = new Promise((resolve, reject) => {
      resolve("innerPromise Resolved.");
    });
    return innerPromise;
  })
  .then((value) => {
    console.log("All Promise Completed.", value);
    return 2; // ! It will behave like a promise or immediate resovled promise.
    // ! In next then, we will get returned value which is 2.
  })
  .then((value) => {
    console.log("Finally Done", value);
  });
