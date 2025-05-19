const sum = (a, b, c) => {
  return a + b + c;
};

function curry(fn) {
  console.log("fn.length : " ,fn.length)
  
  return function curried(...args) {
    console.log("args.length : " , args.length)
  
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else{
      return function(...args2){
        return curried.apply(this, args.concat(args2))
      }
    }
  };
}
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1)(2)(3))