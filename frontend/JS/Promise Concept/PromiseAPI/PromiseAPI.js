// Declared multiple promises
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
// Rejecting below promise to break promise.all
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server Error");
  }, 4000);
});

// Checking if all of my promises are resoled or not
// Array in all is mandatory
let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((value) => {
  console.log("promise_all", value);
});

// P4 will be rejected.
let promise_all_fail = Promise.all([p1, p2, p3, p4]);
// As P4 got rejected our promise all fail will not execute hence then is unreachable code.
promise_all_fail.then((value) => {
  console.log("promise_all_fail", value);
});

// If we just want to check the result of all promises wheather promise is resolved or rejected
let promise_all_status = Promise.allSettled([p1, p2, p3, p4]);
// As P4 got rejected our promise all fail will not execute hence then is unreachable code.
promise_all_status.then((value) => {
  console.log("promise_all_status", value);
});

// From all promise who gor resolved or rejcted first it will be the value
let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(5); // ! Yes, We can write both but once resolve is called then reject will be skipped and vice versa.
    // resolve(5);
  }, 500);
});
let promise_all_race = Promise.race([p1, p2, p3, p4, p5]);
promise_all_race.then((value) => {
  console.log("promise_all_race", value);
});

// If we want only that promise who got resolved first
let p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(6);
  }, 700);
});
// Will fetch first resolved promise and if all got failed then throw aggregate error
let promise_all_any = Promise.any([p1, p2, p3, p4, p5, p6]);
promise_all_any.then((value) => {
  console.log("promise_all_any", value);
});

// Below function will return a resolved or rejected promise
let aResolvedPromse = Promise.resolve(p1); // Return a promise where result is actual result of the promise argument
let aRejectedPromse = Promise.reject(p5); // Return a promise where it's result is also a promise which is the actual promise object
console.log("aResolvedPromse", aResolvedPromse);
console.log("aRejectedPromse", aRejectedPromse);
