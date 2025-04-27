function fibSequence(n) {
  let sequence = [];
  let prev = 0,
    curr = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(prev);
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
}

console.log(fibSequence(6)); // [0 , 1, 1, 2, 3, 5]
