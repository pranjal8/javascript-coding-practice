
//In setTimeout, this defaults to the global object (or undefined in strict mode).
setTimeout(function () {
    console.log(this); // In browsers: window
  }, 1000);
  
  //To retain the context, use an arrow function or bind:
  setTimeout(() => {
    console.log(this); // Inherits `this` from the enclosing scope
  }, 1000);