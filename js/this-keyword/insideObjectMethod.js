

// Inside object method
const obj = {
    name: "Alice",
    //When this is used in a method,
    //  it refers to the object that owns the method.
    greet: function () {
      console.log(this.name);
    },
  };
  obj.greet(); // Alice