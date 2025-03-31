/*
 *
 * What Promise
 * - The concept says the thing promise will do it will do you can continue other work.
 * - Technically, promise guarantee of its code execution. Either it will pass or fail
 *      - And in both case subscriber will get notified.
 *      - We can execute other code and promise will do it's part
 * Promise contain two value
 * - State: State can be fulfiller or rejected
 *      - Initially undefined.
 *      - Once promise is resolved then it is fulfilled
 * - Result
 *      - The result which we pass in the resolve method inside promise logic that will be the result.
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
let promise = new Promise((resolve, reject) => {
  console.log("promise first");
  resolve(56);
  reject(56);
});

console.log("First");

setTimeout(() => {
  console.log("Second in Timeout");
}, 2000);

console.log("Third");
console.log(promise);

function somemethod() {
  console.log(counter1);
  //   console.log(counter2);
  var counter1 = 1;
  let counter2 = 2;
}

console.log(somemethod());
