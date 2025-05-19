function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;

  return counter;
}

/* 
counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.

*/
