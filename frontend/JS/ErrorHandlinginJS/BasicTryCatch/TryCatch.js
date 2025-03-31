/**
 * Error handling in JS
 * - Unlike other programming language, we can get error or exception JS as well
 * - E.g.
 *  - Suppose accessing any variable without defining. We will get error.
 *  - Or Calling backend or API which throws an error.
 * - TO handle these scenarios, we have try and catch concept, where we keep error prone code inside try
 * - And in catch we keep logical solution if error occucrred. Catch accept one param which is error.
 * Consideration
 * - Catch will only Execute when an error occured. It will be ignored in happy flow scenario.
 * - Try catch will only work with synchronous code
 *  - will not work if we place any scheduling code inside try like setTimeout or async functions
 *  - We have to write try catch explicitly inside the schedule code
 *
 * Check out below examples for better understanding.
 */

// * Below code block is an example of happy flow.
// setTimeout(() => {
//   console.log("Interview scheduled");
// }, 1000);
// setTimeout(() => {
//   console.log("Interview Completed.");
// }, 2000);
// setTimeout(() => {
//   console.log("HR Called.");
// }, 3000);
// setTimeout(() => {
//   console.log("Compensation Discussed.");
// }, 4000);

// ! Creating an error in the happy flow by accessing any undeclared variable
setTimeout(() => {
  console.log("Interview scheduled");
}, 1000);
setTimeout(() => {
  console.log("Interview Completed.");
}, 2000);
// console.log(interviewFeedbackReceived);//! Code will break from here and rest of the code will not execute.
// * Handling exception using try catch
try {
  console.log(interviewFeedbackReceived); //! Exception will occur here
} catch (error) {
  // ! Instead of throwing error in console catch will execute logical code which we have written inside it
  setTimeout(() => {
    console.log("Checking with panel for the feedback.");
  }, 2500);
}
setTimeout(() => {
  console.log("HR Called.");
}, 3000);
setTimeout(() => {
  console.log("Compensation Discussed.");
}, 4000);

// ! Scenario or asynchrous code when catch will behave differently and how to handle
setTimeout(() => {
  console.warn("Asynchrouns Code Below Handling with catch.");
}, 4500);
setTimeout(() => {
  console.log("Interview scheduled");
}, 5000);
setTimeout(() => {
  console.log("Interview Completed.");
  //! Here again we will be getting error, but rest of the code will execute as it is. Only the next lines which are inside setTimeOut will not execute. It is a schedule code.
  //! JS Run Engine will only check are we getting any error while scheduling the task. Once scheduled if it is causing any error then JS will not take care.
  //! console.log(interviewFeedbackReceived);

  // * Handling this scenarion using try catch inside scheduler
  try {
    console.log(interviewFeedbackReceived);
  } catch (error) {
    console.log("Checking with panel for the feedback.");
  }
  console.log("Feedback Received.");
}, 6000);
setTimeout(() => {
  console.log("HR Called.");
}, 7000);
setTimeout(() => {
  console.log("Compensation Discussed.");
}, 8000);
