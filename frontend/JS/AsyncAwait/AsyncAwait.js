/**
 * Previous Concept:
 * - To do n number of operation one by one, we use .then() chaining where we are also avoiding callback hell
 * - But still, multiple .then() might also be confusing. There we can use async awat
 * Aysnc & Await
 * - We can mark any function as async and it will indicate as asynchronous to JS Engine and also it will return a promise only
 * - And then, can use await inside multiple line where where we want to execute it one by one
 *      - async function
 *          - await do1()
 *          - await do2()
 *          - await do3()
 */

// Used async keyword. SO it is now async and will return Promise.resolve(return value)
const func = async () => {
  return 5;
};

// async function func() {
//   return 5;
// }

// () or method signature is mandatory to call .then() and if we miss async keyword then below snipper is invalid as then is not a part
func().then((value) => {
  //   console.log(value);
});

/**
 * Create a method whose responsibility is to fetch weather report of pune and cuttack
 *
 * Older Approach
 * - I have two promises, if I have to fetch the result of both then I have to use .then()
 * - As soon as each promise will get fullfilled we will get our result
 * - This is sometime tedious or might become unmaintainable.
 * - So, we can use newer appraoch which is asynch and await
 */
const weatherReport = async () => {
  const puneWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("26 Degree");
    }, 2000);
  });
  const cuttackWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("36 Degree");
    }, 5000);
  });

  // Method is already async, so, we are using await to capture each promise result
  console.log("Fetching pune weather report!!");
  const puneClimate = await puneWeather;
  console.log("Fetched pune weather report!!: ", puneClimate);
  console.log("Fetching Cuttack weather report!!");
  const cuttackClimate = await cuttackWeather;
  console.log("Fetched Cuttack weather report!!: ", cuttackClimate);
  return [puneClimate, cuttackClimate];
};

weatherReport().then((value) => {
  console.log("Aysnc Function is Completed. ", value);
});
