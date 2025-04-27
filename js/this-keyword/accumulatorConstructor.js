
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Enter a number", 0);
  };
}

let acc= new Accumulator(1)
acc.read();
console.log(acc.value)