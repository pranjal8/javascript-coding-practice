function outer() {
  let count = 0;
  return function () {
    // return  count++;  --> //increment counter and return old value --> output --> 0 1 2
    count++;
    return count;  // output --> 1 2 3
  };
}

let count = outer(); //now count is function
console.log(count());
console.log(count());
console.log(count());
