//Explicit binding -->
// explicitly bind this to a function using 
// call(), apply(), or bind().

function greet() {
    console.log(this.name);
  }
  
  const obj3 = { name: "Alice" };
  
  greet.call(obj3); // Alice
  greet.apply(obj3); // Alice
  greet.bind(obj3)(); // Alice