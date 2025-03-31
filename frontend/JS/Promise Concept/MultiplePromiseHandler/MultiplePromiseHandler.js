let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Promise Created but not resolved.");
    resolve(1);
  }, 2000);
});

// Each then will execute sequentially. But this is different from promise chaining.
// As, we are using different then the both can independently or asynchronously execute.
p1.then((value) => {
  console.log("Promise is now resolved then doing task 1.", value);
  setTimeout(() => {
    console.log("Task1 timeout");
  }, 5000);
});
p1.then((value) => {
  console.log("Promise is now resolved then doing task 2.", value);
});
