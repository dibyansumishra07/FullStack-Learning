/*
 *
 * What Promise
 * - The concept says the thing promise will do it will do you can continue other work.
 * - Technically, promise guarantee of its code execution. Either it will pass or fail
 *      - And in both case subscriber will get notified.
 *      - We can execute other code and promise will do it's part
 * Promise contain two value
 * - State or Lifecycle: Initially promise is pending then it can be fulfiller or rejected.
 *      - Initially state value undefined.
 * - Result
 *
 * Promise return
 * - Resolve: Successful
 * - Reject: Failure and will give error
 *
 * Why Promise
 * - Mostly it is helpful when we are calling api and then doing another operation which is not dependent on the call
 * Use Case
 * - Calling 4 independent APIs and doing some other operation.
 * - Then, there is no sense of holding our thread in each call, we can parallely run all of them.
 * - Here, we use promise.
 */

// Creating one promise for successful scenarion
let promiseResolve = new Promise((resolve, reject) => {
  console.log("Promise is pending.");
  setTimeout(() => {
    console.log("Promise is fulfilled.");
    resolve(true);
  }, 5000);
});

// Creating one promise for failure scenarion
let promiseReject = new Promise((resolve, reject) => {
  console.log("Promise is pending.");
  setTimeout(() => {
    console.log("Promise is Rejected.");
    // resolve(true);
    reject(new Error("Error Occurred!!"));
  }, 5000);
});

/*
 * Although we have defined timeout in both and calling one after another,
 * both promises will be executing parallely and after 5 sec give result.
 *
 */
console.log(promiseResolve, promiseReject);

// * To get the value
promiseResolve.then((value) => {
  console.log("PromiseResolve resolved.", value);
});
// ! To catch the error
promiseReject.catch((value) => {
  console.log("PromiseResolve rejected.", value);
});
// * Handle both success and failure
promiseReject.then(
  (value) => {
    console.log("Promise resolved and no need to handle error.");
  },
  (err) => {
    console.log("Handled Both Succes and Failure: ", err);
  }
);
