function MakeClass(greet = "hello"){
    return class{
        sayHi(){
            console.log("hi", greet)
        }
    }
}

let User = MakeClass("Sai"); // User class is created with greet as Sai
new User().sayHi(); // hi Sai


