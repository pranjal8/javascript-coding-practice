const p1 = Promise.resolve(3);
const p2 = 43;
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(6), 1000));
const p4 = Promise.reject(9);

const res = Promise.all([p1, p2, p3, p4])
  .then((res) => console.log("res :", res))
  .catch((err) => console.log("err :" ,err));

console.log(res);
