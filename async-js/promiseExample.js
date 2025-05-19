/* 
Math.random() in JavaScript generates a 
random floating-point number between 0 (inclusive) and 1 (exclusive), i.e., [0, 1).
console.log(Math.random()); // Outputs something like 0.726392...

-----                   

Practical Use (e.g., random integer between 1 and 10):
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // Outputs a number like 7
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved" + " " + random);
    } else {
      reject(`Promise rejected  ${random}`);
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(()=>console.log("Promise Completed!"));
