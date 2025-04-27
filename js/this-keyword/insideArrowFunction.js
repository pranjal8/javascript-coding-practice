


// Inside arrow function
const obj2 = {
    name: "Bob",
    greet: () => {
      console.log(this.name); // Arrow functions do not have their own 'this'
    },
    sayHi: function () {
      console.log(this.name); // 'this' refers to obj2
      const greet2 = () => {
        console.log(this.name); // Arrow function inherits 'this' from sayHi's context
      };
      greet2(); // Call the arrow function
    },
  };
  
  obj2.sayHi(); // Bob
  obj2.greet(); // undefined