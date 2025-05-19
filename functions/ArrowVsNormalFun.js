function multiply() {
  console.log(arguments);
  console.log(multiply.arguments[0]);
}

multiply(3, 5, { name: "Pranjal", address: "Pune" });

const obj = {
  name: "Pranjal",
  age: 29,

  print: function () {
    console.log("Inside outer function ", this);

    /* 
    Here, we have two functions. The first one is print which is a method of the obj object. 
    The second is print2 which is a function declared inside print. print2() is also called directly.
    In this case, print is called by obj (obj.print()) but no object calls print2 (print2()). 
    So the this in print2 would reference the window object by default. 
    */

    function print2(params) {
      console.log("Inside inner function ", this);
    }

    print2();
  },

  show: () => {
    /* 
   By using an arrow function for print, this function does not automatically create a this variable. 
   As a result, any reference to this would point to what this was before the function was created.
   As you see in the result, this was pointing to the Window object before print was created. 
  */
    console.log(this);
  },

  display: function () {
    console.log(this);

    const display2 = () => {
      /* 
         "In Arrow function this will point to the previous this values as arrow function do not create their own this bindings: "
      */
      console.log(this);
    };

    display2();
  },
};

obj.print();
obj.show();
obj.display();
