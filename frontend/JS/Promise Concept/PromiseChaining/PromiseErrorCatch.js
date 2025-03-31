console.clear();
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(src);
    };
    script.onerror = () => {
      reject(new Error("Unable to load source!"));
    };
  });
};

let invokeLoadScript = loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
);

invokeLoadScript
  .then((value) => {
    console.log("Source Loaded 1st Time: ", value);
    return value;
  })
  .then((value) => {
    console.log("Source Loaded 2nd Time: ", value);
    return loadScript(
      "hhttps://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    );
  })
  .then((value) => {
    console.log("Source Loaded 3rd Time: ", value);
    return loadScript(
      "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    );
  })
  .catch((value) => {
    console.log("Inside catch", value);
  });
