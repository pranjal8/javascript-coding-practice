const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

const addPromise = async (promise1, promise2) => {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};

addPromise(promise1, promise2).then((result) => {
  console.log(result); // Output: 7 (after both promises resolve)
  console.log;
});

addPromise(promise1, promise2).then(console.log
);
