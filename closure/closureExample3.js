function x() {
  let a = function y() {
    console.log(" \Inside y\ :  Namaste");
  };
  a();

  let b = 2;
  return function z() {
    console.log(" \Inside z\ : ", b);
  };
}

let res= x();

console.log(res)
console.log(res())
