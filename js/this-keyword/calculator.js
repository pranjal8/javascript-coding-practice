const calculaor = {
  read() {
   this.a =  +prompt("Enter the first number", 0);
   this.b = +prompt("Enter the second number", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculaor.read();
console.log(calculaor.sum());
console.log(calculaor.mul());
