function x() {
  let a = 8;
  function y() {
    console.log(a);
  }
  return y;
}

let result = x();
console.log(result)
result();