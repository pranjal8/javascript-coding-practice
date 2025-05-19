Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000); // 1 second delay
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise 2 rejected"));
    }, 4000); // 4 second delay
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 3000); // 3 second delay
  }),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

/* 
If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
Here the second promise rejects in 4 seconds. That leads to an immediate rejection of Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all.
*/



