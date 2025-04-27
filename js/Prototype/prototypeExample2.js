/* 
QUESTION: We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How can we fix it?
*/

let hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Speedy one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// Lazy one's stomach is empty
console.log(lazy.stomach); // <nothing>
