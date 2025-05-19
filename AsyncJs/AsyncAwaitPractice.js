const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p1 resolved!");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p2 resolved!");
  }, 5000);
});

async function getData() {
  console.log("Inside async function");

  const result = await p1;
  console.log("After result1");
  console.log(result);

  //    const result2= await p1;
  //    console.log("After result2 ")
  //    console.log(result2)

  const result2 = await p2;
  console.log("After result2");
  console.log(result2);
}

getData();
