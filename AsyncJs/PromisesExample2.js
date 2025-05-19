/* 
How to Create a Promise? -->
To create a promise, you'll create a new instance of the Promise object by calling the Promise constructor.
The constructor takes a single argument: a function called executor. The "executor" function is called immediately when the promise is created, and it takes two arguments: a resolve function and a reject function.
*/

const myPromise = new Promise(async function (resolve, reject) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com");
   
    if (!response.ok) {
      reject("Rejected!");
    } 
    else {
      setTimeout( () => {
        resolve(`Inside promise!`);
      }, 3000);
    }
  } catch (error) {
    reject("Fetch Error --> " + error.message);
  }
});

console.log(myPromise);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
How to Consume a Promise? -->
1. Obtain a reference to the promise: To consume a promise, you first need to obtain a reference to it. Based on the code from the previous section, our reference to a promise will be the myPromise object.
2. Attach callbacks to the promise: Once you have a reference, you can attach callback functions by using the .then and .catch methods. The .then method is called when a promise is fulfilled and the .catch method is called when a promise is rejected.
3. Wait for the promise to be fulfilled or rejected: Once you've attached callbacks to the promise, you can wait for the promise to be fulfilled or rejected.
*/

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //code here will be executed regardless of the status
    //of a promise (fulfilled or rejected)
    console.log("Finally block")
  });
