/* 
Currying is a functional programming technique where a function that takes 
multiple arguments is transformed into a sequence of functions that each take a 
single argument.
*/
//Regular function
function add(a, b, c) {
  return a + b + c;
}

const res = add(1, 2, 3);

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const ans = curryAdd(3)(4)(5);

console.log(res);
console.log(ans);
