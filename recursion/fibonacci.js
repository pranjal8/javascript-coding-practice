function fib(n) {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev =temp;
  }
  return curr;
}

console.log(fib(6)); // 8
// 0 1 1 2 3 5 8
