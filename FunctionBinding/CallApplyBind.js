//"use strict";

/* Call() */
//1. Using call() to invoke a function and specifying the this value
function greet(params) {
  console.log(this.animal);
  console.log(this.sleepDuration);
}
const obj = {
  animal: "Cats",
  sleepDuration: "12 and 6 hours",
};
greet();
greet.call(obj);

//-----------------------------
//2. Using call() to invoke a function without specifying the first argument

/* 
the global object or the object that owns the function
function does not belong to any object, 
so normally this would refer to the global object.
*/

globalThis.globProp = "Wisen";

function display(params) {
  console.log(this.globProp);
}

display.call();

//-----------------------------
//3.
function greet(greeting, punctuation) {
  console.log(`${greeting} , my name is ${this.name} ${punctuation}`);
}
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1, "Hi", "!");
greet.call(person2, "Hello", "!");

//-----------------------------
//4. method borrowing: You can borrow a method from one object and use it with another object.

const teacher1 = {
  name: "MAx",
  sayName: function (params) {
    console.log(this.name);
  },
};

const teacher2 = {
  name: "John",
};
teacher1.sayName.call(teacher2);
