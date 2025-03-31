console.clear();
/**
 * Callbacks
 * -
 *
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
    shutDownAllBusinessOperation(); //Will Execute when our primary operation will cause some error. Then this callback method will shurt down everything.
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

/**
 * Challenges of callbacks
 * - We have full access of the callback fucntions
 * - We can do mistakes. For an example
 *  - In the above callback method even if every thing working fine and by mistake I pass error as true
 *  - Then, error handling will get triggered and all business operations will shut down which is unnecessary.
 * Pyramid of DOOM
 * - When we are doing callback inside callback and so on, then, code will grow horizontal and unreadable.
 * - This is called Pyramid of DOOM or Callback HELL.
 * - We should avoid this and can use promises.
 */

//  Developer made a mistake. Calling primary method and passed our custom method as callback but with error value as true
loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
  postSrc
);

/**
 * Pyrmid of DOOM
 * - Below, we are loading multiple scripts one after another using callback concept or callback inside callback
 * - Loading n number script like below will become highly unmaintainable and readable.
 * - Code will grow horizontal
 * Solution
 * - Promise
 * - Best Practices: Not use more than one or two callbacks inside callback
 * */
loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
  //Callback method
  (error, src) => {
    if (error) {
      console.log(error, src);
      return;
    }
    loadScript("new script", (error, src) => {
      if (error) {
        console.log(error, src);
        return;
      }
      loadScript("new script", (error, src) => {
        if (error) {
          console.log(error, src);
          return;
        }
        loadScript("new script", (error, src) => {
          if (error) {
            console.log(error, src);
            return;
          }
          loadScript("new script", (error, src) => {
            if (error) {
              console.log(error, src);
              return;
            }
            loadScript("new script", (error, src) => {
              if (error) {
                console.log(error, src);
                return;
              }
              loadScript("new script");
            });
          });
        });
      });
    });
  }
);
