let user = {
  firstName: "Pranjal",
  sayHi() {
    console.log("Hello", this.firstName);
  },
};

user.sayHi(); //Hello Pranjal
setTimeout(user.sayHi, 1000); //Hello undefined

setTimeout(()=>{user.sayHi()}, 1000) //Hello Pranjal
