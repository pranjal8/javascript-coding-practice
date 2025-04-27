

// Classes --> In classes, this behaves similarly to constructor functions, referring to the instance of the class.
class Person2 {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(this.name);
    }
  }
  
  const p = new Person2("Alice");
  p.greet(); // Alice