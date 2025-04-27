let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

console.log(rabbit.eat());
console.log(rabbit.full);
console.log(animal.full);
/* 
Calling rabbit.eat():
The eat method is invoked on the rabbit object.
Inside the eat method, this refers to the object that called the method. In this case, this refers to rabbit.
The eat method sets rabbit.full to true.

After the rabbit.eat() call:
A new property full is added to the rabbit object with the value true.
The animal object remains unchanged.

The rabbit object inherits the eat method from animal via the prototype chain.
"this" refers to the object that directly calls the method (rabbit in this case), not the object where the method is defined.
When this.full = true is executed, the full property is added to rabbit if it doesn't already exist. It doesn't affect the prototype (animal).

*/
