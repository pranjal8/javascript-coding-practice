
function User(name){
    //this={} // (implicitly)

    // add properties to this
    this.name= name;
    this.isAdmin= false;

    this.sayHi=function (params) {
        console.log("my name is" + this.name)
    }

    //return this; // (implicitly)
};

let user = new User("Pranjal");

console.log(user.name); // Pranjal
console.log(user.isAdmin); // false
user.sayHi(); // my name is Pranjal